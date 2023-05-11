
var addressType = {
	"id": "addressType",
	"parentId" :"addressTypeContainer",
	"title": "AddressType ",
	"namespace": "",
	"enctype": "multipart/form-data",
	"fields": [ 
				
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
			"type": "javascript",
			"func": "submitForm(event)",
			"method": "post",
			"url": "http://localhost:9004/api/v1/addressType"
		},
		"redirects": {
			"success": {"href":"addressType_list"},
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
			"success": {"href":"addressType_list"},
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
 	"providers": {
		"collection": {
			"ajax": "http://localhost:9004/api/v1/addressType",
			"method": "get",
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