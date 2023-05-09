 <!DOCTYPE html>
<html>
<head>
<title>Billing Cycle List</title>
<%@include file="../theme/cdn.jsp" %>
<script type="text/javascript" src="../js/form/billing_cycle_list.js"></script>
</head>
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="billingCycleListContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>
<%@include file="../theme/js_scripts.jsp" %>
<jsp:include page="../template/jetform-template.jsp"/>


<script>
$(document).ready(() => {
	var jetList=JetList({"id":"billingCycle", "parentId":"billingCycleListContainer", "form":billingCycleListForm});
	jetList.render();
});
</script>
</html>