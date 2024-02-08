package com.usermanager.usermanager.model;

import lombok.Data;

@Data
public class UserModel {
    private String id;
    private String username;
    private String email;
    private String password;
}
