package com.example;


import com.example.models.Account;
import com.example.models.BankUser;
import com.example.models.Transaction;
import com.example.repository.AccountRepository;
import com.example.repository.BankUserRepository;
import com.example.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class ApplicationLoader implements CommandLineRunner {

    private final BankUserRepository bankUserRepository;
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    @Autowired
    public ApplicationLoader(
            BankUserRepository bankUserRepository,
            AccountRepository accountRepository,
            TransactionRepository transactionRepository) {
        this.bankUserRepository = bankUserRepository;
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        // Load Account
        Account account = new Account("4566777888", 1000.0, null);
        accountRepository.save(account);

        // Load BankUser
        BankUser bankUser = new BankUser(1L,"Shraddha", "Rao", "engineer", "2344", account, true);
        account.setOwner(bankUser);
        bankUserRepository.save(bankUser);

        // Load Transaction
        Transaction transaction = new Transaction("DEPOSIT", 500.0, LocalDateTime.now(), account);
        transactionRepository.save(transaction);
    }
}