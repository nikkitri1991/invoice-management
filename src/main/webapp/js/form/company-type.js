
var companyType = {
	"id": "companyType",
	"parentId" :"companyTypeContainer",
	"title": "CompanyType ",
	
	"namespace": "",
	"enctype": "multipart/form-data",
	"fields": [ 
				{
					"type": "text",
					"name": "name",
					"label": "CompanyType",
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
				"url": ""
			},
			"redirects": {
				"success": {"href":"company-type-list"},
				"failure": {"href":"company-type-list"}
			},
			"cssClass": "btn-primary"
		}, {
			"name": "cancel",
			"type": "button",
			"label": "Cancel",
			"applyTo": "form",
			"cssClass": "btn-secondary",
			"redirects": {
				"success": {"href":"company-type-list"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add companyType",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "company-type"
			}
		}
	],
	"dataProvider": {
		"collection": {
			"url": "http://localhost:9004/api/v1/companyType",
			"method": "get",
			"dataNode": " "
		},
		"selector": {
			"url": ""
		},
		"create": {
			"url": "http://localhost:9004/api/v1/companyType",
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
 