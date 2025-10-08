package com.example.services;

import com.example.models.BankUser;
import com.example.repository.BankUserRepository;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class AuthService {

    private final BankUserRepository bankUserRepository;

    public AuthService(BankUserRepository bankUserRepository) {
        this.bankUserRepository = bankUserRepository;
    }

    public String hashPin(String plainPin) {
        return BCrypt.hashpw(plainPin, BCrypt.gensalt(10));
    }

    public boolean checkPin(String plainPin, String hashed) {
        if (plainPin == null || hashed == null) return false;
        return BCrypt.checkpw(plainPin, hashed);
    }

    public String generateToken() {
        return UUID.randomUUID().toString();
    }

    public Optional<BankUser> findByUsername(String username) {
        return bankUserRepository.findByUsername(username);
    }
}
