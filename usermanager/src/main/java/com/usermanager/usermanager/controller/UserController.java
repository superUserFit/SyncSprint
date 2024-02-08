package com.usermanager.usermanager.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usermanager.usermanager.service.UserService;

@RestController
@RequestMapping("/api/user/")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    public User Signup(@RequestBody User user) {}
}
