package com.levi9.levi9demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.levi9.levi9demo.model.User;
import com.levi9.levi9demo.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@PostMapping("/users")
	public User insertUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@PutMapping("/users")
	public User updateUser(@RequestBody User user) {
		if(user.getId()!=null)
			return userRepository.save(user);
		else
			return null;
	}
	
	@DeleteMapping("/users/{id}")
	public boolean deleteNote(@PathVariable(value = "id") Integer id){
		try {
			userRepository.deleteById(id);
			return true;
		}catch(Exception e) {
			System.err.println(e);
			return false;
		}
	}
	
}
