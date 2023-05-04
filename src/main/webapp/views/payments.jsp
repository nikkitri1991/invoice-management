<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp" %>
<script type="text/javascript" src="../js/form/payment-list.js"></script>
</head>

<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="paymentListFormContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>
<!-- 
<script>
	var form = {
		"id": "payments",
		"title" : "Payments",
		"subTitle" : "",
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
		"actions": [
			{
				"name": "add",
				"type": "button",
				"label": "New Payment",
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
 --><%@include file="../theme/js_scripts.jsp" %>
<jsp:include page="../template/jetform-template.jsp"/>

<script>
$(document).ready(() => {
	var jetList=JetList({"id":"paymentListForm", "parentId":"paymentListFormContainer", "form":paymentListForm});
	jetList.render();
});
</script>
</html>

