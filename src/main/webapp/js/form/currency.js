var currencyForm = {
	"id": "currency",
	"title" : "Currency",
    "parentId": "currencyFormContainer",
	"namespace" : "",
	"enctype": "multipart/form-data",
	"fields": [ 
		{
			"type": "text",
			"name": "name",
			"label": "Currency",
			"listable":false,
			"searchable": false
			
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
			"url": "http://localhost:9004/api/v1/currency"
		},
		"redirects": {
			"success": {"href":"currency_list"},
			"failure": {"href":""}
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
		"label": "Add",
		"applyTo": "list",
		"cssClass": "btn-danger",
		"handler": {
			"href": "currency_list"
		}
	}
],
 	"providers": {
		"collection": {
			"ajax": "http://localhost:9004/api/v1/currency",
			"method": "get",
		},
		"selector": {
			"ajax": "",
			"method": "get",
			"pathParams":{},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/currency",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/billingType",
			"method": "put",
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/billingType",
			"method": "delete",
			"requestParams":{"id":"{id}"}
		}
	}
		

	};