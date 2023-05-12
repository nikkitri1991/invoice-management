
var companyType = {
	"id": "companyType",
	"parentId" :"companyTypeContainer",
	"title": "CompanyType ",
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
					"label": "Company Type",
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
				"success": {"href":"company-type-list"},
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
				"success": {"href":"company-type"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add Address Type",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "company-type"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-danger",
			"handler": {
				"href": "company-type"
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
			"ajax": "http://localhost:9004/api/v1/companyType",
			"method": "get"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/companyType/{id}",
			"method": "get",
			"pathParams":{"id":"#id"},
			"queryParams":{}
		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/companyType",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/companyType",
			"method": "put"
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/companyType",
			"method": "delete"
			
		}
	}
		

	};