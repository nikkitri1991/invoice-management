
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
<script>
var id="<%=request.getParameter("id")!=null? request.getParameter("id"):""%>";
	$(document).ready(() => {
		var jetform=JetForm({"id":"receivePaymentForm", "parentId":"receivePaymentFormContainer", "form":receivePaymentForm});
		jetform.setDataKey(id);
		jetform.render();
	});
</script>
 <%@include file="../theme/js_scripts.jsp"%>
 <jsp:include page="../template/jetform-template.jsp"/>
</html>
