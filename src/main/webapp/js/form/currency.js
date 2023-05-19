var currencyForm = {
	"id": "currency",
	"title" : "Currency",
    "parentId": "currencyFormContainer",
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
				"script": "submitForm(event)",
		},
		"redirects": {
			"success": {"href":"currency_list"},
			"failure": {"href":"alert('Saving operation failed')"}
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
			"ajax": "http://localhost:9004/api/v1/currency",
			"method": "get"
			//"dataNode": "data"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/currency/{id}",
			"method": "get",
			"pathParams":{"id":"#id"}
			//"dataNode": "data"
			/*"requestParams":{"id":"#id"},
			"queryParams":{}*/
		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/currency",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/currency",
			"method": "put"
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/currency/{id}",
			"method": "delete"
		}
	}
		

	};