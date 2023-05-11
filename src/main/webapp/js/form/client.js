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
							"ajax": "",
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
									"provider": {
							               "ajax": "",
							               "value": "id",
							                "label": "name"
						                        },
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
										"ajax": "",
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
			"url": ""
		},
		"redirects": {
			"success": {"href":""},
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
			"success": {"href":""},
		}
	},
	{
		"name": "add",
		"type": "button",
		"label": "client",
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
			"ajax": "",
			"method": "put",
			
		},
		"delete": {
			"ajax": "",
			"method": "delete",
			"requestParams":{"id":"{id}"}
		}
	}
		

	};