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
				"id":true
			},
			{
				"type": "text",
				"name": "invoiceNo",
				"label": "Invoice No",
				"required": true
				
			},
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
			}],
			
			
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
			"label": "New Invoice",
			"applyTo": "list",
			"cssClass": "btn-primary",
			"handler": {
				"href": "invoice"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "invoice"
			}
		},
		{
			"name": "delete",
			"type": "button",
			"label": "Delete",
			"applyTo": "row",
			"cssClass": "btn-danger",
			/*"handler": {
				"script": "delete(event)"
			}*/
		}
	],
	"providers": {
		"collection": {
			"ajax": "http://localhost:9004/api/v1/billingType",
			"method": "get"
		},
		"selector": {
			"ajax": "",
			"method": "get",
			"pathParams":{},
			"queryParams":{}

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/billingType",
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