package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Loader implements CommandLineRunner {

    private final ContactController repository;
    @Autowired
    public Loader(ContactController repository){
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save( new Contact(1L,"Shraddha", "Rao", "engineer", "2344", "4566777888"));
    }
}
