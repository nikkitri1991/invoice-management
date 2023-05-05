<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp" %>
<script type="text/javascript" src="../js/form/client-list.js"></script>
</head>


<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="clientListContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>


<!-- <script>
var form = {
		"id": "client",
		"title" : "New Client",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "text",
				"name": "id",	
				"label": "#",
				"required": true,
				
			},
			{
				"type": "text",
				"name": "name",
				"label": "Name",
				"required": true,
				
			},
			{
				"type": "text",
				"name": "bussinessName",
				"label": "Bussiness Name",
				"required": true,
				
			},
			{
				"type": "text",
				"name": "bussinessAddress",
				"label": "Bussiness Address",
				"required": true,
				
			},
			{
				"type": "number",
				"name": "mobile",
				"label": "Mobile",
				"required": true,
				
			},
			{
				"type": "email",
				"name": "email",
				"label": "Email",
				"required": true,
				
			}],
		"actions": [{
				"name": "save",
				"type": "submit",
				"label": "Save",
				"applyTo": "form",
				"handler": {
					"type": "javascript",
					"func": "submitForm(event)",
					"method": "post",
					"url": ""
				},
				"cssClass": "btn-primary"
			}, {
				"name": "cancel",
				"type": "button",
				"label": "Cancel",
				"applyTo": "form",
				"handler": {
					"type": "javascript",
					"func": "alert('ok');"
				},
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
</script> -->
<%@include file="../theme/js_scripts.jsp" %>
<jsp:include page="../template/jetform-template.jsp"/>

<script>
$(document).ready(() => {
	var jetList=JetList({"id":"client", "parentId":"clientListContainer", "form":clientListForm});
	jetList.render();
});
</script>
</html>