package com.example.dto;

import com.example.models.Account;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private Account account;
    private String sessionToken;
}
