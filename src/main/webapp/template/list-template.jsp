

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
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}">
  </div>
</script>

<script id="jf-email-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}">
  </div>
</script>

<script id="jf-password-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}"  minlength="{{minLength}}">
  </div>
</script>

<script id="jf-number-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}" maxlength="{{maxlength}}">
  </div>
</script>


<script id="jf-radio-template" type="text/x-handlebars-template">
  <div class="form-group" id="{{name}}-form-group">
    <label class="form-label">{{label}}</label>
	{{#each options}}
    	<div class="form-check">
      		<input type="radio" name="{{../name}}" value="{{value}}" checked="checked"> <label class="form-check-label" for="{{../name}}">{{label}}</label>
    	</div>
	 {{/each}}
  </div>
</script>

<script id="jf-checkbox-template" type="text/x-handlebars-template">
  <div class="form-group" id="{{name}}-form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
	{{#each options}}
    	<div class="form-check">
      		<input type="checkbox" name="{{../name}}" value="{{value}}" checked="checked"> <label class="form-check-label" for="{{../name}}">{{label}}</label>
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
	  							<button name="{{name}}" id="{{name}}" type="{{type}}" applyto="{{applyTo}}" class="btn {{cssClass}}" onclick="actionOnClick(event)">{{label}}</button>
							{{/if_ne}}
						{{/if_ne}}
					{{/each}}
				</div>
			</div>
		</div>
	</div>
</script>

<script id="jf-list-actions-template" type="text/x-handlebars-template">
	<div class="container mt-3">
		<div class="row" id="action-row">
			<div class="col-md-12">
				<div class="float-right">
					{{#each []}}
						{{#if_eq applyTo "list"}}
							{{#if_eq handler.type "javascript"}}
								<button name="{{name}}" id="{{name}}" type="{{type}}" applyto="{{applyTo}}" class="btn {{cssClass}}" onclick="{{handler.func}}">{{label}}</button>
							{{/if_eq}}
					
							{{#if_ne handler.type "javascript"}}
	  							<button name="{{name}}" id="{{name}}" type="{{type}}" applyto="{{applyTo}}" class="btn {{cssClass}}" onclick="{{name}}OnClick(event)">{{label}}</button>
							{{/if_ne}}
						{{/if_eq}}
					{{/each}}
				</div>
			</div>
		</div>
	</div>
</script>

<script id="jf-button-template" type="text/x-handlebars-template">
  <button name="{{name}}" id="{{name}}" type="{{type}}" class="btn btn-primary" onclick="submitForm(event)">{{label}}</button>
</script>

<script id="jf-link-template" type="text/x-handlebars-template">
  <a name="{{name}}" id="{{name}}" onclick="submitForm(event)"><i class="fa {{label}}" aria-hidden="true"></i></a>
</script>

<script id="jf-list-header-template" type="text/x-handlebars-template">
	<h3>{{title}}</h3>
</script>

<script id="jf-list-template" type="text/x-handlebars-template">
	<div class="form-group">
		<table class="table table-bordered" id="<%=request.getParameter("listId")%>">
			<thead>
				<tr>
					{{#each []}}
						{{#if_ne type 'group'}}
							{{#if_ne type 'list'}}
								{{#if_ne listable false}}
									<td>{{label}}</td>
								{{/if_ne}}
							{{/if_ne}}
						{{/if_ne}}
					{{/each}}
					<td>Actions</td>
				</tr>
			</thead>
			<tbody id="{{name}}">
				
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

 <!-- script  -->
<script>
	var dataTableContainerId='<%=request.getParameter("listContainerId")%>';
	var dataTableId='<%=request.getParameter("listId")%>';
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
	    list_header : '#jf-list-header-template',
	    list_actions : '#jf-list-actions-template',
	    list_text: '#list-text-template',
	    list_date: '#list-date-template',
	    list_email: '#list-email-template',
	    list_password: '#list-password-template',
	    list_number: '#list-number-template',
	    list_select : '#list-select-template',
	    list_radio: '#list-radio-template',
	    list_checkbox : '#list-checkbox-template',
	    list_file : '#list-file-template',
	    fieldGroup : '#jf-field-group-template',
	    button : '#jf-button-template',
	    form_actions : '#jf-actions-template',
	    link : '#jf-link-template'
  };

$(document).ready(() => {
	renderListHeader();
	renderListActions();
	renderList();
});

function renderListHeader(){
	const template = $(templates['list_header']).html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(form);
    $('#'+dataTableContainerId).append(html);
}

function renderListActions(){
	const template = $(templates['list_actions']).html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(form.actions);
    $('#'+dataTableContainerId).append(html);
}

function renderList() {
	const template = $(templates['list']).html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(form.fields);
    $('#'+dataTableContainerId).append(html);
    $.ajax({
        url: form.dataProvider.collection.url,
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
        
        	console.log(columns);
        	
        	var table= $('#'+dataTableId).DataTable({ 
        		responsive: true,
        		data: response,
        		columns: columns,
        		'columnDefs': [{
        		     'targets': columns.length,
        		     'searchable': false,
        		     'orderable': false,
        		     'className': 'dt-body-center dt-body-nowrap',
        		     'render': function (data, type, full, meta){
        		        return '<button type="button" class="btn btn-primary btn-sm"> Edit</button><button type="button" class="btn btn-danger btn-sm">Delete</button>';
        		    }
        		}]
        	
        	});
        },
        error: function(error) {
            alert('Error in fetching data');
        
        }
    });
}

function renderForm() {
	renderFormTitle()
	renderFormFields();
    renderFormGroups();
    renderFormLists();
    renderFormActions();
}

function renderFormTitle(){
	const template = $(templates['list_header']).html();
    const compiledTemplate = Handlebars.compile(template);
    const html = compiledTemplate(form);
    $('#'+dataTableContainerId).append(html);
}

function renderFormFields(){
	// Loop through fields array
    form.fields.forEach(field => {
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
            const html = "<div class=\"col\">" + compiledTemplate(field) + "</div>";
            $('#' + field.group).append(html);
        }
    });

}
function renderFormGroups(){
	form.fields.forEach(field => {
        if (field.type == "group") {
            field.fields.forEach(subfield => {
                const template = $(templates[subfield.type]).html();
                const compiledTemplate = Handlebars.compile(template);
                const html = "<div class=\"col\">" + compiledTemplate(subfield) + "</div>";
                $('#' + field.name).append(html);
            });
        }
    });
}

function renderFormLists(){
    form.fields.forEach(field => {
        if (field.type == "list") {
        	var html="<tr>";
            field.fields.forEach(subfield => {
                const template = $(templates["list_"+subfield.type]).html();
                const compiledTemplate = Handlebars.compile(template);
                html+= "<td>" + compiledTemplate(subfield) + "</td>";
                
            });
            
            if(field.actions.length>0){
            	html+= "<td>";
            	field.actions.forEach(action => {
        	    	const template = $(templates[action.type]).html();
        	    	const compiledTemplate = Handlebars.compile(template);
        	    	html+= compiledTemplate(action);
            	});
        	    html+= "</td>";
            }
            
            html+= "</tr>";
            $('#' + field.name).append(html);
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
	console.log("populateSelectCheckboxRadio");
    form.fields.forEach(field => {
        if (field.provider && field.provider.url) {
            var provider = field.provider;
            if (provider.url.length !== 0) {
                $.ajax({
                    type: "GET",
                    url: provider.url,
                    dataType: "json",
                    contentType: "application/json"
                })
                .done(function(data) {
                	var select=(field.type == "select");
                	var checkbox=(field.type == "checkbox");
                	var radio=(field.type == "radio");
                    
                    $.each(data, function(key, value) {
                    	if(select){
                    		$("#" + field.name).append(new Option(value.name, value.id));
                    	}else{
                    		var div=$('<div>', {
							    class: 'form-check'
							});
							
                        	$('<input />', { 
                        		type: field.type, 
                        		id: field.name, 
                        		name: field.name,
                        		value: key }).appendTo(div);
                        	
							$('<label />', {
								class:'form-check-label ml-1',
								for:field.name,
								text: value }).appendTo(div);

							$("#" + field.name+"-form-group").append(div);
							//$("#" + field.name+"-form-group").append("<div class=\"form-check\"><input type=\"checkbox\" name=\""+field.name+"\" value=\""+key+"\"> <label class=\"form-check-label\" for=\""+field.name+"\">"+value+"</label>");
							//$("#" + field.name+"-form-group").append("<div class=\"form-check\"><input type=\"radio\" name=\""+field.name+"\" value=\""+key+"\"> <label class=\"form-check-label\" for=\""+field.name+"\">"+value+"</label>");
                    	}
                    });
                })
                .fail(function(data) {
                    console.log(data);
                });
            }
        }
    });
}

function findAction(event){
	 var target = $( event.target);
	 var actionName=$(target).attr("name");
	 var actionType=$(target).attr("type");
	 var applyTo=$(target).attr("applyto");
	 console.log(actionName+" - "+actionType+" - "+applyTo);
	 var action;
	 form.actions.forEach(a => {
		 if(a.name==actionName && a.type==actionType && a.applyTo==applyTo){
			 action=a;
		 }
	 });
	 console.log(action);
	 return action;
}

function callUrl(action){
	
	var handler=action.handler;
	console.log(handler);
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
    console.log(handler);
    
    var formData = $('#'+form.id).serializeArray();
    
    console.log(formData);
    
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
        }
    });
}

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

function addOnClick(event){
	 event.preventDefault();
	 location.href="<%=request.getParameter("addPage")%>";
}
</script>