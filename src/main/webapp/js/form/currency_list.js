var currencyListForm = {
		"id": "currency",
		"title" : "Currency",
		 "parentId": "currencyListContainer",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "hidden",
				"name": "id",
				"id":true
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
				"script": "submitForm(event)",
			},
			"redirects": {
				"success": {"href":""},
				"failure": {"script":"alert('Saving operation failed')"}
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
			"label": "Add Currency",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "currency"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "currency"
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