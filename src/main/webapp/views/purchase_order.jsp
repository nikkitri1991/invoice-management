
<!DOCTYPE html>
<html>
<head>
<title>PurchaseOrder Form</title>
<%@include file="../theme/cdn.jsp"%>
<script type="text/javascript" src="../js/form/purchase-order.js"></script>
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
					<div id="purchaseOrderFormContainer" style="margin-top: 8%"></div>
				</div>
			</div>
			<div class="col-md-12">
				<div class="row">
					<div id="nameGroup"></div>
				</div>
			</div>
			<div class="col-md-12">
				<div class="row">
					<div id="clientPurchaseOrderItem"></div>
				</div>
				<div class="row">
					<div id="instructions1"></div>
				</div>

				<div class="row">
					<div id="amount1"></div>
				</div>
			</div>
		</div>
	</div>

</body>
<script>
var id="<%=request.getParameter("id")!=null? request.getParameter("id"):""%>";
	$(document).ready(() => {
		var jetform=JetForm({"id":"purchaseOrder", "parentId":"purchaseOrderFormContainer", "form":purchaseOrderForm});
		jetform.setDataKey(id);
		jetform.render();
	});
</script>
<%@include file="../theme/js_scripts.jsp"%>
<jsp:include page="../template/jetform-template.jsp"/>
</html>