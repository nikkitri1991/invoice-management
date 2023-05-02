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
	
	@RequestMapping("/payments")
	public String payments() {
		System.out.println("Payments");
		return "payments";
		
	}
	
	@RequestMapping("/receive_payment")
	public String receivePayment() {
		System.out.println("ReceivePayment");
		return "receive_payment";
		
	}	
	

}
