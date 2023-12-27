package com.example.repository;

import com.example.models.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AccountRepository extends CrudRepository<Account, Long> {
}
