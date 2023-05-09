var clientForm =  {
		"id": "clientForm",
        "parentId": "clientFormContainer",
	    "title": "New Client",
	    "subtitle": "",
			"namespace" : "",
			"enctype": "multipart/form-data",
			"fields": [
								{
						"type": "text",
						"name": "name",
						"label": "Name",
						"required": true,
						"placeHolder": "Name"
					}, {
						"type": "text",
						"name": "bussinessName",
						"label": "Bussiness Name",
						"required": true,
						"placeHolder": "Bussiness Name"
					},
					 {
						"type": "select",
						"name": "companyType",
						"label": "Company Type",
						"provider": {
							"url": "",
							"value": "id",
							"label": "name"
						},
						"required": true
					},{
						"type": "text",
						"name": "primaryBussiness",
						"label": "Primary Bussiness",
						"required": true,
						"placeHolder": "Primary Bussiness"
					},
				
						{
							"type": "group",
							"name": "address",
							"label": "name",
							"cols": 12,
							"fields": [
								{
									"type": "text",
									"name": "address1",
									"label": "Address1",
									"required": true,
									"placeHolder": "Enter Address",
									"col":6
								},
								{
									"type": "select",
									"name": "addressType",
									"label": " AddressType",
									"col":6,
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
									"type": "text",
									"name": "address2",
									"label": "Address2",
									"placeHolder": "Enter Address",
									"col":6
											
									}, 
									
									
									{
									"type": "number",
									"name": "mobile",
									"label": "Mobile",
									"placeHolder": "Enter Mobile",
									"col":6
								},
								
								
								
									
									
									
									{
									"type": "text",
									"name": "city",
									"label": "City",
									"placeHolder": "Enter City",
									"col":6
								},	
								
								
								{
									"type": "text",
									"name": "fax",
									"label": "Fax",
									"placeHolder": "Enter Fax",
									"col":6
								},
								
								
								
								{
									
									
									"type": "text",
									"name": "state",
									"label": "State",
									"placeHolder": "Enter State",
									"col":6
								},
									{
									"type": "email",
									"name": "email",
									"label": "Email",
									"placeHolder": "Enter Email",
									"col":6
								},
									
									
									
									
									{
									"type": "text",
									"name": "pincode",
									"label": "Pincode",
									"placeHolder": "Enter Pincode",
									"col":6
								},
								
									{
									"type": "number",
									"name": "webSite",
									"label": "Website",
									"placeHolder": "Enter website",
									"col":6
								},
								
							{
									"type": "select",
									"name": "country",
									"label": "Country",
									"required": true,
									"col":6,
									"provider": {
										"url": "",
										"value": "id",
										"label": "name"
									}
								},	
								
								{
									"type": "number",
									"name": "phone",
									"label": "Phone",
									"placeHolder": "Enter Phone Number",
									"col":6
								},
								
									
								]
						},
						{
						"type": "group",
						"name": "contact",
						"label": "name",
						"col": 12,
						"fields": [	
								{
								"type": "text",
								"name": "firstName",
								"label": "First Name",
								"required": true,
								"placeHolder": "Enter First Name",
								"col":6
							},	
							
								
									{
								"type": "number",
								"name": "phone",
								"label": "Phone",
								"placeHolder": "Enter Phone Number",
								"col":4
							},
								
									
							{
								"type": "text",
								"name": "extn",
								"label": "Extn",
								"placeHolder": "",
								"col":2
							},
								
								{
								"type": "text",
								"name": "lastName",
								"label": "Last Name",
								"required": true,
								"placeHolder": "Enter Last Name",
								"col":6
							},
								
									
							{
								"type": "number",
								"name": "mobile",
								"label": "Mobile",
								"placeHolder": "Enter Mobile",
								"col":6
							},
								
								
							{
								"type": "text",
								"name": "designation",
								"label": "Designation",
								"placeHolder": "Enter Designation",
								"col":6
							},
								
							{
								"type": "text",
								"name": "profileURl",
								"label": "Profile URL",
								"placeHolder": "Enter Profile URL",
								"col":6
							},
							
							{
								"type": "email",
								"name": "email",
								"label": "Email",
								"placeHolder": "Enter Email",
								"col":6
							},
								{
								"type": "text",
								"name": "messageChannel",
								"label": "Message Channel",
								"placeHolder": "Enter Message Channel",
								"col":6
							}
								
								
								]
						},
						
						{
							"type": "group",
							"name": "taxes",
							"label": "name",
							"cols": 12,
							"fields": [

								{
									"type": "text",
									"name": "taxDocNo1",
									"label": "Tax Doc No.1",
									"placeHolder": "Tax Doc No.1",
									"col": 6
								},
								{
									"type": "text",
									"name": "taxDocNo2",
									"label": "Tax Doc No.2",
									"placeHolder": "Tax Doc No.2",
									"col": 6
								},
						{
							"type": "radio",
							"name": "taxes",
							"label": "Taxes",
							"required": true,
							"col":6,
							"options": [{
								"value": "CGST",
								"label": "CGST",
								"checked": "checked"
							}, {
								"value": "SGST",
								"label": "SGST"
							}],

							"provider": {
								"url": "",
								"id":"",
								"value":""
							}
						},
						
							{
									"type": "file",
									"name": "nonDiscloser",
									"label": "Non Discloser",
									"placeHolder": "Choose File",
									"col": 6
								}
					
						

								
								]
						}
						/*{
							"type": "group",
							"name": "taxes",
							"label": "name",
							"cols": 6,
							"fields": [	
							
								
							]
					},
					{
						"type": "group",
						"name": "contactPerson",
						"label": "Contact Person",
						"cols": 2,
						"fields": [
							
							
							{
								"type": "text",
								"name": "extn",
								"label": "Extn",
								"placeHolder": ""
							}]
					},
					{
						"type": "group",
						"name": "contactPerson1",
						"label": "Contact Person",
						"cols": 2,
						"fields": [		
							]
					},
					{
						"type": "group",
						"name": "contactPerson2",
						"label": "Contact Person",
						"cols": 2,
						"fields": [
						
							,]
					},
					{
						"type": "group",
						"name": "contactPerson3",
						"label": "Contact Person",
						"cols": 2,
						"fields": [
							
							,]
					},
	
				{
					"type": "group",
					"name": "taxes",
					"label": "Taxes",
					"cols": 2,
					"fields": [
						,
						
						{
							"type": "radio",
							"name": "taxes",
							"label": "Taxes",
							"required": true,
							"options": [{
								"value": "CGST",
								"label": "CGST",
								"checked": "checked"
							}, {
								"value": "SGST",
								"label": "SGST"
							}],

							"provider": {
								"url": "",
								"id":"",
								"value":""
							}
						}]
				},
				{
						"type": "group",
						"name": "taxes1",
						"label": "Taxes",
						"cols": 2,
						"fields": [
							
						
						{
							"type": "checkbox",
							"id": "taxExemptable",
							"name": "taxExemptable",
							"label": "Tax Exemptable",
							"required": true,
							"option":[],
							"provider":{
								"url":"",
								"id":"",
								"value":"",
							
							}
							
						}]
				
			},
*/	
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
			

		};