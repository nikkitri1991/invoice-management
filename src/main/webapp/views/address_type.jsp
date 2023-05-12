<!DOCTYPE html>
<html>
<head>

<%@include file="../theme/cdn.jsp"%>
<script type="text/javascript" src="../js/form/address-type.js"></script>
</head>

<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container m-2">
				<div class="row">
					<div class="col" id="addressTypeContainer" style="margin-top: 8%">
						<form id="addressType"></form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script>
var id="<%=request.getParameter("id")!=null? request.getParameter("id"):""%>";
console.log("id"+id);
	$(document).ready(() => {
		var jetform=JetForm({"id":"addressType", "parentId":"addressTypeContainer", "form":addressType});
		jetform.setDataKey(id);
		jetform.render();
	});
</script>

<jsp:include page="../template/jetform-template.jsp" />
 <%@include file="../theme/js_scripts.jsp"%>
 

</html>