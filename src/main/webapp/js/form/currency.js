var currencyForm = {
	"id": "currency",
	"title" : "Currency",
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
			"href": ""
		}
	}
],
"dataProvider": {
	"collection": {
		"url": "",
		"method": "get",
		"dataNode": ""
	},
	"selector": {
		"url": ""
	},
	"create": {
		"url": "http://localhost:9004/api/v1/currency",
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