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
			"success": {"href":"billing-cycle-list"},
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
			"success": {"href":"billing-cycle-list"},
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
"dataProvider": {
	"collection": {
		"url": "",
		"method": "get",
		"dataNode": ""
	},
	"selector": {
		"url": ""
	},
	"create": {
		"url": "http://localhost:9004/api/v1/billingCycle",
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