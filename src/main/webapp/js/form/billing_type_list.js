var billingTypeListForm = {
		"id": "billingType",
		"title" : "Billing Type",
		 "parentId": "billingTypeListContainer",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "text",
				"name": "id",
				"label": "Billing Type Id",
				"required": true,
				"placeHolder": "Billing Type"
			},
			{
				"type": "text",
				"name": "name",
				"label": "BillingType",
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
				"label": "Add BillingType",
				"applyTo": "list",
				"cssClass": "btn-danger",
				"handler": {
					"href": "billing_type"
				}
			}
		],
		"dataProvider": {
			"collection": {
				"url": "http://localhost:9004/api/v1/billingType",
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
