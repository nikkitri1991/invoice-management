
<!DOCTYPE html>
<html>
<head>
<title>PurchaseOrder Form</title>
<%@include file="../theme/cdn.jsp"%>
</head>
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<!-- <h2 ></h2> -->

			<div class="container">
				<div id="purchaseOrderFormContainer" style="margin-top: 8%"></div>
				<form id="purchaseOrderForm">
					<div class="row">
						<div class="col-md-7" id="pocustdetails">

							<!-- <div class="row">
										<div class="col-md-6" id="billingType"></div>
										<div class="col-md-6" id="billingCycle"></div>
									</div> -->
						</div>
						<div class="col-md-5" id="podetails"></div>
					</div>
				</form>
			<div id="poitemdetails"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-7" id="pocustinstructiondetails"></div>
					<div class="col-md-5" id="poamountdetails"></div>
				</div>
			</div>
			</div>
		</div>
	</div>
</body>


<script>
	var form = {
		"id" : "purchaseOrder",
		"title" : "New Client Order",
		"namespace" : "",
		"enctype" : "multipart/form-data",
		"fields" : [
				{
					"type" : "select",
					"name" : "client",
					"label" : "Client",
					"listable" : false,
					"searchable" : false,
					"group" : "pocustdetails"
				},
				{
					"type" : "text",
					"name" : "pono",
					"label" : "PO. No",
					"listable" : false,
					"searchable" : false,
					"group" : "podetails"
				},
				{
					"type" : "text",
					"name" : "address",
					"label" : "",
					"listable" : false,
					"searchable" : false,
					"group" : "pocustdetails"
				},
				{
					"type" : "date",
					"name" : "podate",
					"label" : "PO. Date",
					"listable" : false,
					"searchable" : false,
					"group" : "podetails"
				},
				{
					"type" : "date",
					"name" : "receivedDate",
					"label" : "Received Date",
					"listable" : false,
					"searchable" : false,
					"group" : "podetails"
				},
				{
					"type" : "text",
					"name" : "poTitle",
					"label" : "PO Title",
					"listable" : false,
					"searchable" : false,
					"group" : "pocustdetails"
				},
				{
					"type" : "date",
					"name" : "deliveryDate",
					"label" : "DeliveryDate",
					"listable" : false,
					"searchable" : false,
					"group" : "podetails"
				},
				{
					"type" : "select",
					"name" : "billingType",
					"label" : "Billing Type",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "Billing Type",
					"group" : "pocustinstructiondetails"
				},
				{
					"type" : "select",
					"name" : "billingCycle",
					"label" : "Billing Cycle",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "Billing Cycle",
					"group" : "pocustinstructiondetails"
				},
				{
					"type" : "select",
					"name" : "currency",
					"label" : "Currency",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"group" : "podetails"
				},
				{
					"type" : "checkbox",
					"name" : "checkbox",
					"label" : "SOW",
					"id" : "sow",
					"group" : "pocustdetails",
					"required" : true,
					"provider" : {
						"url" : "https://mocki.io/v1/e6d53dc0-3cab-4c21-a915-b2b9433ff945",
						"options" : [],
						"id" : "sow",
						"value" : "Yes"
					}
				}, {
					"type" : "text",
					"name" : "hsn/sac",
					"label" : "HSN/SAC",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"group" : "podetails"
				}, {
					"type" : "textarea",
					"name" : "billingAddress",
					"label" : "Billing Address",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"group" : "pocustdetails"
				}, {
					"type" : "textarea",
					"name" : "shippingAddress",
					"label" : "Shipping Address",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"group" : "podetails"
				}, {
					"type" : "list",
					"name" : "items",
					"label" : "",
					"editMode" : "inline",
					"group" : "poitemdetails",
					"fields" : [ {
						"type" : "textarea",
						"name" : "item",
						"label" : "Item",
						//"required": true,
						"placeHolder" : "",
						"showLabel" : false
					}, {
						"type" : "textarea",
						"name" : "description",
						"label" : "Description",
						"placeHolder" : "",
						"showLabel" : false,

					}, {
						"type" : "text",
						"name" : "qty",
						"label" : "Qty",
						//"required": true,
						"placeHolder" : "",
						"showLabel" : false
					}, {
						"type" : "text",
						"name" : "price",
						"label" : "Price",
						//"required": true,
						"placeHolder" : "",
						"showLabel" : false
					}, {
						"type" : "text",
						"name" : "amount",
						"label" : "Amount",
						//"required": true,
						"placeHolder" : "",
						"showLabel" : false
					}

					],
					"actions" : [ {
						"name" : "deleteRow",
						"type" : "link",
						"label" : "fa-minus-circle",
						"applyTo" : "row",
						"handler" : {
							"type" : "javascript",
							"func" : "deleteRow(event)",
							"method" : "post",
							"url" : "http://localhost:8082/api/v1/user"
						},
						"cssClass" : ""
					}, {
						"name" : "editRow",
						"type" : "link",
						"label" : "fa-pencil",
						"applyTo" : "row",
						"handler" : {
							"type" : "javascript",
							"func" : "editRow(event)",
							"method" : "post",
							"url" : "http://localhost:8082/api/v1/user"
						},
						"cssClass" : ""
					}, {
						"name" : "addRow",
						"type" : "link",
						"label" : "fa-plus-circle",
						"applyTo" : "list",
						"handler" : {
							"type" : "javascript",
							"func" : "addRow(event)",
							"method" : "post",
							"url" : "http://localhost:8082/api/v1/user"
						},
						"cssClass" : ""
					} ]
				}, {
					"type" : "textarea",
					"name" : "commentsorspecialInstructions",
					"label" : "Comments or Special Instructions",
					//"required": true,
					"placeHolder" : "",
					"showLabel" : false,
					"group" : "pocustinstructiondetails"
				}, {
					"type" : "textarea",
					"name" : "termsandconditions",
					"label" : "Terms and Conditions",
					//"required": true,
					"placeHolder" : "",
					"showLabel" : false,
					"group" : "pocustinstructiondetails"
				}, {
					"type" : "file",
					"name" : "chooseFile",
					"label" : "ChooseFile",
					"accept" : "image/png, image/jpeg",
					"group" : "pocustinstructiondetails"
				}, {
					"type" : "text",
					"name" : "subTotal",
					"label" : "SubTotal",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "tax",
					"label" : "Tax",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "Others",
					"label" : "Others",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "grandTotal",
					"label" : "Grand Total",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "advancepaid",
					"label" : "Advance Paid",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				}, {
					"type" : "text",
					"name" : "balancedue",
					"label" : "BalanceDue",
					//"required": true,
					"placeHolder" : "0.00",
					"showLabel" : false,
					"group" : "poamountdetails"
				} ],

		"actions" : [ {
			"name" : "save",
			"type" : "submit",
			"label" : "Save",
			"applyTo" : "form",
			"handler" : {
				"type" : "javascript",
				"func" : "submitForm(event)",
				"method" : "post",
				"url" : "http://localhost:9097/jet/pis/department"
			},
			"cssClass" : "btn-primary"
		}, {
			"name" : "cancel",
			"type" : "button",
			"label" : "Cancel",
			"applyTo" : "form",
			"cssClass" : "btn-secondary"
		} ],
		"dataProvider" : {
			"collection" : {
				"url" : ""
			},
			"selector" : {
				"url" : ""
			}
		}
	};
</script>
<%@include file="../theme/js_scripts.jsp"%>
<jsp:include page="../template/form-template.jsp">
	<jsp:param name="formContainerId" value="purchaseOrderFormContainer" />
	<jsp:param name="formId" value="purchaseOrder" />
	<jsp:param name="cancelPage" value="purchase_order_list" />
	<jsp:param name="successPage" value="purchase_order_list" />
</jsp:include>
<script>
	
</script>
</html>
