 <!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp" %>
<script type="text/javascript" src="../js/form/payment_mode_list.js"></script>
</head>
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="paymentModeListContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>
<script>
var id="<%=request.getParameter("id")!=null? request.getParameter("id"):""%>";
$(document).ready(() => {	
	var jetList=JetList({"id":"paymentModeList", "parentId":"paymentModeListContainer", "form":paymentModeListForm});
	jetList.setDataKey(id);
	jetList.render();
});
</script>
<jsp:include page="../template/jetform-template.jsp"/>
<%@include file="../theme/js_scripts.jsp" %>
</html>