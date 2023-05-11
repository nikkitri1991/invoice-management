var billingCycleForm = {
	"id": "billingCycle",
	"title" : "BillingCycle",
	"namespace" : "",
	"enctype": "multipart/form-data",
	"fields": [ 
		{
			"type": "text",
			"name": "name",
			"label": "BillingCycle",
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
			"type": "javascript",
			"func": "submitForm(event)",
			"method": "post",
			"url": "http://localhost:9004/api/v1/billingCycle"
		},
		"redirects": {
			"success": {"href":"billing_cycle_list"},
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
			"success": {"href":"billing_cycle_list"},
		}
	},
	{
		"name": "add",
		"type": "button",
		"label": "Add",
		"applyTo": "list",
		"cssClass": "btn-danger",
		"handler": {
			"href": "billing_cycle_list"
		}
	}
],
 	"providers": {
		"collection": {
			"ajax": "http://localhost:9004/api/v1/billingCycle",
			"method": "get",
		},
		"selector": {
			"ajax": "",
			"method": "get",
			"pathParams":{},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/billingCycle",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/billingCycle",
			"method": "put",
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/billingCycle",
			"method": "delete",
			"requestParams":{"id":"{id}"}
		}
	}
		

	};