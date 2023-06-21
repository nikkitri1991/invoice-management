var clientListForm = {
	"id": "client",
	"parentId": "clientListContainer",
	"title": "Clients",
	"subtitle": "",
	"namespace": "",
	"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "hidden",
				"name": "id",
				"id": true
				
			},
			{
				"type": "text",
				"name": "name",
				"label": "Name"	
			},
			{
				"type": "text",
				"name": "bussinessName",
				"label": "BusinessName"
				
			},{
				"type": "text",
				"name": "primaryBussiness",
				"label": "Business Address"
				
			},{
				"type": "text",
				"name": "address.mobile",
				"label": "Mobile"
				
			},
			{
				"type": "text",
				"name": "companytype.cname",
				"label": "Company Type"		
			},
			{
				"type": "text",
				"name": "address.email",
				"label": "Email"
				
			},
			{
				"type": "Date",
				"name": "createOn",
				"label": "CreateOn"	
			},
			
			
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
			"label": "+ Add Client",
			"applyTo": "list",
			"cssClass": "btn-primary",
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
			"ajax": "http://localhost:9004/api/v1/client",
			"method": "get"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/client/{id}",
			"method": "get",
			"pathParams":{"id":"#id"}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/client",
			"method": "post",
			"pathParams":{"id":"#id"},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/client",
			"method": "put",
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/client",
			"method": "delete"
			
		}
	}
	};