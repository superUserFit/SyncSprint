package com.usermanager.usermanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.usermanager.usermanager.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String>{
    
}
