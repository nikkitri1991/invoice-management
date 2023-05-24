var purchaseOrderForm = {
		"id" : "purchaseOrder",
		"parentId": "purchaseOrderFormContainer",
		"title" : "New PO",
		"namespace" : "",
		"enctype" : "multipart/form-data",
		"fields": [{
			"type": "group",
			"name": "nameGroup",
			"label": "name",
			"col":12,
			"fields": [
				{
				    "type": "hidden",
			         "name": "id",
			         "id":true,
			         "required": true
				},
       		    {
					"type" : "select",
					"name" : "clientId",
					"label" : "Client",
					"listable" : false,
					"searchable" : false,
					"col":7,
						"options": [{
						"value": "1",
						"label": "Tata"
					}, {
						"value": "2",
						"label": "Mark Jukarbarge"
					}, {
						"value": "3",
						"label": "Jeff Bajos"
					},
					 {
						"value": "4",
						"label": "Tim Cook"
					},
					 {
						"value": "5",
						"label": "Elon Mask"
					}
					
					]
				},
				
				{
					"type" : "text",
					"name" : "poNumber",
					"label" : "PO. No",
					"listable" : false,
					"searchable" : false,
					"col":5
				},
				{
					"type" : "text",
					"name" : "address",
					"label" : "Address",
					"listable" : false,
					"searchable" : false,
					"col":7
				},
				
				{
					"type" : "date",
					"name" : "poDate",
					"label" : "PO. Date",
					"listable" : false,
					"searchable" : false,
					"col":5
				},
				
				{
					"type" : "text",
					"name" : "title",
					"label" : "PO Title",
					"listable" : false,
					"searchable" : false,
                    "col":7
				},
				
				{
					"type" : "date",
					"name" : "receivedDate",
					"label" : "Received Date",
					"listable" : false,
					"searchable" : false,
					"col":5
				},
				 {
					"type" : "select",
					"name" : "billingTypeName",
					"label" : "Billing Type",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "Billing Type",
					"provider": {
						"ajax": "http://localhost:9004/api/v1/billingType",
						"value":"id",
						"label":"billingTypeName"
					},
					"col":4		
				},
				{
					"type" : "select",
					"name" : "billingCycleName",
					"label" : "Billing Cycle",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "Billing Cycle",
					"provider": {
						"ajax": "http://localhost:9004/api/v1/billingCycle",
						"value":"id",
						"label":"billingCycleName"
					},
					"col":3
				},
				
				{
					"type" : "date",
					"name" : "deliveryDate",
					"label" : "DeliveryDate",
					"listable" : false,
					"searchable" : false,
					"col":5
				},
				
				
				
				{
					"type" : "checkbox",
					"name" : "sow",
					"label" : "SOW",
					"required" : true,
					"col":7,
				    "options": [{
								"value": "true"
							}],
						
				},
				
					
				{
					"type" : "select",
					"name" : "name",
					"label" : "Currency",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":5,
					"provider": {
						"ajax": "http://localhost:9004/api/v1/currency",
						"value":"id",
						"label":"name"
					},
					"required": true

				},
				
				{
					"type" : "textarea",
					"name" : "billingAddress",
					"label" : "Billing Address",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":7
					
				},
				
				
					{
					"type" : "text",
					"name" : "hsnSac",
					"label" : "HSN/SAC",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":5
				},
			
			{
					"type" : "select",
					"name" : "name",
					"label" : "Payment Term",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"options": [{
						"value": "1",
						"label": "15 Days"
					}, {
						"value": "2",
						"label": "30 Days"
					},
					{  "value": "3",
						"label": "45 Days"
					},
					{
					  "value": "2",
					   "label": "60 Days"}
					],
					"col":7
				},
				{
					"type" : "textarea",
					"name" : "shippingAddress",
					"label" : "Shipping Address",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":5
				}
				
				]
		 },
		 
		{
			"type": "group",
			"name": "clientPurchaseOrderItem",
			"label": "name",
			"fields": [{
					"type": "list",
					"name": "clientPurchaseOrderItem",
					"label": "ClientPurchaseOrderItem",
					"editMode": "inline",
					
					"fields": [{
						"type": "textarea",
						"parentNode":"clientPurchaseOrderItem",
						"name": "itemName",
						"label": "Item",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "textarea",
						"name": "itemDescription",
						"parentNode":"clientPurchaseOrderItem",
						"label": "Description",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "text",
						"name": "qty",
						"parentNode":"clientPurchaseOrderItem",
						"label": "Qty",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "text",
						"name": "price",
						"parentNode":"clientPurchaseOrderItem",
						"label": "Price",
						"placeHolder": "",
						"showLabel": false
					},{
						"type": "text",
						"name": "amount",
						"parentNode":"clientPurchaseOrderItem",
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
								"script": "deleteRow(event)",
							},
							"cssClass": ""
						},
						{
							"name": "editRow",
							"type": "link",
							"label": "fa-pencil",
							"applyTo": "row",
							"handler": {
							   "script": "editRow(event)",
							},
							"cssClass": ""
						},
						{
							"name": "addRow",
							"type": "link",
							"label": "fa-plus-circle",
							"applyTo": "list",
							"handler": {
								"script": "addRow(event)",
							},
							"cssClass": ""
						}
					]
				}

				
			]
		},
		{
			"type": "group",
			"name": "instructions1",
			"label": "name",
			"col": 12,
			"fields": [{
					"type": "textarea",
					"name": "instructions",
					"label": "Comments or Special Instructions",
					"listable": false,
					"searchable": false,
					"col": 9
				},
				{
					"type": "text",
					"name": "subTotal",
					"label": "Sub Total",
					"required": false,
					"col": 3
				},
				
				
				{
					"type": "textarea",
					"name": "termsConditions",
					"label": "Terms & Conditions",
					"col": 9
				/*	"validations": {
						"rules": {
							"required": true,
							"email": true
						},
						"messages": {
							"required": " Please enter a username",
							"email": " Please enter a valid email address"
						}
					}*/
				},
				 {
					"type" : "text",
					"name" : "taxAmount",
					"label" : "Tax",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"col":3
				}
				
				
			]
		},
		{
			"type": "group",
			"name": "amount1",
			"label": "name",
			"col": 12,
			"fields": [
				{
					"type" : "hidden",
					"name" : "test",
					"col":9
				},
				{
					"type" : "text",
					"name" : "otherAmount",
					"label" : "Others",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"col":3
					
					
				},
				
				{
					"type" : "hidden",
					"name" : "test1",
					"col":9
				},
				 {
					"type" : "text",
					"name" : "grandTotal",
					"label" : "Grand Total",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"col":3
					
				},
				{
					"type" : "hidden",
					"name" : "test2",
					"col":9
				},
				
				
				 {
					"type" : "text",
					"name" : "advancePaid",
					"label" : "Advance Paid",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"col":3
				  
				},
				{
					"type" : "hidden",
					"name" : "test3",
					"col":9
				},
				
				 {
					"type" : "text",
					"name" : "balanceDue",
					"label" : "BalanceDue",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"col":3
					
				},
				{
									"type": "file",
									"name": "poFileUrl",
									"label": "",
									"placeHolder": "Choose File",
									"col": 7
								}
				
				
					]
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
			"success": {"href":"purchase_order_list"},
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
			"success": {"href":"purchase_order_list"},
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
 	"providers": {
		"collection": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder",
			"method": "get"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder/{id}",
			"method": "get",
			"pathParams":{"id":"#id"},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder",
			"method": "put"
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/purchaseOrder/{id}",
			"method": "delete"
		}
	}
		

	};