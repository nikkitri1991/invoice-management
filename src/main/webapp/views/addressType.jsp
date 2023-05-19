<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="../js/form/address-type.js"></script>
<%@include file="../theme/cdn.jsp"%>

</head>

<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="addressTypeContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>
<script>
var id="<%=request.getParameter("id")!=null? request.getParameter("id"):""%>";
	$(document).ready(() => {
		var jetform=JetForm({"id":"addressType", "parentId":"addressTypeContainer", "form":addressType});
		jetform.setDataKey(id);
		jetform.render();
	});
</script>
 <jsp:include page="../template/jetform-template.jsp"/>
<%@include file="../theme/js_scripts.jsp" %>

</html>