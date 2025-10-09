package com.example.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import lombok.Data;

@Entity
@Data
public class Account {
    private @Id @GeneratedValue Long id;
    @Column(unique = true)
    private String account_number;

    private double balance;

    // Inverse side of the one-to-one relationship declared in BankUser
    @OneToOne(mappedBy = "account")
    @JsonBackReference
    private BankUser owner;

    public Account(){}

    public Account(String account_number, double balance, BankUser owner){
        this.account_number = account_number;
        this.balance = balance;
        this.owner = owner;
    }
}
