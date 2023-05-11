
<!DOCTYPE html>
<html>
<head>
<title>Receive Payment</title>
<%@include file="../theme/cdn.jsp"%>
<script type="text/javascript" src="../js/form/receive-payment.js"></script>

</head>
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="row">
				<div class="col-md-11">
					<div id="receivePaymentFormContainer" style="margin-top: 8%"></div>
				</div>
			</div>
			<div class="col-md-12" id="nameGroup"></div>
			    <div class="row" id="balance">
			    </div>
			<div class="row" id="payment"></div>
			<div class="row" id="transactions"></div>
		</div>
	</div>
</body>
<!-- 

<script>
	var form = {
		"id" : "receivepaymentform",
		"name":"",
		"title" : "ReceivePayment",
		"subtitle":"",
		"namespace" : "",
		"enctype" : "multipart/form-data",
		"fields" : [
				{
					"type" : "select",
					"name" : "client",
					"label" : "Client",
					"listable" : false,
					"searchable" : false,
					"group":"clientinvoicedetails"
				},
				{
					"type" : "select",
					"name" : "invoice",
					"label" : "Invoice",
					"listable" : false,
					"searchable" : false,
					"group":"clientinvoicedetails"
				},
				{
					"type" : "text",
					"name" : "payabletotal",
					"label" : "Payable Total",
					"listable" : false,
					"searchable" : false,
					"group":"receivepaymentdetails"
					
				},
				{
					"type" : "text",
					"name" : "amountpaid",
					"label" : "Amount Paid",
					"listable" : false,
					"searchable" : false,
					"group":"amountpaiddetails"
				},
				{
					"type" : "text",
					"name" : "balanceDue",
					"label" : "Balance Due",
					"listable" : false,
					"searchable" : false,
					"group":"receivepaymentdetails"
			
				},
				{
					"type" : "text",
					"name" : "amountreceived",
					"label" : "Amount Received",
					"listable" : false,
					"searchable" : false,
					"group":"receivepaymentdetails"
				},
				{
					"type" : "select",
					"name" : "paymentMode",
					"label" : "Payment Mode",
					"listable" : false,
					"searchable" : false,
					"group":"receivepaymentdetails"
				},
				{
					"type" : "date",
					"name" : "dateofpayment",
					"label" : "Date of Payment",
					"listable" : false,
					"searchable" : false,
					"placeHolder" : "",
					"group":"receivepaymentdetails"
				},
				{
					"type" : "textarea",
					"name" : "transactiondetails",
					"label" : "Transaction Details",
					"listable" : false,
					"searchable" : false,
					"group":"transactiondetails"
				}
			 ],

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

 -->


<script>
	$(document).ready(() => {
		var jetform=JetForm({"id":"receivePaymentForm", "parentId":"receivePaymentFormContainer", "form":receivePaymentForm});
		jetform.render();
	});
</script>
 <%@include file="../theme/js_scripts.jsp"%>
 <jsp:include page="../template/jetform-template.jsp"/>
</html>
