<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp"%>
<script type="text/javascript" src="../js/form/client.js"></script>
<style type="text/css">
.border {
	margin: 1rem;
	padding: 1rem
}
</style>
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
					<div id="clientFormContainer" style="margin-top: 8%">
						<h3>New Client</h3>
						<form id="clientForm">
							<div class="border">
								<div class="row" id="clientFields"></div>
							</div>
							<div class="border">
								<h3>Address</h3>
								<div class="row" id="address"></div>
							</div>
							<div class="border">
								<h3>Contact</h3>
								<div class="row" id="contact"></div>
							</div>
							<div class="border">
								<h3>Taxes</h3>
								<div class="row" id="taxes"></div>
							</div>
							<div class="border">
								<h3>Document</h3>
								<div class="row" id="document"></div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

	</div>
</body>
<script>

var id="<%=request.getParameter("id") != null ? request.getParameter("id") : ""%>";
console.log("id"+id);
	$(document).ready(() => {
		var jetform=JetForm({"id":"clientForm", "parentId":"clientFormContainer", "form":clientForm});
		jetform.setDataKey(id);
		jetform.render();
	});
</script>

<%@include file="../theme/js_scripts.jsp"%>
<jsp:include page="../template/jetform-template.jsp" />
</html>