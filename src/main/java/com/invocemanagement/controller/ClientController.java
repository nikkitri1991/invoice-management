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
	

}
