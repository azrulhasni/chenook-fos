package com.azrul.smefinancing.search.repository;

import org.springframework.context.annotation.Primary;

import com.azrul.chenook.search.repository.ReferenceSearchRepository;
import com.azrul.smefinancing.domain.Location;

@Primary
public interface LocationSearchRepository extends ReferenceSearchRepository<Location>{ 
    
}