<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@include file="left-nav-json.jsp" %> 
<div class="deznav">
            <div class="deznav-scroll mm-active">
				<ul class="metismenu mm-show" id="menu">
					<li class="menu-title">${company}</li>
					<li class="mm-active"><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
						<div class="menu-icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M7.5 18.3333V10H12.5V18.3333" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>	
						<span class="nav-text">${dash}</span>
						</a>
						<ul aria-expanded="false" class="mm-collapse mm-show left" style="">
							<li class="mm-active"><a href="./index.html" class="mm-active">${dashL}</a></li>
							<li><a href="./index-2.html">${dashD}</a></li>
						</ul>
					</li>
					<li><a href="employee" class="" aria-expanded="false">
						<div class="menu-icon">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>	
						
					
						
				<span class="nav-text">${emp}</span> <!-- display the value in the JSP code -->
						</a>
					</li>
					
					
				

					<!-- Invoice Management  -->
					<li class="mm-active"><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
						<div class="menu-icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M7.5 18.3333V10H12.5V18.3333" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>	
						<span class="nav-text">Invoice Management</span>
						</a>
						<ul aria-expanded="false" class="mm-collapse mm-show left" style="">
							<li class="mm-active"><a href="client_list" class="mm-active">Client</a></li>
							<li class="mm-active"><a href="purchase_order_list" class="mm-active">purchaseOrders</a></li>
							<li class="mm-active"><a href="invoice_list" class="mm-active">Invoices</a></li>
							<li class="mm-active"><a href="payments" class="mm-active">Payments</a></li>
							
								
							
						</ul>
					</li>
					
					<!--  configuration  -->
					<li class="mm-active"><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
						<div class="menu-icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M7.5 18.3333V10H12.5V18.3333" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>	
						<span class="nav-text">Configuration</span>
						</a>
						<ul aria-expanded="false" class="mm-collapse mm-show left" style="">
							<li class="mm-active"><a href="billing_type_list" class="mm-active">BillingType</a></li>
							<li class="mm-active"><a href="billing_cycle_list" class="mm-active">BillyingCycle</a></li>
							<li class="mm-active"><a href="address_type_list" class="mm-active">AddressType</a></li>
							<li class="mm-active"><a href="company-type-list" class="mm-active">CompanyType</a></li>
							<li class="mm-active"><a href="currency_list" class="mm-active">Currency</a></li>
							<li class="mm-active"><a href="tax_list" class="mm-active">Tax</a></li>
							<li class="mm-active"><a href="payment_mode_list" class="mm-active">PaymentMode</a></li>
							
						</ul>
					</li>
					
					
					
					
			</div>
        </div> 
     


