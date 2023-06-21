<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp"%>
<script type="text/javascript" src="../js/form/tax.js"></script>
</head>
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9" >
		<div class="col-md-11">
			<div class="container">
				<div id="taxContainer" style="margin-top: 8%"></div>
			</div>
			</div>
		</div>
	</div>
	
	<!-- <div class="container">
		<div class="box"></div>
	
	</div>
	<p>The onload method in JavaScript is associated with executing a JavaScript function once a page has loaded completely. This onload method is often used in the body, and a function is passed to it.
	 This function is executed immediately after an object is loaded.</p>
	 
	 <p>The＄(document).ready() is a jQuery method that executes a block of code when the DOM has been loaded.</p>
 -->
</body>

<script>
var id="<%=request.getParameter("id")!=null? request.getParameter("id"):""%>";
console.log("id"+id);
	$(document).ready(() => {
		var jetform=JetForm({"id":"taxForm", "parentId":"taxContainer", "form":taxForm});
		jetform.setDataKey(id);
		jetform.render();
	});
</script>

<jsp:include page="../template/jetform-template.jsp"/>
<%@include file="../theme/js_scripts.jsp"%> 
</html>