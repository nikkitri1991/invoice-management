var clientListForm = {
	    "id": "client",
        "parentId": "clientListContainer",
	    "title": "ClientList",
	    "subtitle": "",
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
			"label": "New Client",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "client"
			}
		}
	],
	"dataProvider": {
		"collection": {
			"url": "http://localhost:9004/api/v1/client",
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
