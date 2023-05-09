 <!DOCTYPE html>
<html>
<head>
<title>Billing Type List</title>
<%@include file="../theme/cdn.jsp" %>
<script type="text/javascript" src="../js/form/billing_type_list.js"></script>
</head>
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="billingTypeListContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>
<%@include file="../theme/js_scripts.jsp" %>
<jsp:include page="../template/jetform-template.jsp"/>


<script>
$(document).ready(() => {
	var jetList=JetList({"id":"billingType", "parentId":"billingTypeListContainer", "form":billingTypeListForm});
	jetList.render();
});
</script>
</html>