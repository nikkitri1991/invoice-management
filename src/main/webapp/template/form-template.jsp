<!-- Modal -->
<div class="modal fade" id="<%=request.getParameter("formId")%>Modal"
	tabindex="-1"
	aria-labelledby="<%=request.getParameter("formId")%>ModalLabel"
	aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title"
					id="<%=request.getParameter("formId")%>ModalLabel">Modal title</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body">...</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary"
					data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div>
	</div>
</div>
<!-- templates  -->
<script id="jf-form-template" type="text/x-handlebars-template">          
  <form id="{{id}}" name="{{name}}" enctype="{{enctype}}">
    <h2>{{title}}</h2>
	<h5>{{subtitle}}</h5>
  </form>
</script>

<!-- templates  -->
<script id="jf-text-template" type="text/x-handlebars-template">          
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" placeholder="{{placeHolder}}" id="{{name}}" value="{{value}}" {{#if required}}required{{/if}}>
  </div>
</script>

<script id="jf-date-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}" {{#if required}}required{{/if}}>
  </div>
</script>

<script id="jf-time-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" step = "{{step}}" value="{{value}}"{{#if required}} required{{/if}}>
  </div>
</script>

<script id="jf-hidden-template" type="text/x-handlebars-template">
  <input type="{{type}}" name="{{name}}" value="{{value}}" id="{{name}}">
</script>

<script id="jf-textarea-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <textarea class="form-control" name="{{name}}" placeholder="{{placeHolder}}" id="{{name}}" rows="{{rows}}" cols="{{cols}}" {{#if required}}required{{/if}}>{{value}}</textarea>
  </div>
</script>

<script id="jf-email-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}" {{#if required}}required{{/if}}>
  </div>
</script>

<script id="jf-password-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}"  {{#if required}}required{{/if}} minlength="{{minLength}}">
  </div>
</script>

<script id="jf-number-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}" {{#if required}}required{{/if}} maxlength="{{maxlength}}">
  </div>
</script>


<script id="jf-radio-template" type="text/x-handlebars-template">
  <div class="form-group" id="{{name}}-form-group">
    <label class="form-label">{{label}}</label>
	{{#each options}}
    	<div class="form-check">
      		<input type="radio" name="{{../name}}" value="{{value}}" checked="checked"><label class="form-check-label ms-1" for="{{../name}}">{{label}}</label>
    	</div>
	 {{/each}}
  </div>
</script>

<script id="jf-checkbox-template" type="text/x-handlebars-template">
  <div class="form-group" id="{{name}}-form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
	{{#each options}}
    	<div class="form-check">
      		<input type="checkbox" name="{{../name}}" value="{{value}}" checked="checked"><label class="form-check-label ms-1" for="{{../name}}">{{label}}</label>
    	</div>
	 {{/each}}
  </div>
</script>

<script id="jf-select-template" type="text/x-handlebars-template">
	<div class="form-group">	
		<label for="{{name}}" class="form-label">{{label}}</label>
		<select name="{{name}}" id="{{name}}" class="form-control">
			<option value="-1">Select {{label}}</option>
			{{#each options}}
            	<option value="{{value}}">{{label}}</option>
            {{/each}}
		</select>
	</div>
</script>

<script id="jf-file-template" type="text/x-handlebars-template">
	<div class="form-group">	
		<label for="{{name}}" class="form-label">{{label}}</label>
		<input type="file" id="{{name}}" name="{{name}}" class="form-control" accept="{{accept}}"/>
	</div>
</script>

<script id="jf-field-group-template" type="text/x-handlebars-template">
	<div class="row" id="{{name}}">
			
	</div>
</script>

<script id="jf-form-actions-template" type="text/x-handlebars-template">
	<div class="container mt-3">
		<div class="row" id="action-row">
			<div class="col-md-12">
				<div class="float-right">
					{{#each []}}
						{{#if_ne applyTo "list"}}
							{{#if_eq handler.type "javascript"}}
								<button name="{{name}}" id="{{name}}" type="{{type}}" applyto="{{applyTo}}" class="btn {{cssClass}}" onclick="{{handler.func}}">{{label}}</button>
							{{/if_eq}}
					
							{{#if_ne handler.type "javascript"}}
	  							<button name="{{name}}" id="{{name}}" type="{{type}}" applyto="{{applyTo}}" class="btn {{cssClass}}" onclick="{{name}}OnClick(event)">{{label}}</button>
							{{/if_ne}}
						{{/if_ne}}
					{{/each}}
				</div>
			</div>
		</div>
	</div>
</script>

<script id="jf-button-template" type="text/x-handlebars-template">
	{{#if_eq handler ""}}
  		<button name="{{name}}" id="{{name}}" type="{{type}}" class="btn btn-primary" onclick="{{name}}OnClick(event)">{{label}}</button>
	{{/if_eq}}
	
	{{#if_ne handler ""}}
		{{#if_eq handler.type "javascript"}}
	  		<button name="{{name}}" id="{{name}}" type="{{type}}" class="btn btn-primary" onclick="{{handler.func}}">{{label}}</button>
		{{/if_eq}}
	{{/if_ne}}
</script>

<script id="jf-link-template" type="text/x-handlebars-template">
	{{#if_eq handler.type "javascript"}}
  		<a name="{{name}}" id="{{name}}" onclick="{{handler.func}}"><i class="fa {{label}}" aria-hidden="true"></i></a>
	{{/if_eq}}
</script>


<script id="jf-list-template" type="text/x-handlebars-template">
	<div class="form-group">
		<label for="{{name}}" class="form-label">{{label}}</label>
		<table class="table table-bordered" id="{{name}}">
			<thead>
				<tr>
					{{#each fields}}
						<td>{{label}}</td>
					{{/each}}
					<td>Actions</td>
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>
	</div>
</script>

<script id="jf-list-field-template" type="text/x-handlebars-template">
	<tr>
		{{#each fields as | field}}
			<td>{{>textField}}</td>
		{{/each}}
	</tr>
</script>

<!--  List sub field elements -->
<!-- templates  -->
<script id="list-text-template" type="text/x-handlebars-template">          
    <input type="{{type}}" class="form-control" name="{{name}}" placeholder="{{placeHolder}}" id="{{name}}" value="{{value}}" {{#if required}}required{{/if}}>
</script>

<script id="list-textarea-template" type="text/x-handlebars-template">          
    <input type="{{type}}" class="form-control" name="{{name}}" placeholder="{{placeHolder}}" id="{{name}}" value="{{value}}" {{#if required}}required{{/if}}>
</script>

<script id="list-date-template" type="text/x-handlebars-template">
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}">
</script>

<script id="list-email-template" type="text/x-handlebars-template">
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}">
</script>

<script id="list-password-template" type="text/x-handlebars-template">
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}"  minlength="{{minLength}}">
</script>

<script id="list-number-template" type="text/x-handlebars-template">
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}" maxlength="{{maxlength}}">
</script>


<script id="list-radio-template" type="text/x-handlebars-template">
	{{#each options}}
      	<input type="radio" name="{{../name}}" value="{{value}}" checked="checked"> <label class="form-check-label" for="{{../name}}">{{label}}</label>
	 {{/each}}
  </div>
</script>

<script id="list-checkbox-template" type="text/x-handlebars-template">
	{{#each options}}
      	<input type="checkbox" name="{{../name}}" value="{{value}}" checked="checked"> <label class="form-check-label" for="{{../name}}">{{label}}</label>
	 {{/each}}
  </div>
</script>

<script id="list-select-template" type="text/x-handlebars-template">
	<select name="{{name}}" id="{{name}}" class="form-control">
		<option value="-1">Select {{label}}</option>
		{{#each options}}
        	<option value="{{value}}">{{label}}</option>
		{{/each}}
	</select>
</script>

<script id="list-file-template" type="text/x-handlebars-template">
	<input type="file" id="{{name}}" name="{{name}}" class="form-control" accept="{{accept}}"/>
</script>


<!----------- script  ------------>
<script>
var formContainerId='<%=request.getParameter("formContainerId")%>';
var formId='<%=request.getParameter("formId")%>';

const templates = {            //object for mapping object to id
	form : '#jf-form-template',
    text: '#jf-text-template',
    textarea: '#jf-textarea-template',
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
    list_text: '#list-text-template',
    list_date: '#list-date-template',
    list_email: '#list-email-template',
    list_password: '#list-password-template',
    list_number: '#list-number-template',
    list_select : '#list-select-template',
    list_radio: '#list-radio-template',
    list_checkbox : '#list-checkbox-template',
    list_file : '#list-file-template',
    list_textarea : '#list-textarea-template',
    group : '#jf-field-group-template',
    button : '#jf-button-template',
    form_actions : '#jf-form-actions-template',
    link : '#jf-link-template'
};

$(document).ready(() => {
	renderForm();
	fillOptions();
	bindEvents();
	bindValidations();
});

function renderForm() {
	if($('#'+form.id).length==0){
		renderFormObject()
	}
	renderFormFields();
    renderFormGroups();
    renderFormLists();
    renderFormActions();
}

function renderFormObject(){
	const template = $(templates['form']).html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(form);
    $('#' + formContainerId).append(html);
}

function renderFormFields(){
	// Loop through fields array
    form.fields.forEach(field => {
    	//console.log(field.group + "");
        if (!(field.group && field.group != '')) {
            const template = $(templates[field.type]).html();
            const compiledTemplate = Handlebars.compile(template);
            const html = compiledTemplate(field);
            $('#' + form.id).append(html);
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
function renderFormGroups(){
	form.fields.forEach(field => {
        if (field.type == "group") {
            field.fields.forEach(subfield => {
                const template = $(templates[subfield.type]).html();
                const compiledTemplate = Handlebars.compile(template);
                $('<div />', {class:'col'}).append(compiledTemplate(subfield)).appendTo($('#' + field.name));
            });
        }
    });
}

function renderFormLists(){
    form.fields.forEach(field => {
        if (field.type == "list") {
       		if(field.editMode == "inline"){
       			addListRow(field);
       			var td=$('#'+field.name).find('tr').find('td').last();
       			$(td).children('a[name="deleteRow"]').hide();

       		}else if(field.editMode == 'dialog'){
       			initListTable(field, true);
       		}
/*        	}else if(field.editable != '' && !field.editable){
        		initListTable(field, false);
        	}*/
        }
    });
}

function renderFormActions(){
    if(form.actions.length>0){
	    const template = $(templates['form_actions']).html();
	    const compiledTemplate = Handlebars.compile(template);
	    const html = compiledTemplate(form.actions);
	    $('#' + form.id).append(html);
    }
}

function fillOptions() {
    form.fields.forEach(field => {
    	if(field.type!='group'){
    		if (field.provider && field.provider.url) {
    			fillFieldOptions(field);
    		}
    	}else{
    		field.fields.forEach(grpfield => {
    			if (grpfield.provider && grpfield.provider.url) {
        			fillFieldOptions(grpfield);
        		}
    		});
    	}
    });
}

function fillFieldOptions(field) {
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
         	var checkbox=(field.type == "checkbox");
         	var radio=(field.type == "radio");
             var i=0;
             
             var dataNode;
             
             if(provider.dataNode == undefined){
             	dataNode=data;
             }else{
             	dataNode=data[provider.dataNode];
             }
             
             //console.log(dataNode);
             $.each(dataNode, function(key, item) {
             	//console.log(key);
	             	
             	var value;
             	var label;
             	
             	if(provider.value!=undefined && provider.value!='' && provider.label!=undefined && provider.label!=''){
             		value=item[provider.value];
             		label=item[provider.label];
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

function actionOnClick(event){
	 event.preventDefault();
	 var action=findAction(event);
	 invokeUrl(action);
}

function findAction(event){
	 var target = $( event.target);
	 var actionName=$(target).attr("name");
	 var actionType=$(target).attr("type");
	 var applyTo=$(target).attr("applyto");
	 //console.log(actionName+" - "+actionType+" - "+applyTo);
	 var action;
	 form.actions.forEach(a => {
		 if(a.name==actionName && a.type==actionType && a.applyTo==applyTo){
			 action=a;
		 }
	 });
	 //console.log(action);
	 return action;
}

function invokeUrl(action){
	
	var handler=action.handler;
	//console.log(handler);
    $.ajax({
        url: handler.url,
        type: handler.method,
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function(response) {
            alert('URL is called..');
        },
        error: function(error) {
            alert('Error: URL call failed..');
        }
    });
}

function submitForm(event) {
	alert("submit form called");
    event.preventDefault();
    var action=findAction(event);
    
    var handler=action.handler;
    //console.log(handler);
    
    var formData = $('#'+form.id).toJSON();
    
    //console.log(formData);
    
    // make AJAX request
    $.ajax({
        url: handler.url,
        type: handler.method,
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function(response) {
            alert('Data saved in API URL');
        },
        error: function(error) {
            alert('Error: data not saved');
            //location.href="<%=request.getParameter("cancelPage")%>";
        }
    });
}

(function ($) {
    $.fn.toJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
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

function saveOnClick(event){
	 //event.preventDefault();
	 //submitForm(event);
}

function cancelOnClick(event){
	 event.preventDefault();
	 location.href="<%=request.getParameter("cancelPage")%>";
}

function addRow(event){
	//event.preventDefault();
	var target = $(event.target);
	
	var nodeName = $(target).prop('nodeName');
	
	if(nodeName!='a' && nodeName!='button'){
		target=$(target).parent();
	}
	
	var field;
	var table;

	if($(target).parents('table').length>0){
		table=$(target).parents('table');
	}
	
	if (table != undefined){
		field=findFieldByNameAndType($(table).attr('id'), "list");
	}else{
		wrapper=$(target).siblings('.dataTables_wrapper');
		table=$(wrapper).find('.dataTable');
		field=findFieldByNameAndType($(table).attr('id'), "list");
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
		
		addListRow(field);
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

function addListRow(field){
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
	    	const template = $(templates[action.type]).html();
	    	const compiledTemplate = Handlebars.compile(template);
	    	$(td).append(compiledTemplate(action));
    	});
    }
    
    $(td).appendTo(tr);
   	$(tr).appendTo($('#' + field.name).find('tbody'));
}

function initListTable(field, editable){
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
	    	var html=compiledTemplate(action)
	    	$(html).addClass('float-end list-action').insertBefore(tableWrapper);
		}
	});
}

function findFieldByNameAndType(name, type){
	var field;
	form.fields.forEach(f => {
		if(f.name==name && f.type==type){
			field=f;
		}
	});
	
	if(field==undefined){
		form.fields.forEach(f => {
			if(f.type==group){
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

function findFieldByName(name){
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

function bindEvents(){
	form.fields.forEach(field => {
		var events=field.events;
		if(events!=undefined){
			var keys=Object.keys(events);
			$.each(field.events, function(key, receivers) {
				$('#'+field.name).bind(key, function(){
					bindEventReceivers(field, receivers);
				});
			});
		}
	});
}

function bindEventReceivers(eventSource, receivers){
	receivers.forEach(receiver => {
		if(receiver.type="field"){
			if(receiver.trigger=="refill"){
				
				refillField(receiver.receiver);
			}else if(receiver.trigger=="hide"){
				$('#'+receiver.receiver).closest("div").hide();
			}else if(receiver.trigger=="show"){
				$('#'+receiver.receiver).closest("div").show();
			}else if(receiver.trigger=="enable"){
				$('#'+receiver.receiver).prop("disabled", false);
			}else if(receiver.trigger=="disable"){
				$('#'+receiver.receiver).prop("disabled", true );
			}
		}else if(receiver.type="javascript"){
			executeFunctionByName(receiver.name, window, eventSource);
		}
	});
}

function refillField(fieldName){
	var field=findFieldByName(fieldName);
	fillFieldOptions(field);
}

function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

function bindValidations(){
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

</script>