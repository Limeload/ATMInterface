package com.example.controllers;

import com.example.models.Account;
import com.example.models.BankUser;
import com.example.models.Transaction;
import com.example.repository.AccountRepository;
import com.example.repository.BankUserRepository;
import com.example.repository.TransactionRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ApplicationController {

    private final BankUserRepository bankUserRepository;
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    public ApplicationController(BankUserRepository bankUserRepository, AccountRepository accountRepository, TransactionRepository transactionRepository) {
        this.bankUserRepository = bankUserRepository;
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    // BankUser endpoints
    @GetMapping("/bankUsers")
    Collection<BankUser> bankUsers() {
        return (Collection<BankUser>) bankUserRepository.findAll();
    }

    @PostMapping("/bankUsers")
    ResponseEntity<BankUser> createBankUser(@Validated @RequestBody BankUser bankUser) throws URISyntaxException {
        BankUser result = bankUserRepository.save(bankUser);
        return ResponseEntity.ok().body(result);
    }

    // Account endpoints
    @GetMapping("/accounts")
    Collection<Account> accounts() {
        return (Collection<Account>) accountRepository.findAll();
    }

    @PostMapping("/accounts")
    ResponseEntity<Account> createAccount(@Validated @RequestBody Account account) throws URISyntaxException {
        Account result = accountRepository.save(account);
        return ResponseEntity.ok().body(result);
    }

    // Transaction endpoints
    @GetMapping("/transactions")
    Collection<Transaction> transactions() {
        return (Collection<Transaction>) transactionRepository.findAll();
    }

    @PostMapping("/transactions")
    ResponseEntity<Transaction> createTransaction(@Validated @RequestBody Transaction transaction) throws URISyntaxException {
        Transaction result = transactionRepository.save(transaction);
        return ResponseEntity.ok().body(result);
    }
}
