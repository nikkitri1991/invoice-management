var clientListForm = {
	"id": "client",
	"parentId": "clientListContainer",
	"title": "ClientList",
	"subtitle": "",
	"namespace": "",
	"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "hidden",
				"name": "id",
				"id": true,
				"required": true
				
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
				"script": "submitForm(event)",
			},
			"redirects": {
				"success": {"href":"billing_type"},
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
				"success": {"href":"billing_type"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add Client",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "client"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "client"
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
			"ajax": "http://localhost:9004/api/v1/billingType",
			"method": "get"
		},
		"selector": {
			"ajax": "",
			"method": "get",
			"pathParams":{},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/billingType",
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