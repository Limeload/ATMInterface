package com.example.controllers;

import com.example.dto.LoginRequest;
import com.example.dto.LoginResponse;
import com.example.models.BankUser;
import com.example.repository.BankUserRepository;
import com.example.services.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SessionController {

    private final AuthService authService;
    private final BankUserRepository bankUserRepository;

    public SessionController(AuthService authService, BankUserRepository bankUserRepository) {
        this.authService = authService;
        this.bankUserRepository = bankUserRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        Optional<BankUser> userOpt = authService.findByUsername(req.getUsername());
        if (userOpt.isEmpty()) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");

        BankUser user = userOpt.get();
        if (!authService.checkPin(req.getPin(), user.getPin())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        user.setActiveSession(true);
        String token = authService.generateToken();
        user.setSessionToken(token);
        bankUserRepository.save(user);

        LoginResponse resp = new LoginResponse(user.getId(), user.getFirstName(), user.getLastName(), user.getUsername(), user.getAccount(), token);
        return ResponseEntity.ok(resp);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestBody LoginRequest req) {
        Optional<BankUser> userOpt = authService.findByUsername(req.getUsername());
        if (userOpt.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");

        BankUser user = userOpt.get();
        user.setActiveSession(false);
        user.setSessionToken(null);
        bankUserRepository.save(user);
        return ResponseEntity.ok("Logged out");
    }

    @GetMapping("/session/active")
    public ResponseEntity<?> getActiveSession() {
        Optional<BankUser> userOpt = bankUserRepository.findFirstByActiveSessionTrue();
    
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        
        BankUser user = userOpt.get();
        LoginResponse resp = new LoginResponse(
            user.getId(), 
            user.getFirstName(), 
            user.getLastName(), 
            user.getUsername(), 
            user.getAccount(), 
            user.getSessionToken()
        );
        return ResponseEntity.ok(resp);
}
}
