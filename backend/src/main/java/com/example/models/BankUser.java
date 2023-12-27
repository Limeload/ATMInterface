package com.example.models;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class BankUser {
    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;

    @Column(unique = true)
    private String username;
    private String pin;

    @OneToOne @JoinColumn
    private Account account;

    private boolean activeSession;

    public BankUser() {}

    public BankUser(Long id, String firstName, String lastName, String username, String pin, Account account, boolean activeSession){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.pin = pin;
        this.account = account;
        this.activeSession = activeSession;
    }

}


