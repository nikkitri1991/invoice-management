var purchaseOrderForm = {
		"id" : "purchaseOrder",
		"parentId": "purchaseOrderFormContainer",
		"title" : "New Client Order",
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
				} ,
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
					"type" : "date",
					"name" : "receivedDate",
					"label" : "Received Date",
					"listable" : false,
					"searchable" : false,
					"col":7
				},
				{
					"type" : "text",
					"name" : "poTitle",
					"label" : "PO Title",
					"listable" : false,
					"searchable" : false,
                    "col":5
				},
				{
					"type" : "date",
					"name" : "deliveryDate",
					"label" : "DeliveryDate",
					"listable" : false,
					"searchable" : false,
					"col":7
				},
				 {
					"type" : "select",
					"name" : "billingType",
					"label" : "Billing Type",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "Billing Type",
					"col":5				},
				{
					"type" : "select",
					"name" : "billingCycle",
					"label" : "Billing Cycle",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "Billing Cycle",
					"col":7
				} ,
				 {
					"type" : "select",
					"name" : "currency",
					"label" : "Currency",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
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
				}, {
					"type" : "text",
					"name" : "hsn/sac",
					"label" : "HSN/SAC",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":5
				}, {
					"type" : "textarea",
					"name" : "billingAddress",
					"label" : "Billing Address",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":7
				}, {
					"type" : "textarea",
					"name" : "shippingAddress",
					"label" : "Shipping Address",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"col":5
				}, {
					"type" : "list",
					"name" : "items",
					"label" : "",
					"editMode" : "inline",
					"col":12,
					"fields" : [ {
						"type" : "textarea",
						"name" : "item",
						"label" : "Item",
						//"required": true,
						"placeHolder" : "",
						"showLabel" : false,
						"col":3
					}, {
						"type" : "textarea",
						"name" : "description",
						"label" : "Description",
						"placeHolder" : "",
						"showLabel" : false,
						"col":3

					}, {
						"type" : "text",
						"name" : "qty",
						"label" : "Qty",
						//"required": true,
						"placeHolder" : "",
						"showLabel" : false,
						"col":2
					}, {
						"type" : "text",
						"name" : "price",
						"label" : "Price",
						//"required": true,
						"placeHolder" : "",
						"showLabel" : false,
						"col":2
					}, {
						"type" : "text",
						"name" : "amount",
						"label" : "Amount",
						//"required": true,
						"placeHolder" : "",
						"showLabel" : false,
						"col":2
					}

					],
					/*"actions" : [ {
						"name" : "deleteRow",
						"type" : "link",
						"label" : "fa-minus-circle",
						"applyTo" : "row",
						"handler" : {
							"type" : "javascript",
							"func" : "deleteRow(event)",
							"method" : "post",
							"url" : "http://localhost:8082/api/v1/user"
						},
						"cssClass" : ""
					}, {
						"name" : "editRow",
						"type" : "link",
						"label" : "fa-pencil",
						"applyTo" : "row",
						"handler" : {
							"type" : "javascript",
							"func" : "editRow(event)",
							"method" : "post",
							"url" : "http://localhost:8082/api/v1/user"
						},
						"cssClass" : ""
					}, {
						"name" : "addRow",
						"type" : "link",
						"label" : "fa-plus-circle",
						"applyTo" : "list",
						"handler" : {
							"type" : "javascript",
							"func" : "addRow(event)",
							"method" : "post",
							"url" : "http://localhost:8082/api/v1/user"
						},
						"cssClass" : ""
					} ]*/
				}, {
					"type" : "textarea",
					"name" : "commentsorspecialInstructions",
					"label" : "Comments or Special Instructions",
					//"required": true,
					"placeHolder" : "",
					"showLabel" : false,
					"group" : "pocustinstructiondetails"
				}, {
					"type" : "textarea",
					"name" : "termsandconditions",
					"label" : "Terms and Conditions",
					//"required": true,
					"placeHolder" : "",
					"showLabel" : false,
					"group" : "pocustinstructiondetails"
				}, {
					"type" : "file",
					"name" : "chooseFile",
					"label" : "ChooseFile",
					"accept" : "image/png, image/jpeg",
					"group" : "pocustinstructiondetails"
				}, {
					"type" : "text",
					"name" : "subTotal",
					"label" : "SubTotal",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "tax",
					"label" : "Tax",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "Others",
					"label" : "Others",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "grandTotal",
					"label" : "Grand Total",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "advancepaid",
					"label" : "Advance Paid",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "balancedue",
					"label" : "BalanceDue",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				} ],
                    	
             "actions": [{
			"name": "save",
			"type": "submit",
			"label": "Save",
			"applyTo": "form",
			"handler": {
				"type": "javascript",
				"func": "submitForm(event)",
				"method": "post",
				"url": "http://localhost:8082/api/v1/user"
			},
			"redirects": {
				"success": {"href":"https://www.google.com"},
				"failure": {"href":"https://www.yahoo.com"}
			},
			"cssClass": "btn-primary"
		}, {
			"name": "cancel",
			"type": "button",
			"label": "Cancel",
			"applyTo": "form",
			"cssClass": "btn-secondary",
			"redirects": {
				"success": {"href":"client_list"},
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
			"dataNode": "items"
		},
		"selector": {
			"url": ""
		},
		"create": {
			"url": "",
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
			
	
	}]
	};