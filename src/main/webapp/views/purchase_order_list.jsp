<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp"%>
<script type="text/javascript" src="../js/form/purchase-order-list.js"></script>
</head>


<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
				<div id="purchaseOrderListContainer" style="margin-top: 8%"></div>
			</div>
		</div>
	</div>
</body>

<!-- 
<script>
var form = {
		"id": "purchaseOrder",
		"title" : "Purchase Orders",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
					
					{
						"type": "text",
						"name": "id",
						"label": "#",
						"required": true,
						"placeHolder": "Id"
					},
					{
						"type": "text",
						"name": "poNumber",
						"label": "PO Number",
						"required": true,
						"placeHolder": "PO Number"
					},
					{
						"type": "date",
						"name": "purchaseOrderDate",
						"label": "Purchase Order Date",
						"required": false
			    	}, 
			    	{
						"type": "text",
						"name": "client",
						"label": "Client",
						"required": true,
						"placeHolder": "Client"
					},	
			   
			 		{
						"type": "text",
						"name": "project",
						"label": "Project",
						"required": true
		     		},
			    	{
						"type": "text",
						"name": "amount",
						"label": "Amount",
						"required": true
			    	}],
		"actions": 	[ {
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
					},  
					
					{
						"name": "delete",
						"type": "link",
						"label": "Delete",
						"applyTo": "row",
						"handler": {
							"type": "javascript",
							"func": "submitForm(event)",
							"method": "post",
							"url": "http://localhost:8082/api/v1/user"
						},
						"cssClass": ""
					}, 
					 
					{
						"name": "cancel",
						"type": "button",
						"label": "Cancel",
						"applyTo": "form",
						"cssClass": "btn-secondary"
					}, 
					{
						"name": "add",
						"type": "button",
						"label": "New PO",
						"applyTo": "list",
						"cssClass": "btn-primary"
					}
						],
		"dataProvider":{
			"collection":{"url":""},
			"selector":{"url":""}
					    }
			
};
</script> -->
 <%@include file="../theme/js_scripts.jsp"%>
<jsp:include page="../template/jetform-template.jsp"/>

<script>
$(document).ready(() => {
	var jetList=JetList({"id":"purchaseOrderList", "parentId":"purchaseOrderListContainer", "form":purchaseOrderList});
	jetList.render();
});

</script>	</html>