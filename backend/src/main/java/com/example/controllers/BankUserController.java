package com.example.controllers;

import com.example.models.BankUser;
import org.springframework.http.ResponseEntity;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.net.URISyntaxException;
import java.util.Collection;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BankUserController {
    private final BankUserRepository bankUserRepository;

    public BankUserController(BankUserRepository bankUserRepository) {
        this.bankUserRepository = bankUserRepository;
    }

    @GetMapping("/bankUsers")
    Collection<BankUser> bankUsers() {
        return (Collection<BankUser>) bankUserRepository.findAll();
    }

    @PostMapping("/bankUsers")
    ResponseEntity<BankUser> createBankUser(@Validated @RequestBody BankUser bankUser) throws URISyntaxException {
      BankUser result = bankUserRepository.save(bankUser);
      return ResponseEntity.ok().body(result);

    }
}


