	var receivePaymentForm = {
		"id": "receivePaymentForm",
        "parentId": "receivePaymentFormContainer",
	    "title": "Receive Payments",
	    "subtitle": "",
		"namespace" : "",
		"enctype" : "multipart/form-data",
		"fields": [{
			"type": "group",
			"name": "nameGroup",
			"label": "name",
			"col":12,
			"fields": [{
				"type": "select",
				"name": "client",
				"label": "Client",
				"required": true,
				"placeHolder": "client",
				"tranzient": true,
				"col" :12,
				"validations": {
					"rules": {
						"minlength": 5
					},
					"messages": {
						"minlength": " Your username must consist of at least 2 characters"
					}
				}
			}, {
				"type": "text",
				"name": "invoice",
				"label": "Invoice",
				"placeHolder": "Invoice",
				"col" : 12
			}]
		},

		{
			"type": "group",
			"name": "balance",
			"label": "name",
			"col": 6,
			"fields": [{
					"type": "text",
					"name": "payabletotal",
					"label": "Payable Total",
					"listable": false,
					"searchable": false,
					"col": 12
				},
				{
					"type": "text",
					"name": "balanceDue",
					"label": "Balance Due",
					"col": 12,
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
					"type": "text",
					"name": "amountReceived",
					"label": "Amount Received",
					"minLength": 8,
					"listable": false,
					"searchable": false,
					"col": 12
				},
				{
					"type": "select",
					"name": "paymentMode",
					"label": "Payment Mode",
					"minLength": 8,
					"listable": false,
					"searchable": false,
					"col": 12
				},
				{
					"type": "date",
					"name": "dateOfPayment",
					"label": "Date Of Payment",
					"minLength": 8,
					"listable": false,
					"searchable": false,
					"col": 12
				},
				
				
			]
		},
		{
			"type": "group",
			"name": "amount",
			"label": "name",
			"col": 6,
			"fields": [{
					"type": "text",
					"name": "amountPaid",
					"label": "Amount Paid",
					"required": false,
					"col": 12
				}
					]
		},
		{
			"type": "group",			
			"name": "transactions",
			"label": "",
			"col":12,
			"fields": [{
					"type": "text",
					"name": "transactionDetail",
					"label": "Transaction Details (Bank, Cheque,Draft)",
					"editMode": "inline",
					"col": 12,
					}
					]
		}],			
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
				"success": {"href":"user-list.jsp"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "user-form.jsp"
			}
		}
	],
	"dataProvider": {
		"collection": {
			"url": "http://localhost:9098/api/v1/recruitementSource",
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
			

			};
		
		
		
		
		

