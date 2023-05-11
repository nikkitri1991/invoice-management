var invoiceForm =  {
		"id": "invoiceForm",
        "parentId": "invoiceFormContainer",
	    "title": "New Invoice",
	    "subtitle": "",
			"namespace" : "",
			"enctype": "multipart/form-data",
			"fields": [
						{
							"type": "group",
							"name": "invoice",
							"label": "name",
							"cols": 12,
							"fields": [
								{
									"type": "select",
									"name": "client",
									"label": "Client",
									"required": true,
									"placeHolder": "Select a Client",
									"col":8
								},
								{
									"type": "text",
									"name": "invoiceno",
									"label": "Invoice No",
									"col":4,
									"options": [{
										"value": "",
										"label": ""
									}, {
										"value": "",
										"label": "",
										"selected": "selected"
									}, {
										"value": "",
										"label": ""
									}],
									"required": true,
									"placeHolder": "Select Address Type"
								},
								
								{
									"type": "select",
									"name": "purchaseOrder",
									"label": "Purchase Order",
									"placeHolder": "Select Purchase Order",
									"col":8
											
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
							"cols": 12,
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
			"name": "item",
			"label": "name",
			"fields": [{
					"type": "list",
					"name": "item",
					"label": "",
					"editMode": "inline",
					"col": 12,
					"fields": [{
						"type": "text",
						"name": "qty",
						"label": "Qty",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "text",
						"name": "itempo",
						"label": "Item/PO.Ref",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "text",
						"name": "description",
						"label": "Description",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "text",
						"name": "part",
						"label": "Part(%)",
						"placeHolder": "",
						"showLabel": false
					},{
						"type": "text",
						"name": "amount",
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
								"type": "javascript",
								"func": "deleteRow(event)",
								"method": "post",
								"url": "http://localhost:8082/api/v1/user"
							},
							"cssClass": ""
						},
						{
							"name": "editRow",
							"type": "link",
							"label": "fa-pencil",
							"applyTo": "row",
							"handler": {
								"type": "javascript",
								"func": "editRow(event)",
								"method": "post",
								"url": "http://localhost:8082/api/v1/user"
							},
							"cssClass": ""
						},
						{
							"name": "addRow",
							"type": "link",
							"label": "fa-plus-circle",
							"applyTo": "list",
							"handler": {
								"type": "javascript",
								"func": "addRow(event)",
								"method": "post",
								"url": ""
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
					"name" : "subtotal",
					"label" : "SubTotal",
					"listable" : false,
					"searchable" : false,
					"col":4
				},
				
				{
					"type" : "textarea",
					"name" : "Terms & Conditions",
					"label" : "",
					"listable" : false,
					"searchable" : false,
					"col":8
				},
				{
					"type" : "text",
					"name" : "grandToatal",
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
			"ajax": "",
			"method": "get",
		},
		"selector": {
			"ajax": "",
			"method": "get",
			"pathParams":{},
			"queryParams":{}

		},
		"create": {
			"ajax": "",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "",
			"method": "put",
			
		},
		"delete": {
			"ajax": "",
			"method": "delete",
			"requestParams":{"id":"{id}"}
		}
	}
		

	};