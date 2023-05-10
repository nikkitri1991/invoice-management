
<!DOCTYPE html>
<html>
<head>
<%@include file="../theme/cdn.jsp" %>
</head>
<!-- body  -->
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div id="interviewFormContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>
</body>

<!-- json  -->

<script>
var form = {
		"id": "interviewForm",
		"title" : "Interview Form",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [
			{
				"type": "select",
				"name": "candidateId",
				"label": "Candidate Name",
				"required": true,
				"provider": {
					"url": "http://localhost:8082/api/v1/city/20600",
					"value": "id",
					"label": "name",
					"params":[
						{"name":"startId", "value":"#state"},
						{"name":"deleted", "value":"0"}
					]

				}
			},
			

			{
				"type": "select",
				"name": "interviewerId",
				"label": "Interviewer Name",
				"required": true,
				"provider": {
					"url": "http://localhost:9097/jet/pis/employee",
					"value": "id",
					"label": "name",
					"params":[
						{"name":"startId", "value":"#state"},
						{"name":"deleted", "value":"0"}
					]

				}
			},
			{
				"type": "select",
				"name": "interviewMode",
				"label": "Interview Mode",
				"required": true,
				"provider": {
					"url": "https://mocki.io/v1/85a3efe4-fb1e-4e60-8c59-2ffead97bdef",
					"value": "id",
					"label": "name",
					"params":[
						{"name":"startId", "value":"#state"},
						{"name":"deleted", "value":"0"}
					]

				}
			},

			{
				"type": "date",
				"name": "interviewDate",
				"label": "InterViewDate",
				"required": false
			},
		   {
				"type": "group",
				"name": "nameGroup",
				"label": "name",
				"cols": 2,
				"fields": [

					{
						"type": "time",
						"name": "startTime",
						"label": "Start Time",
						"required": false
				    	}, {
						"type": "time",
						"name": "endTime",
						"label": "End Time",
						"required": true,
						"placeHolder": "End Time"
					}
					
					]
			}, 
 	
			{
				"type": "text",
				"name": "remarks",
				"label": "Remarks",
				"required": false
			}, 
			
			{
				"type": "text",
				"name": "result",
				"label": "Result",
				"required": false
			}
			
				],
		"actions": [{
				"name": "save",
				"type": "submit",
				"label": "Save",
				"applyTo": "form",
				"handler": {
					"type": "javascript",
					"func": "submitForm(event)",
					"method": "post",
					"url": "http://localhost:8082/api/v1/user"
				},
				"cssClass": "btn-primary"
			}, {
				"name": "cancel",
				"type": "button",
				"label": "Cancel",
				"applyTo": "form",
				"cssClass": "btn-secondary"
			},
			{
				"name": "add",
				"type": "button",
				"label": "Add Interview",
				"applyTo": "list",
				"cssClass": "btn-danger"
			}
		],
		"dataProvider":{
			"collection":{"url":""},
			"selector":{"url":""}
		}
	};
</script>
<%@include file="../theme/js_scripts.jsp" %>
<jsp:include page="../template/form-template.jsp">
	<jsp:param name="formContainerId" value="interviewFormContainer" />
	<jsp:param name="formId" value="interviewForm" />
	<jsp:param name="cancelPage" value="interview_list" />
	<jsp:param name="successPage" value="interview_list" />
</jsp:include>
<script>

</script>
</html>

