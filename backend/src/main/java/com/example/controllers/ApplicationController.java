package com.example.controllers;

import com.example.models.Account;
import com.example.models.BankUser;
import com.example.models.Transaction;
import com.example.repository.AccountRepository;
import com.example.repository.BankUserRepository;
import com.example.repository.TransactionRepository;
import com.example.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ApplicationController {

    private final BankUserRepository bankUserRepository;
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;
    private final AuthService authService;
    
    public ApplicationController(BankUserRepository bankUserRepository, 
                                AccountRepository accountRepository, 
                                TransactionRepository transactionRepository, 
                                AuthService authService) {
        this.bankUserRepository = bankUserRepository;
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
        this.authService = authService;
    }

    // BankUser endpoints
    @GetMapping("/bankUsers")
    Collection<BankUser> bankUsers() {
        return (Collection<BankUser>) bankUserRepository.findAll();
    }

    @PostMapping("/bankUsers")
    ResponseEntity<BankUser> createBankUser(@Validated @RequestBody BankUser bankUser) {
        // Hash pin before saving
        if (bankUser.getPin() != null) {
            bankUser.setPin(authService.hashPin(bankUser.getPin()));
        }

        // If account is present, set bidirectional relationship
        if (bankUser.getAccount() != null) {
            bankUser.getAccount().setOwner(bankUser);
        }

        // Save bankUser - cascade will automatically save the account
        BankUser result = bankUserRepository.save(bankUser);
        return ResponseEntity.ok(result);
    }

    // Account endpoints
    @GetMapping("/accounts")
    Collection<Account> accounts() {
        return (Collection<Account>) accountRepository.findAll();
    }

    @PostMapping("/accounts")
    ResponseEntity<Account> createAccount(@Validated @RequestBody Account account) {
        Account result = accountRepository.save(account);
        return ResponseEntity.ok(result);
    }

    // Transaction endpoints
    @GetMapping("/transactions")
    Collection<Transaction> transactions() {
        return (Collection<Transaction>) transactionRepository.findAll();
    }

    @PostMapping("/transactions")
    ResponseEntity<Transaction> createTransaction(@Validated @RequestBody Transaction transaction) {
        Transaction result = transactionRepository.save(transaction);
        return ResponseEntity.ok(result);
    }
}