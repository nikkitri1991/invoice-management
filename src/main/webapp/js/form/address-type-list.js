
var addressType = {
	"id": "addressTypeList",
	"parentId" :"addressTypeListContainer",
	"title": "AddressType ",
	
	"namespace": "",
	"enctype": "multipart/form-data",
	"fields": [ 
				{
					"type": "text",
					"name": "id",
					"label": "Id",
					"placeHolder": "Candidate Id"
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
				"type": "javascript",
				"func": "submitForm(event)",
				"method": "post",
				"url": ""
			},
			"redirects": {
				"success": {"href":"addressType_list"},
				"failure": {"href":"addressType_list"}
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
			"label": "Add AddressType",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "addressType"
			}
		}
	],
	"dataProvider": {
		"collection": {
			"url": "http://localhost:9004/api/v1/addressType",
			"method": "get",
			"dataNode": " "
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
	}
};
 