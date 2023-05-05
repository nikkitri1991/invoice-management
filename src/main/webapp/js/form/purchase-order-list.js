var purchaseOrderList = {
		"id": "purchaseOrderList",
		"parentId": "purchaseOrderListContainer",
		"title" : "Purchase Orders",
		"namespace" : "",
		"subtitle": "",
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
					
					/* {
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
					}, */
					 
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
			"redirects": {
				"success": {"href":"https://www.google.com"},
				"failure": {"href":"https://www.yahoo.com"}
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
			"label": "New PO",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "purchase_order"
			}
		}
	],
	"dataProvider": {
		"collection": {
			"url": "",
			"method": "get",
			"dataNode": "items"
		},
		"selector": {
			"url": ""
		},
		"create": {
			"url": "",
			"method": "post"
		},
		"update": {
			"url": "",
			"method": "post"
		},
		"delete": {
			"url": "",
			"method": "post"
		}
	}
			
};