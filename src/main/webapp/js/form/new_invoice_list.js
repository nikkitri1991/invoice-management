var newInvoiceListForm = {
		"id": "newInvoice",
		"title" : "Invoices",
		 "parentId": "newInvoiceListContainer",
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
				"name": "invoiceNo",
				"label": "Invoice No",
				"required": true
				
			}/*,
			{
				"type": "date",
				"name": "invoiceDate",
				"label": "Invoice Date",
				"required": true
				
			},
			{
				"type": "date",
				"name": "dueDae",
				"label": "Due Date",
				"required": true
				
			},
			{
				"type": "text",
				"name": "client",
				"label": "Client",
				"required": true
				
			},
			{
				"type": "text",
				"name": "pono",
				"label": "PO NO.",
				"required": true
				
			},
		
			{
				"type": "text",
				"name": "amountPayable",
				"label": "Amount Payable",
				"required": true
				
			},
			{
				"type": "text",
				"name": "taxAmount",
				"label": "Tax Amount",
				"required": true
				
			},
			{
				"type": "text",
				"name": "amountReceived",
				"label": "Amount Received",
				"required": true	
			}*/],
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
					"success": {"href":"currency_list"},
				}
			},
			{
				"name": "add",
				"type": "button",
				"label": "New Invoice",
				"applyTo": "list",
				"cssClass": "btn-danger",
				"handler": {
					"href": "invoice"
				}
			}
		],
		"dataProvider": {
			"collection": {
				"url": "http://localhost:9004/api/v1/currency",
				"method": "get",
				"dataNode": " "
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
		}	};
