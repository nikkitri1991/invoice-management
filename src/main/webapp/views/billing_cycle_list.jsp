 <!DOCTYPE html>
<html>
<head>
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
<script>
$(document).ready(() => {
	var jetList=JetList({"id":"billingCycle", "parentId":"billingCycleListContainer", "form":billingCycleListForm});
	jetList.render();
});
</script>
<jsp:include page="../template/jetform-template.jsp"/>
<%@include file="../theme/js_scripts.jsp" %>
</html>