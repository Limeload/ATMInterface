package com.example.models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data

public class BankUser {
    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String pin;
    private String account;

    public BankUser(){}

    public BankUser(Long id, String firstName, String lastName, String username, String pin, String account){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.pin = pin;
        this.account = account;
    }


}


