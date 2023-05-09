var billingCycleListForm = {
		"id": "billingCycle",
		"title" : "Billing Cycle",
		 "parentId": "billingCycleListContainer",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "text",
				"name": "id",
				"label": "Billing Cycle Id",
				"required": true,
				"placeHolder": "Billing Cycle"
			},
			{
				"type": "text",
				"name": "name",
				"label": "BillingCycle",
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
				"label": "Add BillingCycle",
				"applyTo": "list",
				"cssClass": "btn-danger",
				"handler": {
					"href": "billing_cycle"
				}
			}
		],
		"dataProvider": {
			"collection": {
				"url": "http://localhost:9004/api/v1/billingCycle",
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
