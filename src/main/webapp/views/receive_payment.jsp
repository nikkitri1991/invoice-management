
<!DOCTYPE html>
<html>
<head>
<title>Receive Payment</title>
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
			<div class ="container">
			<div id="receivePaymentFormContainer" style="margin-top: 8%"><h2>ReceivePayment</h2></div>
			</div>
      <div class ="container">
        	 <form id="receivepaymentform">
			<div class="container">
					<div class="row">
						<div class="col-md-12" id="clientinvoicedetails"></div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-6" id="receivepaymentdetails">
							<!-- <div class="row">
										<div class="col-md-6" id="billingType"></div>
										<div class="col-md-6" id="billingCycle"></div>
									</div> -->
						</div>
						<div class="col-md-6" id="amountpaiddetails"></div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-12" id="transactiondetails"></div>
					</div>
				</div>
			
			</form>	
		</div>
		</div>
	</div>
</body>


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
<%@include file="../theme/js_scripts.jsp"%>
<jsp:include page="../template/form-template.jsp">
	<jsp:param name="formContainerId" value="receivePaymentFormContainer" />
	<jsp:param name="formId" value="receivepaymentform" />
	<jsp:param name="cancelPage" value="payments" />
	<jsp:param name="successPage" value="payments" />
</jsp:include>
<script>
	
</script>
</html>
