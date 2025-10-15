package com.panhasak.ecommerce.entity;

import java.time.LocalDateTime;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "user")
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String username;
    private String email;
    private String password;
    private String fullName;
    private String phone;
    private String address;
    
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> role;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
}
