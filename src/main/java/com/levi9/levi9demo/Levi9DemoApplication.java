package com.levi9.levi9demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class Levi9DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(Levi9DemoApplication.class, args);
	}

}

