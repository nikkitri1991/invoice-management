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
						<h3>AddressType Form</h3>
						<form id="addressType"></form>
					</div>
				</div>
			</div>
		</div>
	</div>

<jsp:include page="../template/jetform-template.jsp" />
<script>
	$(document).ready(() => {
		var jetform=JetForm({"id":"addressType", "parentId":"addressTypeContainer", "form":addressType});
		jetform.render();
	});
</script>
 <%@include file="../theme/js_scripts.jsp"%>
</body>
</html>