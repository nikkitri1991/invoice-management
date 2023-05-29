var purchaseOrderListForm = {
		"id": "purchaseOrder",
		"title" : "Purchase Orders",
		 "parentId": "purchaseOrderListContainer",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "hidden",
				"name": "id",
				"label": "#",
				"id":true,
				"required": true
			
			},
			{
				"type": "text",
				"name": "poNumber",
				"label": "PO Number",
				"required": true
				
			},
			{
				"type": "date",
				"name": "poDate",
				"label": "Purchase Order Date",
				"required": true
				
			},
			{
				"type": "text",
				"name": "client.name",
				"label": "Client",
				"required": true
				
			},
			{
				"type": "text",
				"name": "otherAmount",
				"label": "Amount",
				"required": true	
			}],
			"actions": [{
			"name": "save",
			"type": "submit",
			"label": "Save",
			"applyTo": "form",
			"handler": {
				"script": "submitForm(event)",
			},
			"redirects": {
				"success": {"href":""},
				"failure": {"script":"alert('Saving operation failed')"}
			},
			"cssClass": "btn-primary"
		}, {
			"name": "cancel",
			"type": "button",
			"label": "Cancel",
			"applyTo": "form",
			"cssClass": "btn-secondary",
			"redirects": {
				"success": {"href":""},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "+Purchase Order",
			"applyTo": "list",
			"cssClass": "btn-primary",
			"handler": {
				"href": "purchase_order"
			}
		},
		{
			"name": "delete",
			"type": "button",
			"label": "Delete",
			"applyTo": "row",
			"cssClass": "btn-danger",
			/*"handler": {
				"script": "delete(event)"
			}*/
		}
	],
	"providers": {
		"collection": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder",
			"method": "get"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder/{id}",
			"method": "get",
			"pathParams":{"id":"#id"},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder",
			"method": "put",
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder/{id}",
			"method": "delete"
		}
	}
	};