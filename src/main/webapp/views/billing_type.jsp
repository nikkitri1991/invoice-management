 <!DOCTYPE html>
<html>
<head>
<title>Billing Type Form</title>
<%@include file="../theme/cdn.jsp" %>
<script type="text/javascript" src="../js/form/billing_type.js"></script>
</head>

<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="billingTypeFormContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>



<script>
	$(document).ready(() => {
		var jetform=JetForm({"id":"billingType", "parentId":"billingTypeFormContainer", "form":billingTypeForm});
		jetform.render();
	});
</script>
<jsp:include page="../template/jetform-template.jsp"/>
<%@include file="../theme/js_scripts.jsp" %>
</html> 