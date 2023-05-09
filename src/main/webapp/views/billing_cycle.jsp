 <!DOCTYPE html>
<html>
<head>
<title>Billing Cycle Form</title>

<script type="text/javascript" src="../js/form/billing_cycle.js"></script>
<%@include file="../theme/cdn.jsp" %>
</head>

<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="billingCycleFormContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>
 <%@include file="../theme/js_scripts.jsp" %> 
<jsp:include page="../template/jetform-template.jsp"/>

<script>
	$(document).ready(() => {
		var jetform=JetForm({"id":"billingCycle", "parentId":"billingCycleFormContainer", "form":billingTypeForm});
		jetform.render();
	});
</script>
</html> 