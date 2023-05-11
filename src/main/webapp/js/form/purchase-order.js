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
					"type" : "select",
					"name" : "client",
					"label" : "Client",
					"listable" : false,
					"searchable" : false,
					"col":7
				},
				
				{
					"type" : "text",
					"name" : "pono",
					"label" : "PO. No",
					"listable" : false,
					"searchable" : false,
					"col":5
				},
				{
					"type" : "text",
					"name" : "address",
					"label" : "",
					"listable" : false,
					"searchable" : false,
					"col":7
				},
				
				{
					"type" : "date",
					"name" : "podate",
					"label" : "PO. Date",
					"listable" : false,
					"searchable" : false,
					"col":5
				},
				
				{
					"type" : "text",
					"name" : "poTitle",
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
					"name" : "billingType",
					"label" : "Billing Type",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "Billing Type",
					"provider": {
						"url": "http://localhost:9004/api/v1/billingCycle",
						"value":"id",
						"label":"name"
					},
					"col":4		
				},
				{
					"type" : "select",
					"name" : "billingCycle",
					"label" : "Billing Cycle",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "Billing Cycle",
					"provider": {
						"url": "http://localhost:9004/api/v1/billingType",
						"value":"id",
						"label":"name"
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
					"name" : "checkbox",
					"label" : "SOW",
					"id" : "sow",
					"group" : "pocustdetails",
					"required" : true,
					"col":7,
					"provider" : {
						"url" : "https://mocki.io/v1/e6d53dc0-3cab-4c21-a915-b2b9433ff945",
						"options" : [],
						"id" : "sow",
						"value" : "Yes"
					}
				},
				
					
				{
					"type" : "select",
					"name" : "currency",
					"label" : "Currency",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":5,
					"provider": {
						"url": "http://localhost:9004/api/v1/currency",
						"value":"id",
						"label":"name"
					},
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
					"name" : "hsn/sac",
					"label" : "HSN/SAC",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":5
				},
			
				{
					"type" : "textarea",
					"name" : "shippingAddress",
					"label" : "Shipping Address",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":12
				}
				
				]
		 },
		 
		{
			"type": "group",
			"name": "middleGroup",
			"label": "name",
			"fields": [{
					"type": "list",
					"name": "qualifications",
					"label": "Qualifications",
					"editMode": "inline",
					"col": 12,
					"fields": [{
						"type": "text",
						"name": "item",
						"label": "Item",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "text",
						"name": "description",
						"label": "Description",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "number",
						"name": "qty",
						"label": "Qty",
						"placeHolder": "",
						"showLabel": false
					}, {
						"type": "number",
						"name": "price",
						"label": "Price",
						"placeHolder": "",
						"showLabel": false
					},{
						"type": "number",
						"name": "amount",
						"label": "Amoutn",
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
			"name": "instructions",
			"label": "name",
			"col": 12,
			"fields": [{
					"type": "text",
					"name": "comments",
					"label": "Comments or Special Instructions",
					"listable": false,
					"searchable": false,
					"col": 9
				},
				{
					"type": "number",
					"name": "subtotal",
					"label": "Sub Total",
					"required": false,
					"col": 3
				},
				
				
				{
					"type": "text",
					"name": "terms",
					"label": "Terms & Conditions",
					"col": 9,
					"validations": {
						"rules": {
							"required": true,
							"email": true
						},
						"messages": {
							"required": " Please enter a username",
							"email": " Please enter a valid email address"
						}
					}
				},
				 {
					"type" : "number",
					"name" : "tax",
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
			"name": "amount",
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
					"name" : "Others",
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
					"name" : "advancepaid",
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
					"name" : "balancedue",
					"label" : "BalanceDue",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"col":3
					
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
			"type": "javascript",
			"func": "submitForm(event)",
			"method": "post",
			"url": "http://localhost:9004/api/v1/billingType"
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
			"ajax": "http://localhost:9004/api/v1/billingType",
			"method": "put",
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/billingType",
			"method": "delete",
			"requestParams":{"id":"{id}"}
		}
	}
		

	};