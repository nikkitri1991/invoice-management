<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp"%>
<script type="text/javascript" src="../js/form/tax.js"></script>
</head>
<!-- body  -->
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9" >
			<div class="container">
				<div id="taxContainer" style="margin-top: 8%"></div>
			</div>
	
		</div>
	</div>
</body>

<script>
	$(document).ready(() => {
		var jetList=JetList({"id":"taxForm", "parentId":"taxContainer", "form":taxForm});
		jetList.render();
	});
</script>

<jsp:include page="../template/jetform-template.jsp"/>
<%@include file="../theme/js_scripts.jsp"%>
</html>