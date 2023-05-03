<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp"%>
</head>

<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
				<div id="clientForm" style="margin-top: 8%"></div>
			</div>
		</div>
	</div>
</body>


<script>
	var form =  {
			"id": "client",
			"title" : "New Client",
			"namespace" : "",
			"enctype": "multipart/form-data",
			"fields": [
			
					{
						"type": "text",
						"name": " name",
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
							"name": "companyAddress",
							"label": "Company Address Group",
							"cols": 2,
							"fields": [
								{
									"type": "text",
									"name": "address1",
									"label": "Address1",
									"required": true,
									"placeHolder": "Enter Address"
								},
								{
									"type": "select",
									"name": "addressType",
									"label": " AddressType",
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
								}]
						},
						{
						"type": "group",
						"name": "companyAddress1",
						"label": "Company Address Group",
						"cols": 2,
						"fields": [	
								
								{
									"type": "text",
									"name": "address2",
									"label": "Address2",
									"placeHolder": "Enter Address"
											
									}, 
									
								{
									"type": "number",
									"name": "mobile",
									"label": "Mobile",
									"placeHolder": "Enter Mobile"
								}]
						},
						{
							"type": "group",
							"name": "companyAddress2",
							"label": "Company Address Group",
							"cols": 2,
							"fields": [	
							
								{
									"type": "text",
									"name": "city",
									"label": "City",
									"placeHolder": "Enter City"
								},
								{
									"type": "text",
									"name": "fax",
									"label": "Fax",
									"placeHolder": "Enter Fax"
								}]
						
						},
						{
							"type": "group",
							"name": "companyAddress3",
							"label": "Company Address Group",
							"cols": 2,
							"fields": [	
								{
									"type": "text",
									"name": "state",
									"label": "State",
									"placeHolder": "Enter State"
								},
								{
									"type": "email",
									"name": "email",
									"label": "Email",
									"placeHolder": "Enter Email"
								}]
						},
						{
							"type": "group",
							"name": "companyAddress4",
							"label": "Company Address Group",
							"cols": 2,
							"fields": [	
								{
									"type": "text",
									"name": "pincode",
									"label": "Pincode",
									"placeHolder": "Enter Pincode"
								},
								{
									"type": "number",
									"name": "phone",
									"label": "Phone",
									"placeHolder": "Enter Phone Number"
								}]
						},
						{
							"type": "group",
							"name": "companyAddress5",
							"label": "Company Address Group",
							"cols": 2,
							"fields": [	
								{
									"type": "select",
									"name": "country",
									"label": "Country",
									"required": true,
									"provider": {
										"url": "",
										"value": "id",
										"label": "name"
									}
								},
								{
									"type": "number",
									"name": "webSite",
									"label": "Website",
									"placeHolder": "Enter website"
								}]
					},
					{
						"type": "group",
						"name": "contactPerson",
						"label": "Contact Person",
						"cols": 2,
						"fields": [
							{
								"type": "text",
								"name": "firstName",
								"label": "First Name",
								"required": true,
								"placeHolder": "Enter First Name"
							},
							
							{
								"type": "number",
								"name": "phone",
								"label": "Phone",
								"placeHolder": "Enter Phone Number"
							},
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
							
							{
								"type": "text",
								"name": "lastName",
								"label": "Last Name",
								"required": true,
								"placeHolder": "Enter Last Name"
							},
							{
								"type": "number",
								"name": "mobile",
								"label": "Mobile",
								"placeHolder": "Enter Mobile"
							}]
					},
					{
						"type": "group",
						"name": "contactPerson2",
						"label": "Contact Person",
						"cols": 2,
						"fields": [
						
							{
								"type": "text",
								"name": "designation",
								"label": "Designation",
								"placeHolder": "Enter Designation"
							},{
								"type": "text",
								"name": "profileURl",
								"label": "Profile URL",
								"placeHolder": "Enter Profile URL"
							}]
					},
					{
						"type": "group",
						"name": "contactPerson3",
						"label": "Contact Person",
						"cols": 2,
						"fields": [
							
							{
								"type": "email",
								"name": "email",
								"label": "Email",
								"placeHolder": "Enter Email"
							},{
								"type": "text",
								"name": "messageChannel",
								"label": "Message Channel",
								"placeHolder": "Enter Message Channel"
							}]
					},
	
				{
					"type": "group",
					"name": "taxes",
					"label": "Taxes",
					"cols": 2,
					"fields": [
						{
							"type": "text",
							"name": "taxDocNo1",
							"label": "Tax Doc No.1",
							"required": true,
							"placeHolder": "Enter Tax Doc No.1 "
						},
						
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
							"type": "text",
							"name": "taxDocNo1",
							"label": "Tax Doc No.2",
							"placeHolder": "Tax Doc No.2"
						},
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
			{
				"type": "group",
				"name": "document",
				"label": "document",
				"cols": 2,
				"fields": [
					
					{
						"type": "file",
						"name": "file",
						"label": "Non Disclosure Agreement Or Master Service Agreement"
						
					}]
				
		
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
						"url": ""
					},
					"cssClass": "btn-primary"
				}, {
					"name": "cancel",
					"type": "button",
					"label": "Cancel",
					"applyTo": "form",
					"cssClass": "btn-secondary"
				},
				{
					"name": "add",
					"type": "button",
					"label": "Add Client",
					"applyTo": "list",
					"cssClass": "btn-danger"
				}
			],
			"dataProvider":{
				"collection":{"url":""},
				"selector":{"url":""}
			}
		};
</script>
<%@include file="../theme/js_scripts.jsp"%>
<jsp:include page="../template/form-template.jsp">
	<jsp:param name="formContainerId" value="clientForm" />
	<jsp:param name="formId" value="clientForm" />
	<jsp:param name="cancelPage" value="client_list" />
	<jsp:param name="successPage" value="client_list" />
</jsp:include>

</html>