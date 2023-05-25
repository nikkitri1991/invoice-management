var paymentListForm = {
		"id": "paymentList",
		"title" : "Receive Payment",
		 "parentId": "paymentListContainer",
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
				"type": "text",
				"name": "invoice.invoiceNo",
				"label": "Invoice No",
				"required": true
				
			},
			{
				"type": "text",
				"name": "clientId",
				"label": "Client",
				"required": true
				
			},
			{
				"type": "date",
				"name": "dateOfPayment",
				"label": "Payment Date",
				"required": true
				
			},
			{
				"type": "text",
				"name": "paymentMode.name",
				"label": "Mode Of Payment",
				"required": true
				
			},
			{
				"type": "text",
				"name": "amountPaid",
				"label": "Amount",
				"required": true
				
			},
			{
				"type": "text",
				"name": "amountReceived",
				"label": "Amount(INR)",
				"required": true
				
			}
			
			
			
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
				"success": {"href":""},
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
				"success": {"href":""},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "+ Add Receive Payment",
			"applyTo": "list",
			"cssClass": "btn-primary",
			"handler": {
				"href": "receive_payment"
			}
		}
		
	],
	"providers": {
		"collection": {
			"ajax": "http://localhost:9004/api/v1/receivePayment",
			"method": "get"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/receivePayment/{id}",
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