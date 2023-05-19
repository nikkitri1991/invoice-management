<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp"%>
<script type="text/javascript" src="../js/form/new_invoice.js"></script>
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
				<div id="invoiceFormContainer" style="margin-top: 8%"></div>
				</div>
			</div>
					<div class="col-md-12">
					<div class="row">
						<div  id="invoice">
						</div>
					</div>
					</div>
					<div class="col-md-12">
					<div class="row">
						<div id="date">
						</div>
				  </div>
				  </div>
				  <div class="col-md-12">
				  <div class="row">	
						<div id="termssubtotal">
						</div>
					</div>
					</div>
		</div>
	</div>
</body>
<script>
var id="<%=request.getParameter("id")!=null? request.getParameter("id"):""%>";
	$(document).ready(() => {
		var jetform=JetForm({"id":"invoiceForm", "parentId":"invoiceFormContainer", "form":invoiceForm});
		jetform.setDataKey(id);
		jetform.render();
	});
</script>
<%@include file="../theme/js_scripts.jsp"%>
<jsp:include page="../template/jetform-template.jsp"/>
</html>