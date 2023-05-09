var currencyListForm = {
		"id": "currency",
		"title" : "Currency",
		 "parentId": "currencyListContainer",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "text",
				"name": "id",
				"label": "Currency Id",
				"required": true,
				"placeHolder": "Currency Id"
			},
			{
				"type": "text",
				"name": "name",
				"label": "Currency",
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
				"label": "Add Currency",
				"applyTo": "list",
				"cssClass": "btn-danger",
				"handler": {
					"href": "currency"
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
