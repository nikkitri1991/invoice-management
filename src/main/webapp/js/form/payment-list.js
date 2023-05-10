var paymentListForm = {
		"id": "paymentList",
		"title" : "Payments",
		 "parentId": "paymentListContainer",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "text",
				"name": "id",
				"label": "Payments Id",
				"required": true,
				"placeHolder": "Payment "
			},
			{
				"type": "text",
				"name": "name",
				"label": "Payment",
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
					"success": {"href":""},
				}
			},
			{
				"name": "add",
				"type": "button",
				"label": "Add Payments",
				"applyTo": "list",
				"cssClass": "btn-danger",
				"handler": {
					"href": "receive_payment"
				}
			}
		],
		"dataProvider": {
			"collection": {
				"url": "http://localhost:9004/api/v1/payment",
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
		}	};
