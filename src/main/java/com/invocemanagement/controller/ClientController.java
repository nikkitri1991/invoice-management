package com.invocemanagement.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ClientController {
	
	@RequestMapping("/client_list")
	public String getAll() {
		System.out.println("client_list");
		return "client_list";
		
	}
	@RequestMapping("/client")
	public String add() {
		System.out.println("client");
		return "client";
		
	}
	
	@RequestMapping("/purchase_order_list")
	public String getAllPurchaseOrders() {
		System.out.println("purchase Orders");
		return "purchase_order_list";
		
	}
	
	@RequestMapping("/purchase_order")
	public String addNewPurchaseOrder() {
		System.out.println("New purchase Order");
		return "purchase_order";
		
	}
	
	@RequestMapping("/receive_payment")
	public String payments() {
		System.out.println("receive Payments");
		return "receive_payment";
		
	}
	
	@RequestMapping("/payments")
	public String paymentsList() {
		System.out.println("payment list");
		return "payments";

	} 
	@RequestMapping("/billing_cycle_list")
	public String billingCycleList() {
		System.out.println("billingCycleList");
		return "billing_cycle_list";

	} 
	
	@RequestMapping("/billing_cycle")
	public String billingCycle() {
		System.out.println("billingCycle");
		return "billing_cycle";

	} 
	
	@RequestMapping("/billing_type_list")
	public String billingTypeList() {
		System.out.println("billingCycleList");
		return "billing_type_list";

	} 
	
	@RequestMapping("/billing_type")
	public String billingType() {
		System.out.println("billingtype");
		return "billing_type";

	} 
	
	@RequestMapping("/currency_list")
	public String currencyList() {
		System.out.println("currencyList");
		return "currency_list";

	} 
	
	@RequestMapping("/currency")
	public String currency() {
		System.out.println("currency");
		return "currency";

	} 
	

}
