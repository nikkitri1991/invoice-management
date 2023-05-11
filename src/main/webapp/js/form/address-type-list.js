
var addressType = {
	"id": "addressTypeList",
	"parentId" :"addressTypeListContainer",
	"title": "AddressType ",
	
	"namespace": "",
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
					"label": "AddressType",
					"listable":false,
					"searchable": true
			
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
				"success": {"href":"addressType"},
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
				"success": {"href":"addressType"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add AddressType",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "addressType"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "addressType"
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
			"ajax": "http://localhost:9004/api/v1/addressType",
			"method": "get"
		},
		"selector": {
			"ajax": "",
			"method": "get",
			"pathParams":{},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/addressType",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/addressType",
			"method": "put",
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/addressType",
			"method": "delete",
			"requestParams":{"id":"{id}"}
		}
	}
	};