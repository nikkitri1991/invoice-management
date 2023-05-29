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
			"fields": [
				{
					"type":"hidden",
					"name":"id",
					"id":true
				},
				{
				"type": "select",
				"name": "client",
				"label": "Client",
				"required": true,
				"placeHolder": "client",
				"col" :12,
				"provider":{
						"ajax":"http://localhost:9004/api/v1/client",
						"value":"id",
						"label":"name"
						}
				
			}, {
				"type": "select",
				"name": "invoiceNo",
				"label": "Invoice",
				"placeHolder": "Invoice",
				"col" : 12,
				"provider": {
						"ajax": "http://localhost:9004/api/v1/invoice",
						"value":"id",
						"label":"invoiceNo"
					},
				
				
			}]
		},
		{
			"type": "group",
			"name": "balance",
			"label": "name",
			"col": 12,
			"fields": [{
					"type": "text",
					"name": "payableTotal",
					"label": "Payable Total",
					"listable": false,
					"searchable": false,
					"col": 6
				},
				{
					"type": "text",
					"name": "amountPaid",
					"label": "Amount Paid",
					"required": false,
					"col": 6
				}
				
				]
			},		
			{
			    "type": "group",
			    "name": "payment",
			    "label": "name",
			    "col": 6,
			    "fields": [
				{
					"type": "text",
					"name": "balanceDue",
					"label": "Balance Due",
					"col": 12
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
					"name": "name",
					"label": "Payment Mode",
					"minLength": 8,
					"listable": false,
					"searchable": false,
					"col": 12,
					"provider": {
						"ajax": "http://localhost:9004/api/v1/paymentMode",
						"value":"id",
						"label":"name"
					},
					
					
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
			"name": "transactions",
			"label": "",
			"col":12,
			"fields": [{
					"type": "textarea",
					"name": "transactionDetails",
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
			"url": "http://localhost:9004/api/v1/receivePayment"
		},
		"redirects": {
			"success": {"href":"payments"},
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
			"success": {"href":"payments"},
		}
	},
	{
		"name": "add",
		"type": "button",
		"label": "Add",
		"applyTo": "list",
		"cssClass": "btn-danger",
		"handler": {
			"href": "payments"
		}
	}
],
 	"providers": {
		"collection": {
			"ajax": "http://localhost:9004/api/v1/receivePayment",
			"method": "get",
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/api/v1/receivePayment/{id}",
			"method": "get",
		    "pathParams":{"id":"#id"},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/receivePayment",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/receivePayment",
			"method": "put",
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/receivePayment/{id}",
			"method": "delete",
			"requestParams":{"id":"{id}"}
		}
	}
		

	};