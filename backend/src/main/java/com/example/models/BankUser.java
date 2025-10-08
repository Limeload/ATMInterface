package com.example.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class BankUser {
    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;

    @Column(unique = true)
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String pin;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id")
    @JsonManagedReference
    private Account account;

    private boolean activeSession;

    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private String sessionToken;

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