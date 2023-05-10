var purchaseOrderListForm = {
		"id": "purchaseOrder",
		"title" : "PurchaseOrder",
		 "parentId": "purchaseOrderListContainer",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "text",
				"name": "id",
				"label": "Purchase Order Id",
				"required": true,
				"placeHolder": "Payment "
			},
			{
				"type": "text",
				"name": "name",
				"label": "Purchase Order ",
				"required": true
				
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
					"success": {"href":"currency_list"},
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
				"url": "http://localhost:9004/api/v1/currency",
				"method": "get",
				"dataNode": " "
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
		}	};
