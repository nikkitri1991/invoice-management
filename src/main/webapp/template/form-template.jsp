<style>
.dropzone-wrapper {
  width: 100%;
  height: 100%;
  border:2px dashed black;
  margin: 0px;
  padding:10px;
}
</style>



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
 
 <script id="jf-address-template" type="text/x-handlebars-template">
    <div class="form-group">
    <label for="{{name}}" class="form-label">Address Line 1</label>
    <input type="text" class="form-control" name="{{name}}" placeholder="Enter Address Line 1" id="{{name}}" value="{{value}}" {{#if required}}required{{/if}}>
    <label for="{{name}}" class="form-label">Address Line 2</label>
    <input type="text" class="form-control" name="{{name}}" placeholder="Enter Address Line 2" id="{{name}}" value="{{value}}" {{#if required}}required{{/if}}> 
    <label for="{{name}}" class="form-label">Pincode</label>
    <input type="number" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}" maxlength="6">
 	<label for="{{name}}" class="form-label">Country</label>
		<select name="{{name}}" id="{{name}}" class="form-control">
			<option value="-1">Select Country</option>
			{{#each options}}
            	<option value="{{value}}">{{label}}</option>
            {{/each}}
		</select>
	<label for="{{name}}" class="form-label">State</label>
		<select name="{{name}}" id="{{name}}" class="form-control">
			<option value="-1">Select State</option>
			{{#each options}}
            	<option value="{{value}}">{{label}}</option>
            {{/each}}
		</select>
	<label for="{{name}}" class="form-label">City</label>
		<select name="{{name}}" id="{{name}}" class="form-control">
			<option value="-1">Select City</option>
			{{#each options}}
            	<option value="{{value}}">{{label}}</option>
            {{/each}}
		</select>
    </div>
    </script>

<script id="jf-textarea-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <textarea class="form-control" name="{{name}}" placeholder="{{placeHolder}}" id="{{name}}" {{#if required}}required{{/if}}>{{value}}</textarea>
  </div>
</script>


<script id="jf-hidden-template" type="text/x-handlebars-template">
  <input type="{{type}}" name="{{name}}" value="{{value}}" id="{{name}}">
</script>

<script id="jf-date-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" value="{{value}}">
  </div>
</script>

<script id="jf-time-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label>
    <input type="{{type}}" class="form-control" name="{{name}}" id="{{name}}" step = "{{step}}" value="{{value}}"{{#if required}} required{{/if}}>
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
		<label for="{{name}}" hidden ="{{hidden}}" class="form-label">{{label}}</label>
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
  <button name="{{name}}" id="{{name}}" type="{{type}}" class="btn btn-primary" onclick="submitForm(event)">{{label}}</button>
</script>

<script id="jf-link-template" type="text/x-handlebars-template">
  <a name="{{name}}" id="{{name}}" onclick="submitForm(event)"><i class="fa {{label}}" aria-hidden="true"></i></a>
</script>


<script id="jf-list-template" type="text/x-handlebars-template">
	<div class="form-group">
		<label for="{{name}}" class="form-label">{{label}}</label>
		<table class="table table-bordered">
			<thead>
				<tr>
					{{#each fields}}
						<td>{{label}}</td>
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


<script id="jf-file-drag-drop-template" type="text/x-handlebars-template">
 	<div class="drag-drop-div">
 		<div class="dropzone-wrapper">
			<label for="{{name}}" class="form-label" >{{label}}</label>
			<div class="row">
				<div class="col" id="addFile" >
				</div>
			</div>
		</div>
	</div>
</script>


<script id="jf-smart-upload-template" type="text/x-handlebars-template">
  <div class="form-group">
    <label for="{{name}}" class="form-label">{{label}}</label><br>
    <input type="file" id="{{id}}" label="{{label}}" name="{{name}}" multiple>
    <div class="file-size">
	</div>
  </div>
</script>

 <!-- script  -->
<script>
var arr=[];
var formContainerId='<%=request.getParameter("formContainerId")%>';
var formId='<%=request.getParameter("formId")%>';

const templates = {            //object for mapping object to id
    text: '#jf-text-template',
    textarea : '#jf-textarea-template',
    date: '#jf-date-template',
    time : '#jf-time-template',
    submit: '#jf-button-template',
    email: '#jf-email-template',
    password: '#jf-password-template',
    address : '#jf-address-template',
    number: '#jf-number-template',
    select : '#jf-select-template',
    radio: '#jf-radio-template',
    checkbox : '#jf-checkbox-template',
    hidden : '#jf-hidden-template',
    file : '#jf-file-template',
    list : '#jf-list-template',
    form : '#jf-form-template',
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
    link : '#jf-link-template',
    smart_upload : '#jf-smart-upload-template',
    drag_drop : '#jf-file-drag-drop-template' 
};



$(document).ready(() => {
	renderForm();
	fillOptions();

	$('.dropzone-wrapper').on('dragover', function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log("dragover leave drag area..")
	});	

	$('.dropzone-wrapper').on('dragleave', function(e) {
		console.log("leave drag area..")
	});	
		
	$('.dropzone-wrapper').on('drop', function(e) {
		 e.preventDefault();
		 e.stopPropagation();
		 console.log("drop drag area.."+e.originalEvent.dataTransfer.files[0].name)
		 /* arr.push(e.originalEvent.dataTransfer.files[0]) */
		 console.log(e.originalEvent.dataTransfer.files[0].name)
		 let formD=new FormData();
		 formD.append('documentImage',e.originalEvent.dataTransfer.files[0]);
		 $.ajax({
             type: "POST",
             url: 'http://localhost:9921/api/v1/document/upload',
             contentType: false,
             processData: false,
       		data:formD
         })
         .done(function(data) {
        	 console.log(formD.get('documentImage'))
        	 arr.push({id:data.id,fileName:formD.get('documentImage')});
        	 displayFile();
         })
         .fail((err)=>{
        	 console.log(err);
         })
	});
});

function renderForm() {
	renderFormObject()
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
    console.log(html);
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
                    var i=0;
                    $.each(data, function(key, value) {
                    	if(select){
                    		$("#" + field.name).append(new Option(value.name, value.id));
                    	}else{
                    		var div=$('<div>', {
							    class: 'form-check'
							});
							
                        	$('<input />', { 
                        		type: field.type, 
                        		id: field.name+(i++), 
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

function actionOnClick(event){
	 event.preventDefault();
	 var action=findAction(event);
	 callUrl(action);
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
            location.href="<%=request.getParameter("cancelPage")%>";
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

function saveOnClick(event){
	 event.preventDefault();
	 submitForm(event);
}

function cancelOnClick(event){
	 event.preventDefault();
	 location.href="<%=request.getParameter("cancelPage")%>";
}

function removeFile(fileId,index){
	alert(fileId, index)
	if (index > -1) { 
		arr.splice(index, 1); 
		console.log(arr.length)
		 $.ajax({
             type: "DELETE",
             url: 'http://localhost:9921/api/v1/document/'+fileId,
             contentType: false,
             processData: false,
       		
         })
         .done(function(data) {
        	 $('#'+index).remove();
        	 displayFile();
         })
         .fail((err)=>{
        	 console.log(err);
         })
		
		}
}

function displayFile(){
	 $('#addFile').empty();
	 console.log("+++++++++++++++=")
	 console.log(arr)
	arr.map((fileObj, key)=>{
		 console.log("-----",fileObj)
			let btnTag="<div class='btn btn-sm btn-primary ms-2 mt-2' id='"+key+"' >"+fileObj.fileName.name+"<span style='float: right; font-size: 25px;  margin-right: -10%; cursor:pointer' onclick='removeFile("+fileObj.id+','+key+")'>&times;</span></div>";
			 $('#addFile').append(btnTag);
	 })
}
</script>