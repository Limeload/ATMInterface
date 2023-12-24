package com.example;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data

public class Contact {
    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String pin;
    private String account;

    public Contact(){}

    public Contact(Long id, String firstName, String lastName, String username, String pin, String account){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.pin = pin;
        this.account = account;
    }


}


