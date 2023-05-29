var clientForm =  {
		"id": "clientForm",
        "parentId": "clientFormContainer",
	    "title": "New Client",
	    "subtitle": "",
			"namespace" : "",
			"enctype": "multipart/form-data",
			"fields": [
					{	
						"type": "hidden",
						"name": "id",
						"id":true,
						"required" : true
					},
					{
						"type": "group",
						"name": "clientFields",
						"cols": 12,
						"fields": [
					{
						"type": "text",
						"name": "name",
						"label": "Name",
						"placeHolder": "Name",
						"col":6
					}, {
						"type": "text",
						"name": "bussinessName",
						"label": "Bussiness Name",
						"placeHolder": "Bussiness Name",
						"col":6
					},
					 {
						"type": "select",
						"name": "companyType",
						"label": "Company Type",
						"required" : true,
						"col":6,
						
						"provider": {
							"ajax": "http://localhost:9004/api/v1/companyType",
							"value": "id",
							"label": "cname"
						}
					
					},{
						"type": "text",
						"name": "primaryBussiness",
						"label": "Primary Bussiness",
						"placeHolder": "Primary Bussiness",
						"col":6
					}]
					},
				
					{
							"type": "group",
							"name": "address",
							
							"cols": 12,
							"fields": [
								{
									"type": "text",
									"name": "address1",
									"label": "Address1",
									
									"placeHolder": "Enter Address",
									"col":6
								},
								{
									"type": "select",
									"name": "addressType",
									"label": " AddressType",
									"col":6,
									"provider": {
							               "ajax": "http://localhost:9004/api/v1/addressType",
							               "value": "id",
							                "label": "aname"
						                        },
									
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
									"type": "text",
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
									"type": "text",
									"name": "webSite",
									"label": "Website",
									"placeHolder": "Enter website",
									"col":6
								},
								{
									"type": "text",
									"name": "phone",
									"label": "Phone",
									"placeHolder": "Enter Phone Number",
									"col":6
								}]
						},
						{
						"type": "group",
						"name": "contact",
					
						"col": 12,
						"fields": [	
								{
								"type": "text",
								"name": "firstName",
								"label": "First Name",
								"placeHolder": "Enter First Name",
								"col":6
							},	
							{
								"type": "text",
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
								
								"placeHolder": "Enter Last Name",
								"col":6
							},
								
									
							{
								"type": "text",
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
								"name": "profileUrl",
								"label": "Profile URL",
								"placeHolder": "Enter Profile URL",
								"col":6
							},
							
							/*{
								"type": "email",
								"name": "email",
								"label": "Email",
								"placeHolder": "Enter Email",
								"col":6
							},*/
								{
								"type": "text",
								"name": "messageChannel",
								"label": "Message Channel",
								"placeHolder": "Enter Message Channel",
								"col":6
							}]
						},
						
						{
							"type": "group",
							"name": "taxes",
							
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
								"type": "checkbox",
								"name": "enabled",
								"label": "Tax Exemptable",
								
								"col":6,
								"options": [{
									"value": "true"
									}],
								"provider": {
									"url": "",
									"id":"",
									"value":""
								}
						},
						{
							"type": "checkbox",
							"name": "tax",
							"label": "Taxes",
							
							"col":6,
							"options": [{
								"value": "CGST",
								"label": "CGST",
								"checked": "checked"
							}, {
								"value": "SGST",
								"label": "SGST"
							}],
							}]
						},
						{
						"type": "group",
						"name": "document",
						"cols": 12,
						"fields": [
							{
								"type": "drag_drop",
								"name": "nonDiscloser",
								"label": "Non Discloser Agreement",
								"placeHolder": "Choose File",
								"col": 6
							}]
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
				"success": {"href":"client_list"},
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
				"success": {"href":"client"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "+ Add Client",
			"applyTo": "list",
			"cssClass": "btn-primary",
			"handler": {
				"href": "client"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "client"
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
			"ajax": "http://localhost:9004/api/v1/client",
			"method": "get"
		},
		"selector": {
			"ajax": "http://localhost:9004/api/v1/client/{id}",
			"method": "get"

		},
		"create": {
			"ajax": "http://localhost:9004/api/v1/client",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9004/api/v1/client",
			"method": "put",
			
		},
		"delete": {
			"ajax": "http://localhost:9004/api/v1/client",
			"method": "delete"
			
		}
	}

	};