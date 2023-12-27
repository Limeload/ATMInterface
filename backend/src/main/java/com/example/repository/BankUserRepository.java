package com.example.repository;

import com.example.models.BankUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BankUserRepository extends CrudRepository<BankUser, Long> {
}
