package com.example;

import org.springframework.data.repository.CrudRepository;

public interface ContactController extends CrudRepository<Contact, Long> {
}
