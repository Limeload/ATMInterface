package com.example.rest;

import com.example.controllers.BankUserRepository;
import com.example.models.BankUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BankUserLoader implements CommandLineRunner {

    private final BankUserRepository repository;
    @Autowired
    public BankUserLoader(BankUserRepository repository){
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save( new BankUser(1L,"Shraddha", "Rao", "engineer", "2344", "4566777888"));
    }
}
