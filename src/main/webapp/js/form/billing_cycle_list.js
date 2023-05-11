var billingCycleListForm = {
		"id": "billingCycle",
		 "parentId": "billingCycleListContainer",
		 "title" : "Billing Cycle",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
			"type": "hidden",
			"name": "id",
			"id": true,
			"required": true
			
		},
			{
				"type": "text",
				"name": "name",
				"label": "BillingCycle",
				"required": true
				
			}],
		
				"actions": [{
			"name": "save",
			"type": "submit",
			"label": "Save",
			"applyTo": "form",
			"handler": {
				"script": "submitForm(event)",
			},
			"redirects": {
				"success": {"href":"billing_cycle"},
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
				"success": {"href":"billing_cycle"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add BillingCycle",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "billing_cycle"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "candidate"
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
			"ajax": "http://localhost:9004/api/v1/billingCycle",
			"method": "get"
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