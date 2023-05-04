var paymentListForm = {
		"id": "paymentListForm",
        "parentId": "paymentListFormContainer",
	    "title": "Payments",
	    "subtitle": "",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "text",
				"name": "id",
				"label": "#",
				"required": true,
				"placeHolder": ""
			},
			{
				"type": "text",
				"name": "invoiceno",
				"label": "Invoice No",
				"required": true,
				"placeHolder": ""
			},
			{
				"type": "text",
				"name": "client",
				"label": "Client",
				"required": true,
				"placeHolder": ""
			},
			{
				"type": "Date",
				"name": "paymentdate",
				"label": "Payment Date",
				"required": true,
				"placeHolder": ""
			},
			{
				"type": "Date",
				"name": "paymentdate",
				"label": "Payment Date",
				"required": true,
				"placeHolder": ""
			},
			{
				"type": "text",
				"name": "modeofpayment",
				"label": "Mode Of Payment",
				"required": true,
				"placeHolder": ""
			},
			{
				"type": "text",
				"name": "amount",
				"label": "Amount",
				"required": true,
				"placeHolder": ""
			},
			{
				"type": "text",
				"name": "amountinr",
				"label": "Amount (INR)",
				"required": true,
				"placeHolder": ""
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
			"label": "Add Payment",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "receive_payment"
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