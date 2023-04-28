<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp" %>
</head>

<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="clientForm"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>


<script>
	var form =  {
			"id": "client",
			"title" : "New Client",
			"namespace" : "",
			"enctype": "multipart/form-data",
			"fields": [
			
					{
						"type": "text",
						"name": " name",
						"label": "Name",
						"required": true,
						"placeHolder": "Name"
					}, {
						"type": "text",
						"name": "bussinessName",
						"label": "Bussiness Name",
						"required": true,
						"placeHolder": "Bussiness Name"
					},
					{
						"type": "select",
						"name": "companyNameId",
						"label": "Company Name",
						"provider": {
							"url": "",
							"value": "id",
							"label": "name"
						},
						"required": true
					},{
						"type": "text",
						"name": "primaryBussiness",
						"label": "Primary Bussiness",
						"required": true,
						"placeHolder": "Primary Bussiness"
				
				}, 
			
				{
					"type": "date",
					"name": "appliedDate",
					"label": "Applied Date ",
					"required": false
				},
				
				 {
						"type": "select",
						"name": "departmentId",
						"label": "Department",
						"provider": {
							"url": "http://localhost:9098/jet/pis/department",
							"value": "id",
							"label": "name"
						},
						"required": true
				},
				{
					"type": "select",
					"name": "designationId",
					"label": "Designation ",
					"provider": {
								"url": "http://localhost:9098/jet/pis/designation",
								"value": "id",
								"label": "name"
							},
							"required": true
				},
				{
					"type": "select",
					"name": "recruiterId",
					"label": "Recruiter",
					"provider": {
								"url": "http://localhost:9099/api/v1/recruitementSource",
										"value": "id",
										"label": "name"
								},
					"required": true
				},
				{
					"type": "select",
					"name": "selectionPhaseId",
					"label": "Designation ",
					"provider": {
								"url": "http://localhost:9098/jet/pis/designation",
								"value": "id",
								"label": "name"
							},
							"required": true
				},
					
			
				{
					"type": "file",
					"name": "aadhaar",
					"label": "Aadhaar",
					"accept": "image/png, image/jpeg"
				}
			],
			"actions": [{
					"name": "save",
					"type": "submit",
					"label": "Save",
					"applyTo": "form",
					"handler": {
						"type": "javascript",
						"func": "submitForm(event)",
						"method": "post",
						"url": "http://localhost:8082/api/v1/user"
					},
					"cssClass": "btn-primary"
				}, {
					"name": "cancel",
					"type": "button",
					"label": "Cancel",
					"applyTo": "form",
					"cssClass": "btn-secondary"
				},
				{
					"name": "add",
					"type": "button",
					"label": "Add Client",
					"applyTo": "list",
					"cssClass": "btn-danger"
				}
			],
			"dataProvider":{
				"collection":{"url":""},
				"selector":{"url":""}
			}
		};
</script>
<%@include file="../theme/js_scripts.jsp" %>
<jsp:include page="../template/form-template.jsp">
	<jsp:param name="formContainerId" value="clientForm" />
	<jsp:param name="formId" value="clientForm" />
	<jsp:param name="cancelPage" value="client_list" />
	<jsp:param name="successPage" value="client_list" />
</jsp:include>

</html>