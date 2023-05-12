
var addressType = {
	"id": "addressType",
	"parentId" :"addressTypeContainer",
	"title": "AddressType",
	"namespace": "",
	"enctype": "multipart/form-data",
	"fields": [ 
				{	
					"type": "hidden",
					"name": "id",
					"id":true,
					"required" : true
				},
				{
					"type": "text",
					"name": "name",
					"label": "AddressType",
					"required" : true,
					"listable":true,
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
				"success": {"href":"address_type_list"},
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
				"success": {"href":"address_type_list"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add Address Type",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "address_type"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-danger",
			"handler": {
				"href": "address_type"
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
			"ajax": "http://localhost:9004/api/v1/addressType/{id}",
			"method": "get",
			"requestParams":{"id":"#id"},
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
			"method": "put"
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/addressType",
			"method": "delete"
			
		}
	}
		

	};