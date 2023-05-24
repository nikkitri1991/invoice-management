
var taxForm = {
	"id": "taxForm",
	"parentId" :"taxFormContainer",
	"title": "Tax Form ",
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
					"label": "Tax",
					"required" : true,
					"searchable": true
			
				},
				{
						"type": "select",
						"name": "type",
						"label": "Type",
						"options": [{
							"value": "Percentage",
							"label": "Percentage"
						}, {
							"value": "Float",
							"label": "Float"
							
						}],
						"required": true
					},
					{
					"type": "date",
					"name": "effectiveDate",
					"label": "Effective Date",
					"required": false
					},
					{
					"type": "date",
					"name": "inEffectiveDate",
					"label": "Ineffective Date",
					"required": false
					},
					{
					"type": "checkbox",
					"name": "active",
					"label": "Click To Active",
					"required": false,
					 "options": [{
								"value": "true"
							}]
					},
					{
					"type": "date",
					"name": "createOn",
					"label": "Create Date",
					"required": false
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
				"success": {"href":"tax_list"},
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
				"success": {"href":"tax"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add Tax",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "tax"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-danger",
			"handler": {
				"href": "tax"
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
			"ajax": "http://localhost:9004/api/v1/tax",
			"method": "get"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/tax/{id}"
		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/tax",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/tax",
			"method": "put"
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/tax",
			"method": "delete"
			
		}
	}
		

	};