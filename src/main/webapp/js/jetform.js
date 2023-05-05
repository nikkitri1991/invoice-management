const templates = {            //object for mapping object to id
    text: '#jf-text-template',
    date: '#jf-date-template',
    submit: '#jf-button-template',
    email: '#jf-email-template',
    password: '#jf-password-template',
    number: '#jf-number-template',
    select : '#jf-select-template',
    radio: '#jf-radio-template',
    checkbox : '#jf-checkbox-template',
    file : '#jf-file-template',
    list : '#jf-list-template',
    datatable: '#jf-datatable-template',
    form : '#jf-form-template',
	list_header : '#jf-list-header-template',
	list_actions : '#jf-list-actions-template',
	row_actions : '#jf-row-actions-template',
    list_text: '#list-text-template',
    list_date: '#list-date-template',
    list_email: '#list-email-template',
    list_password: '#list-password-template',
    list_number: '#list-number-template',
    list_select : '#list-select-template',
    list_radio: '#list-radio-template',
    list_checkbox : '#list-checkbox-template',
    list_file : '#list-file-template',
    group : '#jf-field-group-template',
    button : '#jf-button-template',
    form_actions : '#jf-form-actions-template',
    link : '#jf-link-template'
};

function JetForm (config) {
	let jetForm = Object.create(JetForm.prototype)
	jetForm.form = config.form;
	jetForm.form.id=config.id;
	jetForm.form.parentId=config.parentId;
	jetForm.form.data={};
	
  	if(config.data != undefined){
		jetForm.form.data=config.data;
	}
	
	if(config.redirections!=undefined){
		jetForm.form.redirections=config.redirections;
  	}
  
  	window[config.id]=jetForm;
  	return jetForm;
}

JetForm.prototype.render = function() {
	var _this = this;
	var form = _this.form;
	var data = form.data;
	
	if($('#'+form.id).length==0){
		_this.renderForm();
	}
	
	if(data.id !=undefined && data.id !=''){
		_this.setFieldValues();
	}
	
	_this.renderFields();
    _this.renderGroups();
    _this.renderLists();
    _this.renderActions();
	_this.fillOptions();
	_this.bindEvents();
	_this.bindValidations();
}

JetForm.prototype.setFieldValues = function() {
	var form = this.form;
	var provider = form.dataProvider.selector;
	var url = (provider != undefined? provider.url:'');
	if(provider.pathParam != undefined && url != undefined){
		url = formatMessage(url, provider.pathParam);
	}
	
	if(url != undefined){
		$.ajax({
	         url: url,
	         type: (provider.method != undefined ? provider.method : "GET"),
	         data: (provider.queryParam != undefined ? provider.queryParam : {}),
	         dataType: "json",
	         contentType: "application/json"
	     }).done(function(response) {
			var data;
			if(provider.dataNode != undefined && provider.dataNode != ''){
				data = response[provider.dataNode];
			}else{
				data = response;
			}
		
			form.fields.forEach(field => {
				if(field.type != 'group' && field.type != 'list'){
					field.value = data[field.name];
				}else if(field.type == 'group'){
					field.fields.forEach(subfield => {
						subfield.value = data[subfield.name];
					});
				}
			});
		
		}).fail(function(error) {
			console.log(error);
		});
     }
}

JetForm.prototype.renderForm = function() {
	var form = this.form;
	const template = $(templates['form']).html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(form);
    $('#' + form.parentId).append(html);
}

JetForm.prototype.renderFields = function() {
	var form = this.form;
	// Loop through fields array
    form.fields.forEach(field => {
    	//console.log(field.group + "");
        if (!(field.group && field.group != '')) {
			var generate=true;
			if(field.type=='group'){
				if(field.auto==undefined || field.auto==true){
					if(field.col==undefined){
						field.col="12";
					}
				}else{
					generate=false;
				}
			}
			if(generate){
	            const template = $(templates[field.type]).html();
	            const compiledTemplate = Handlebars.compile(template);
	            const html = compiledTemplate(field);
	            $('#' + form.id).append(html);
            }
        }
    });

    // Loop through fields array
    form.fields.forEach(field => {
        if (field.group && field.group != '') {
            const template = $(templates[field.type]).html();
            const compiledTemplate = Handlebars.compile(template);
            $('<div />', {class:'col'}).append(compiledTemplate(field)).appendTo($('#' + field.group));
        }
    });
}

JetForm.prototype.renderGroups = function() {
	var form = this.form;
	form.fields.forEach(field => {
        if (field.type == "group") {
			
			/*var row;
			var col;
			var colCssClass='col-md-'+(12/field.fields.length);
			if(field.col != undefined){
				colCssClass='col-md-'+field.col;
				col=$('<div />', {class:colCssClass});
				row=$('<div />', {class:'row'});
			}*/
			
			var colClass='col-md-'+(12/field.fields.length);
			
            field.fields.forEach(subfield => {
                const template = $(templates[subfield.type]).html();
                const compiledTemplate = Handlebars.compile(template);
                if(subfield.col != undefined){
					colClass='col-md-'+subfield.col
				}
				//if(col==undefined){
            	$('<div />', {class:colClass}).append(compiledTemplate(subfield)).appendTo($('#' + field.name))
                //}else{
				//	$('<div />', {class:colCssClass}).append(compiledTemplate(subfield)).appendTo(row);
				//}
            });
            /*
            if(row!=undefined){
				row.appendTo(col);
				col.appendTo($('#' + field.name));
			}
			*/
        }
    });
}

JetForm.prototype.renderLists = function() {
	var _this = this;
	var form = this.form;
    form.fields.forEach(field => {
		if (field.type == "list") {
        	_this.renderList(field);
        }
        if(field.type=="group"){
			field.fields.forEach(subfield => {
				if (subfield.type == "list") {
					_this.renderList(subfield);
				}
			});
		}
    });
}

JetForm.prototype.renderList = function(field) {
	var _this = this;
    if (field.type == "list") {
    	if(field.editMode == "inline"){
       		_this.addListRow(field);
       		var td=$('#'+field.name).find('tr').find('td').last();
       		$(td).children('a[name="deleteRow"]').hide();

       	}else if(field.editMode == 'dialog'){
       		_this.initListTable(field, true);
       	}
/*        	}else if(field.editable != '' && !field.editable){
        		initListTable(field, false);
        	}*/
	}
}


JetForm.prototype.renderActions = function() {
	var form = this.form;
    if(form.actions.length>0){
		form.actions.forEach(action => {
			action['formId']=form.id;
		});
	    const template = $(templates['form_actions']).html();
	    const compiledTemplate = Handlebars.compile(template);
	    const html = compiledTemplate(form.actions);
	    
	    $('#' + form.id).append(html);
    }
}

JetForm.prototype.fillOptions = function() {
	var _this = this;
	var form = this.form;
    form.fields.forEach(field => {
    	if(field.type!='group'){
    		if (field.provider && field.provider.url) {
    			_this.fillFieldOptions(field);
    		}
    	}else{
    		field.fields.forEach(grpfield => {
    			if (grpfield.provider && grpfield.provider.url) {
        			_this.fillFieldOptions(grpfield);
        		}
    		});
    	}
    });
}

JetForm.prototype.fillFieldOptions = function(field) {
	var provider = field.provider;
    if (provider!=undefined && provider.url!=undefined && provider.url.length>0) {
    	$('#'+field.name).empty();
    	$("#" + field.name).append(new Option("Select "+field.label, "-1"));
    	var apiParams={};
        var params=provider.params;
        if(params != undefined){
        	//var keys=Object.keys(params);
        	params.forEach(param => {
        		var value=param.value;
        		
        		//console.log ("type of value: "+(typeof value)+" -- "+value);
        		//console.log(value);
        		
        		if(value.startsWith('.') || value.startsWith('#')){
        			value=$(value).val();
        			apiParams[param.name]=value;
        		}
        	});
        }
        
         $.ajax({
             type: "GET",
             url: provider.url,
             dataType: "json",
             data: apiParams,
             contentType: "application/json"
         })
         .done(function(data) {
         	var select=(field.type == "select");
             var i=0;
             
             var dataNode;
             
             if(provider.dataNode == undefined){
             	dataNode=data;
             }else{
             	dataNode=data[provider.dataNode];
             }
             
             $.each(dataNode, function(key, item) {
	             	
             	var value;
             	var label;
             	
             	if(provider.value!=undefined && provider.value!='' && provider.label!=undefined && provider.label!=''){
             		value=item[provider.value];
					if(provider.label.indexOf("{")<0){
		     			label=item[provider.label];
		     		}else{
						var tmp=provider.label;
						while(tmp.indexOf("{")>=0){
							var si = tmp.indexOf("{");
							var li = tmp.indexOf("}");
							var key = tmp.substring (si+1, li);
							var labelVal=item[key];
							tmp=tmp.replace(tmp.substring(si, li+1), labelVal);
						}
						
						label=tmp;
					}
             	}else{
             		value=key;
             		label=item;
             	}
             	
             	if(select){
             		$("#" + field.name).append(new Option(label, value));
             	}else{
             		var div=$('<div>', {
    					class: 'form-check'
					});

                 	$('<input />', { 
                 		type: field.type, 
                 		id: field.name+(i++), 
                 		name: field.name,
                 		value: value }).appendTo(div);
                 	
					$('<label />', {
						class:'form-check-label ms-1',
						for:field.name,
						text: label }).appendTo(div);

					$("#" + field.name+"-form-group").append(div);
             	}
             });
         })
         .fail(function(data) {
             console.log(data);
         });
    }
}

JetForm.prototype.getIdField = function(){
	var _this = this;
	var form = _this.form;
	return findIdField(form);
}

function findAction (event){
	 var target = $( event.target);
	 var nodeName = $(target).prop('nodeName').toLowerCase();
	
	if(nodeName!='a' && nodeName!='button'){
		target=$(target).parent();
	}
	 var actionName=$(target).attr("name");
	 var actionType=$(target).attr("type");
	 var applyTo=$(target).attr("applyto");
	 //console.log(actionName+" - "+actionType+" - "+applyTo);
	 //console.log("formId - " +$(target).attr('formId'));
	 
	 var _this = window[$(target).attr('formId')];
	 //console.log(_this);
	 
	 var form = _this.form;
	 
	 //console.log(form);
	 var action;
	 form.actions.forEach(a => {
		 if(a.name==actionName && a.type==actionType && a.applyTo==applyTo){
			 action=a;
		 }
	 });
	 
	 //console.log(action);
	 return action;
}

function submitForm(event) {
	
	var target = $( event.target);
	var nodeName = $(target).prop('nodeName').toLowerCase();
	
	if(nodeName!='a' && nodeName!='button'){
		target=$(target).parent();
	}
	
	var _this = window[$(target).attr('formId')];
	var form = _this.form;
	
	if(!$('#'+form.id).valid()){
		return;	
	}
		
	var action = findAction(event);
	
	console.log($(target).attr("name"));
	var redirects=action.redirects;
	var success = redirects.success;
	var failure = redirects.failure;
	
	
	console.log(success);
	console.log(failure);
	
	alert("submit form called");
//    var action=_this.findAction(event);
    
 //   var handler=action.handler;
    //console.log(handler);
    
    var formData = $('#'+form.id).toJSON();
    
    console.log(formData);
    
    // make AJAX request
    $.ajax({
        url: form.dataProvider.create.url,
        type: form.dataProvider.create.method,
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function(response) {
            alert('Data saved in API URL');
            if(success != undefined){
	            if(success.href != undefined){
					window.location.href=success.href;
				}else if(success.url != undefined){
					$.ajax({
				        url: success.url,
				        type: success.method,
				        contentType: 'application/json'
			        })
			        .done(function(response) {
						console.log(response);
			        })
			        .fail(function(data) {
	             		console.log(data);
	         		});
				}else if(success.script != undefined){
					executeFunctionByName(success.script, window, response);
				}
			}else{
				alert("No success redirection is defined for "+$(target).attr("name"));
			}
        },
        error: function(error) {
            alert('Error: data not saved');
            if(failure != undefined){
	            if(failure.href != undefined){
					window.location.href=failure.href;
				}else if(failure.url != undefined){
					$.ajax({
				        url: failure.url,
				        type: failure.method,
				        contentType: 'application/json'
			        })
			        .done(function(response) {
						console.log(response);
			        })
			        .fail(function(data) {
	             		console.log(data);
	         		});
				}else if(failure.script != undefined){
					executeFunctionByName(failure.script, window, error);
				}
			}else{
				alert("No failure redirection is defined for "+$(target).attr("name"));
			}
        }
    });
}

function addRow(event){
	//event.preventDefault();
	
	var target = $(event.target);
	
	var nodeName = $(target).prop('nodeName').toLowerCase();
	
	if(nodeName!='a' && nodeName!='button'){
		target=$(target).parent();
	}
	
	var field;
	var table;

	var _this = window[$(target).attr('formId')];

	if($(target).parents('table').length>0){
		table=$(target).parents('table');
	}
	
	if (table != undefined){
		field=_this.findFieldByNameAndType($(table).attr('id'), "list");
	}else{
		wrapper=$(target).siblings('.dataTables_wrapper');
		table=$(wrapper).find('.dataTable');
		field=_this.findFieldByNameAndType($(table).attr('id'), "list");
	}	
	
	if(field.editMode == "inline"){
		$(target).hide();
		$(target).siblings().show();
		
		/*if(elementType=='a' || elementType=='button'){
			$(target).hide();
			$(target).siblings().show();
		}else{
			$(target).parent().hide();
			$(target).parent().siblings().show();
		}*/
		
		_this.addListRow(field);
	}else if(field.editMode == "dialog"){
		$('#'+formId+'Modal').modal('show').find('.modal-body').load('http://localhost:8081/jetform-renderer/form-template.jsp');
	}
}

function deleteRow(event){
	var target = $( event.target);
	if(confirm('Are you sure to delete the row?')){
		var tbody=$(target).parents('tbody');
		if($(tbody).find('tr').length>1){
			$(target).closest('tr').remove();

			if($(tbody).find('tr').length==1){
				var td=$(tbody).find('tr').find('td').last();
				$(td).children('a[name="deleteRow"]').hide();
				$(td).children('a[name="addRow"]').show();
			}else{
				var td=$(tbody).find('tr').last().find('td').last();
				$(td).children('a[name="deleteRow"]').show();
				$(td).children('a[name="addRow"]').show();
			}
		}
	}
}

JetForm.prototype.addListRow = function(field){
	var _this = this;
   	var tr=$('<tr />');
    field.fields.forEach(subfield => {
        const template = $(templates["list_"+subfield.type]).html();
        const compiledTemplate = Handlebars.compile(template);
        var html=compiledTemplate(subfield)
        $('<td />').append(html).appendTo(tr);
    });
    
    if(field.actions.length>0){
    	var td=$('<td />');
    	field.actions.forEach(action => {
			action['formId']=_this.form.id;
	    	const template = $(templates[action.type]).html();
	    	const compiledTemplate = Handlebars.compile(template);
	    	$(td).append(compiledTemplate(action));
    	});
    }
    
    $(td).appendTo(tr);
   	$(tr).appendTo($('#' + field.name).find('tbody'));
}

JetForm.prototype.initListTable = function(field, editable){
	var form = this.form;
	var table= $('#'+field.name).DataTable({
		filter: false,
		paging: false,
        ordering: false,
        info: false,
        responsive: true
	});
	
	var tableWrapper=$('#'+field.name).parents('#'+field.name+'_wrapper');
	field.actions.forEach(action => {
		if(action.applyTo=='list'){
	    	const template = $(templates[action.type]).html();
	    	const compiledTemplate = Handlebars.compile(template);
	    	action["formId"]=form.id;
	    	console.log(action);
	    	var html=compiledTemplate(action)
	    	$(html).addClass('float-end list-action').insertBefore(tableWrapper);
		}
	});
}

JetForm.prototype.findFieldByNameAndType = function(name, type){
	var form = this.form;
	var field;
	form.fields.forEach(f => {
		if(f.name==name && f.type==type){
			field=f;
		}
	});
	
	if(field==undefined){
		form.fields.forEach(f => {
			if(f.type=='group'){
				f.fields.forEach(f1 => {
					if(f1.name==name && f1.type==type){
						field=f1;
					}
				})
			}
		});
	}
	
	return field;
}

JetForm.prototype.findFieldByName = function(name){
	var form = this.form;
	var field;
	form.fields.forEach(f => {
		if(f.name==name){
			field=f;
		}
	});
	if(field==undefined){
		form.fields.forEach(f => {
			if(f.type=="group"){
				f.fields.forEach(f1 => {
					if(f1.name==name){
						field=f1;
					}
				})
			}
		});
	}
	return field;
}

JetForm.prototype.bindEvents = function(){
	var _this = this;
	var form = this.form;
	form.fields.forEach(field => {
		if(field.type!='group' && field.type!='list'){
			var events=field.events;
			if(events!=undefined){
				//var keys=Object.keys(events);
				$.each(events, function(key, receivers) {
					$('#'+field.name).bind(key, function(){
						_this.bindEventReceivers(field, receivers);
					});
				});
			}
		}else if(field.type=='group'){
			field.fields.forEach(subfield => {
				var events=subfield.events;
				if(events!=undefined){
					//var keys=Object.keys(events);
					$.each(events, function(key, receivers) {
						$('#'+subfield.name).bind(key, function(){
							_this.bindEventReceivers(subfield, receivers);
						});
					});
				}
			});
		};
	});
}

JetForm.prototype.bindEventReceivers = function(eventSource, receivers){
	var _this = this;
	receivers.forEach(receiver => {
		if(receiver.type=="field"){
			if(receiver.trigger=="refill"){
				_this.refillField(receiver.receiver);
			}else{
				var result=true;
				if(receiver.criterias!=undefined){
					$.each(receiver.criterias, function(key, criteria) {
						if($(key).val()==criteria){
							result=result?true:false;
						}else{
							result=false
						}
					});
				}
				
			 	if(receiver.trigger=="hide"){
					if(result){
						$('#'+receiver.receiver).closest("div").hide();
					}else{
						$('#'+receiver.receiver).closest("div").show();
					}
				}else if(receiver.trigger=="show"){
					if(result){
						$('#'+receiver.receiver).closest("div").show();
					}else{
						$('#'+receiver.receiver).closest("div").hide();
					}
				}else if(receiver.trigger=="enable"){
					$('#'+receiver.receiver).prop("disabled", !result);
				}else if(receiver.trigger=="disable"){
					$('#'+receiver.receiver).prop("disabled", result);
				}
			}
		}else if(receiver.type=="javascript"){
			executeFunctionByName(receiver.receiver, window, eventSource);
		}
	});
}

JetForm.prototype.refillField = function(fieldName){
	var _this = this;
	var field=_this.findFieldByName(fieldName);
	_this.fillFieldOptions(field);
}

JetForm.prototype.bindValidations = function(){
	var form = this.form;
	if(form.validations!=undefined){
		$("#"+form.id).validate(form.validations);
	}else{
		var rules={};
		var messages={};
		form.fields.forEach(field => {
			if(field.type!="group"){
				
				if(field.validations!=undefined){
					rules[field.name]=field.validations.rules;
					messages[field.name]=field.validations.messages;
				}
			}else{
				field.fields.forEach(f => {
					if(f.validations!=undefined){
						rules[f.name]=f.validations.rules;
						messages[f.name]=f.validations.messages;
					}
				});
			}
		});
		
		$("#"+form.id).validate({"rules":rules, "messages":messages});
	}
}

JetForm.prototype.transientFields = function(){
	var form = this.form;
	var tranzients=[];
	var ctr=0;
	form.fields.forEach(field => {
		if(field.type!='group' && field.type!='list'){
			if(field.tranzient!=undefined && field.tranzient==true){
				tranzients[ctr++]=field.name;
			}
		}else if(field.type=='group'){
			field.fields.forEach(subfield => {
				if(subfield.type!='group' && subfield.type!='list'){
					if(subfield.tranzient!=undefined && subfield.tranzient==true){
						tranzients[ctr++]=subfield.name;
					}
				}
			});
		}
	});
	return tranzients;
}
	
function actionOnClick(event){
	 event.preventDefault();
	 invokeUrl(event);
}

function saveOnClick(event){
	event.preventDefault();
	submitForm(event);
}

function cancelOnClick(event){
	event.preventDefault();
	var target = $( event.target);
	var nodeName = $(target).prop('nodeName').toLowerCase();
	
	if(nodeName!='a' && nodeName!='button'){
		target=$(target).parent();
	}
	
	console.log($(target).attr("name"));
	
	var action = findAction(event);
	
	var redirects=action.redirects;
	
	var success = redirects.success;
	
	/*$.each(redirects, function(key, item) {
		
		if(key == 'success'){
			success=item;
		}
	});*/
		
	if(success!=undefined){
		if(success.href != undefined && success.href !=''){
			window.location.href=success.href;
		}else if(success.url != undefined && success.url !=''){
			$.ajax({
		        url: success.url,
		        type: success.method,
		        contentType: 'application/json'
		        })
		        .done(function(response) {
					console.log(response);
		        })
		        .fail(function(data) {
             		console.log(data);
         		});
		}else if(success.script != undefined && success.url !=''){
			executeFunctionByName(success, window, event);
		}
	}else{
		alert('No action defined for Cancel.');
	}
	
}

function invokeUrl(event){
	var target = getEventTarget(event);
	var _this=getTargetFormParent(target);
	var form = _this.form;
	var idField =findIdField(form);
	var action = findAction(event)
	var dataKey = $(target).attr('datakey');
	var handler=action.handler;
	//console.log(handler);
	
	var param = {};
	if(dataKey != undefined){
		param[idField.name] = dataKey;
	}
	
	console.log(param);
	if(handler.href != undefined && handler.href != ''){
		var url = handler.href;
		url = formatMessage(url, param);
		url = appendQueryParam(url, param);
		alert(url);
		window.location.href=url;
	}else if(handler.url !=undefined && handler.url != ''){
	    $.ajax({
	        url: handler.url,
	        type: handler.method,
	        data: JSON.stringify(param),
	        contentType: 'application/json',
	        success: function(response) {
	            alert('URL is called..');
	        },
	        error: function(error) {
	            alert('Error: URL call failed..');
	        }
	    });
	 }
}

function executeFunctionByName (functionName, context, args) {
	//var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

(function ($) {
    $.fn.toJSON = function () {
		var jetform = window[$(this).attr('id')];
		var tranzients=jetform.transientFields();
		
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
			var istrans=false;
			var name=this.name;
			$.each(tranzients, function (i, t) {
				if(t==name){
					istrans=true;
				}
			});
			
			if(!istrans){
	            if (o[this.name]) {
	                if (!o[this.name].push) {
	                    o[this.name] = [o[this.name]];
	                }
	                o[this.name].push(this.value || '');
	            } else {
	                o[this.name] = this.value || '';
	            }
            }
        });
        return o;
    };
})(jQuery);

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if(a === b) // Or === depending on your needs
        return opts.fn(this);
    else
        return opts.inverse(this);
});

Handlebars.registerHelper('if_ne', function(a, b, opts) {
    if(a === b) // Or === depending on your needs
    	return opts.inverse(this);
    else
    	return opts.fn(this);
});
Handlebars.registerPartial('textField', Handlebars.compile('#jf-text-template'));

/**************JetList***********************/
/********************************************/

function JetList (config) {
  let jetList = Object.create(JetList.prototype)
  jetList.form = config.form;
  jetList.form.id = config.id;
  jetList.form.parentId = config.parentId;
  window[config.id]=jetList;
  
  return jetList;
}

JetList.prototype.render = function(){
	
	this.renderListHeader();
	this.renderListActions();
	this.renderList();
}
JetList.prototype.renderListHeader = function() {
	var _this = this;
	var form = _this.form;
	const template = $(templates['list_header']).html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(form);
    $('#'+form.parentId).append(html);
}

JetList.prototype.renderListActions = function() {
	var _this = this;
	var form = _this.form;
	
    form.actions.forEach(action => {
		action['formId']=form.id;
	});

	const template = $(templates['list_actions']).html();
    const compiledTemplate = Handlebars.compile(template);
    
    const html = compiledTemplate(form.actions);
    $('#'+form.parentId).append(html);
}

JetList.prototype.renderList = function() {
	var _this = this;
	var form = _this.form;
	
	const template = $(templates['datatable']).html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(form);
    $('#'+form.parentId).append(html);
    
    var provider=form.dataProvider.collection;

    $.fn.dataTable.ext.errMode = 'none';

    $.ajax({
        url: provider.url,
        type: "GET",
        contentType: 'application/json',
        success: function(response) {
        	console.log(response);
        	var columns=[];
        	var ctr=0;
        	form.fields.forEach(field => {
        		if(field.type!='hidden'){
        			columns[ctr++]= { "data": field.name, "title":field.label};
        		}
        	});
        	
        	var data;
        	
        	if(provider.dataNode != undefined && provider.dataNode != ''){
				data = response[provider.dataNode];	
			}else{
				data = response;
			}
			
        	console.log(columns);
        	console.log(data);
        	
        	var table= $('#'+form.id).DataTable({ 
        		responsive: true,
        		data: data,
        		columns: columns,
        		'columnDefs': [{
        		     'targets': columns.length,
        		     'searchable': false,
        		     'orderable': false,
        		     'className': 'dt-body-center dt-body-nowrap',
        		     'render': function (data, type, full, meta){
        		        return _this.renderRowActions(full);
        		    }
        		}]
        	});
        },
        error: function(error) {
            alert('Error in fetching data');
        }
    });
}

JetList.prototype.renderRowActions = function(data) {
	var _this = this;
	var form = _this.form;
	var html='';
	var idField = findIdField(form);
	if(form.actions.length>0){
    	form.actions.forEach(action => {
			
			action['formId']=form.id;
			//action['dataKey']="{'"+idField.name+"':"+"'"+data[idField.name]+"'}";
			action['dataKey']=data[idField.name];
    	});
    	const template = $(templates['row_actions']).html();
    	const compiledTemplate = Handlebars.compile(template);
    	html=compiledTemplate(form.actions);
    }
    			

    //console.log(html);
	return html;
}

JetList.prototype.getIdField = function(){
	var _this = this;
	var form = _this.form;
	return findIdField(form);
}

function findIdField (form) {
	var idField;
	form.fields.forEach(field => {
		if(field.id != undefined && field.id == true){
			idField = field;
		}else if(field.type == 'group'){
			field.fields.forEach(subfield => {
				if(subfield.id != undefined && subfield.id == true){
					idField = subfield;
				}
			});
		}
	});
	return idField;
}

function addOnClick(event){
	event.preventDefault();
	var target = $( event.target);
	var nodeName = $(target).prop('nodeName').toLowerCase();
	
	if(nodeName!='a' && nodeName!='button'){
		target=$(target).parent();
	}
	
	var action = findAction(event);

	console.log(action);
	
	if(action.handler != undefined){
		var handler=action.handler
		if(handler.href != undefined){
			window.location.href=handler.href;
		}else if(handler.url != undefined){
			$.ajax({
		        url: handler.url,
		        type: (handler.method != undefined? handler.method: "GET"),
		        contentType: 'application/json'
		    }).done(function(response) {
				console.log(response);
		    }).fail(function(error) {
             	console.log(error);
         	});
		}else if(handler.script != undefined){
			executeFunctionByName(handler.script, window, event);
		}
	}else{
		executeFunctionByName('handleAddOnClick', window, event);
	}
}

function formatMessage(message, params){
	var tmp=message;
	while(tmp.indexOf("{")>=0){
		var si = tmp.indexOf("{");
		var li = tmp.indexOf("}");
		var key = tmp.substring (si+1, li);
		var value=params[key];
		tmp=tmp.replace(tmp.substring(si, li+1), value);
	}
	
	return tmp;
}

function appendQueryParam(message, params){
	var tmp = message+(message.indexOf("?")>0?"&":"?");
	
	$.each(params, function(key, item) {
		tmp+= (key+"="+item+"&")
	});
	
	return tmp;
}


function editOnClick(event){
	event.preventDefault();
	editData(event);
}

function deleteOnClick(event){
	event.preventDefault();
	if(confirm("Are you dure you want to delete the record!")){
		deleteData(event);
	}
}

function editData(event){
	var target = getEventTarget(event);
	var _this=getTargetFormParent(target);
	var form = _this.form;
	var idField =findIdField(form);
	var action = findAction(event)
	var dataKey = $(target).attr('datakey');
	
	var param = {};
	param[idField.name] = dataKey;
	
	var handler=action.handler;
	
	var url;
	
	if(handler !=undefined){
		if(handler.href != undefined){
			url = handler.href;
		}else if(handler.url != undefined){
			url = handler.url;
		}
		
		if(handler.pathParam != undefined){
			url = formatMessage(url, param);
		}else if(handler.queryParam != undefined){
			url = appendQueryParam(url, param);
		}
		
		alert(url);
		window.location.href=url;
	}
}

function deleteData(event){
	var target = getEventTarget(event);
	var _this=getTargetFormParent(target);
	var form = _this.form;
	var idField =findIdField(form);
	
	var dataKey = $(target).attr('datakey');
	
	var param = {};
	param[idField.name] = dataKey;
	
	var provider;
	
	if(form.dataProvider !=undefined && form.dataProvider.delete !=undefined){
		provider = form.dataProvider.delete;
	}
	
	if(provider != undefined && provider.url != undefined){
		var url = formatMessage(provider.url, param);
		
		$.ajax({
	        url: url,
	        type: provider.method != undefined? provider.method: "GET",
	        contentType: 'application/json',
	        success: function(response) {
				alert('Success: Record deleted successfully!');
	            _this.updateList();
	        },
	        error: function(error) {
	            alert('Error: Delete operation failed!');
	        }
	    });
	}
	console.log(form);
}

function getEventTarget(event){
	var target = $( event.target);
	var nodeName = $(target).prop('nodeName').toLowerCase();
	
	if(nodeName!='a' && nodeName!='button'){
		target=$(target).parent();
	}
	return target;
}

function getEventForm(event){
	var target = getEventTarget(event);
	var form = getTargetForm(target);
	return form;
}

function getTargetForm(target){
	var form = window[$(target).attr('formId')].form;
	return form;
}

function getTargetFormParent(target){
	var jet = window[$(target).attr('formId')];
	return jet;
}

JetList.prototype.updateList = function() {
	var _this = this;
	var form = _this.form;
	if ($.fn.dataTable.isDataTable('#'+form.id)) {
        $('#'+form.id).DataTable().clear().destroy();
    }
    
    _this.renderList();
}