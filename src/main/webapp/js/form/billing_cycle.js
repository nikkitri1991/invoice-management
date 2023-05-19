var billingCycleForm = {
	"id": "billingCycle",
	"title" : "BillingCycle",
	"namespace" : "",
	"enctype": "multipart/form-data",
	"fields": [ 
		{
			"type": "hidden",
			"name": "id",
			"id":true,
			"required": true
		},
		{
			"type": "text",
			"name": "billingCycleName",
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
			"script": "submitForm(event)"
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
			"method": "get"
			//"dataNode": "data"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/billingCycle/{id}",
			"method": "get",
			"pathParams":{"id":"#id"},
			//"queryParams":{}
			//"dataNode": "data"

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
			"method": "put"
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/billingCycle/{id}",
			"method": "delete",
			
		}
	}
};
	
 
	
	