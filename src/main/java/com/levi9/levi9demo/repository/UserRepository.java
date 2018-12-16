package com.levi9.levi9demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.levi9.levi9demo.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
