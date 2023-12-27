package com.example.models;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
@Entity
@Data

public class Transaction {
    private @Id @GeneratedValue Long id;
    private String transaction_type;
    private double amount;
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn
    private Account account;

    public Transaction() {}

    public Transaction(String transaction_type, double amount, LocalDateTime date, Account account) {
        this.transaction_type = transaction_type;
        this.amount = amount;
        this.date = date;
        this.account = account;
    }
}
