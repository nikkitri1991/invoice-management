var invoiceForm =  {
		"id": "invoiceForm",
        "parentId": "invoiceFormContainer",
	    "title": "New Invoice",
	    "subtitle": "",
			"namespace" : "",
			"enctype": "multipart/form-data",
			"fields": [
				{
				"type": "hidden",
				"name": "id",
				"label": "#",
				"id":true
			     },
				{
							"type": "group",
							"name": "invoice",
							"label": "name",
							"col": 12,
							"fields": [
								{
									"type": "select",
									"name": "clientId",
									"label": "Client",
									"required": true,
									"placeHolder": "Select a Client",
									"col":8,
									"options": [{
										"value": "1",
										"label": "ZOHO"
									}, {
										"value": "2",
										"label": "Royal"
									}, {
										"value": "3",
										"label": "TATA"
									}],
									
								},
								{
									"type": "text",
									"name": "invoiceNo",
									"label": "Invoice No",
									"col":4
									
								},
								
								{
									"type": "select",
									"name": "poNumber",
									"label": "Purchase Order",
									"col":8,
									"provider": {
					                   	"ajax": "http://localhost:9004/api/v1/purchaseOrder",
						                       "value":"id",
						                       "label":"poNumber"
					                            },
									
									"placeHolder": "Select Purchase Order"
								},
									{
									"type": "date",
									"name": "invoiceDate",
									"label": "Invoice Date",
									"placeHolder": "",
									"col":4
								}	]
						},
						{
							"type": "group",
							"name": "date",
							"label": "name",
							"col": 12,
							"fields": [
								
								{
									"type": "hidden",
									"name": "text",
									"col":8
								},
								{
									"type": "date",
									"name": "dueDate",
									"label": "Due Date",
									"required": true,
									"placeHolder": "mm/dd/yyyy",
									"col":4
								},
								
								{
									"type": "hidden",
									"name": "test1",
									"col":8
								},
								{
									"type": "select",
									"name": "currency",
									"label": "Currrency",
									"col":4,
									"required": true,
									"placeHolder": "Please Select a Currency",
									"provider": {
					                   	"ajax": "http://localhost:9004/api/v1/currency",
						                       "value":"id",
						                       "label":"name"
					                            },
								}]
								
						},	
						{
			"type": "group",
			"name": "invoiceItems",
			"label": "name",
			"fields": [{
					"type": "list",
					"name": "invoiceItems",
					"label": "Item",
					"editMode": "inline",
					"col": 12,
					"fields": [{
						"type": "text",
						"name": "qty",
						"parentNode":"invoiceItems",
						"label": "Qty",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "select",
						"name": "item",
						"label": "Item/PO.Ref",
						"placeHolder": "",
						"showLabel": false,
						
					}, {
						"type": "textarea",
						"name": "description",
						"parentNode":"invoiceItems",
						"label": "Description",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "text",
						"name": "part",
						"parentNode":"invoiceItems",
						"label": "Part(%)",
						"placeHolder": "",
						"showLabel": false
					},{
						"type": "text",
						"name": "amount",
						"parentNode":"invoiceItems",
						"label": "Amount",
						"placeHolder": "",
						"showLabel": false
					}
					
					
					],
					"actions": [{
							"name": "deleteRow",
							"type": "link",
							"label": "fa-minus-circle",
							"applyTo": "row",
							"handler": {
								"script": "deleteRow(event)"
							},
							"cssClass": ""
						},
						{
							"name": "editRow",
							"type": "link",
							"label": "fa-pencil",
							"applyTo": "row",
							"handler": {
								"script": "editRow(event)"
							},
							"cssClass": ""
						},
						{
							"name": "addRow",
							"type": "link",
							"label": "fa-plus-circle",
							"applyTo": "list",
							"handler": {
								"script": "addRow(event)"
							},
							"cssClass": ""
						}
					]
				}

				
			]
		},
			{
			"type": "group",
			"name": "termssubtotal",
			"label": "name",
			"col":12,
			"fields": [
       		 {
					"type" : "textarea",
					"name" : "comments",
					"label" : "Comments or Special Instructions",
					"listable" : false,
					"searchable" : false,
					"col":8
				},
				
				{
					"type" : "text",
					"name" : "subTotal",
					"label" : "SubTotal",
					"listable" : false,
					"searchable" : false,
					"col":4
				},
				
				{
					"type" : "textarea",
					"name" : "termsConditions",
					"label" : "Terms & Conditions",
					"listable" : false,
					"searchable" : false,
					"col":8
				},
				{
					"type" : "text",
					"name" : "grandTotal",
					"label" : "Grand Total",
					"listable" : false,
					"searchable" : false,
					"col":4
				},
				{
					"type" : "hidden",
					"name" : "test",
					"col":8
				},
				
				{
					"type" : "text",
					"name" : "advancePaid",
					"label" : "Advance Paid",
					"col":4
				},
				{
					"type" : "hidden",
					"name" : "test1",
					"col":8
				},
				
				{
					"type" : "text",
					"name" : "balanceDue",
					"label" : "Balance Due",
					"col":4
				}
				]
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
			"success": {"href":"invoice_list"},
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
			"success": {"href":"invoice_list"},
		}
	},
	{
		"name": "add",
		"type": "button",
		"label": "client",
		"applyTo": "list",
		"cssClass": "btn-danger",
		"handler": {
			"href": ""
		}
	}
],
 	"providers": {
		"collection": {
			"ajax": "http://localhost:9004/api/v1/invoice",
			"method": "get",
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/invoice/{id}",
			"method": "get",
			"pathParams":{"id":"#id"},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/invoice",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/invoice",
			"method": "put",
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/invoice/{id}",
			"method": "delete",
			"requestParams":{"id":"{id}"}
		}
	}
		

	};