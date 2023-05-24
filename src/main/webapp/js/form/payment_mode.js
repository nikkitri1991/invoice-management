var paymentModeForm = {
	"id": "paymentMode",
	"title" : "PaymentMode",
	"parentId":"paymentModeFormContainer",
	"namespace" : "",
	"enctype": "multipart/form-data",
	"fields": [ 
		
		{
			"type": "hidden",
			"name": "id",
			"id":true,
			"required": true
		},
		{
			"type": "text",
			"name": "name",
			"label": "PaymentMode",
			"listable":false,
			"searchable": false,
		
		}
	],
	"actions": [{
		"name": "save",
		"type": "submit",
		"label": "Save",
		"applyTo": "form",
		"handler": {
			"script": "submitForm(event)"
		},
		"redirects": {
			"success": {"href":"payment_mode_list"},
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
			"success": {"href":"payment_mode_list"},
		}
	},
	{
		"name": "add",
		"type": "button",
		"label": "Add",
		"applyTo": "list",
		"cssClass": "btn-danger",
		"handler": {
			"href": "payment_mode_list"
		}
	},
	{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-danger",
			"handler": {
				"href": "currency_list"
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
			"ajax": "http://localhost:9004/api/v1/paymentMode",
			"method": "get"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/paymentMode/{id}",
			"method": "get",
			"pathParams":{"id":"#id"},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/paymentMode",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/paymentMode",
			"method": "put"
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/paymentMode/{id}",
			"method": "delete"
		}
	}
		

	};