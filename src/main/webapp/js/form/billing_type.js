var billingTypeForm = {
	"id": "billingType",
	"title" : "BillingType",
	"parentId":"billingTypeFormContainer",
	"namespace" : "",
	"enctype": "multipart/form-data",
	"fields": [ 
		{
			"type": "text",
			"name": "name",
			"label": "BillingType",
			"listable":false,
			"searchable": false,
			"validations": {
						"rules": {
							"minlength": 5
						},
						"messages": {
							"minlength": " Your SKUNumber must consist of at least 2 characters"
						}
					}
			
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
			"url": "http://localhost:9004/api/v1/billingType"
		},
		"redirects": {
			"success": {"href":"billing_type_list"},
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
			"success": {"href":"billing_type_list"},
		}
	},
	{
		"name": "add",
		"type": "button",
		"label": "Add",
		"applyTo": "list",
		"cssClass": "btn-danger",
		"handler": {
			"href": "billing_type_list"
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
		"url": "http://localhost:9004/api/v1/billingType",
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