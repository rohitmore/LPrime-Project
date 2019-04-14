package com.lp.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "User", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")}
)
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "account_status")
    private Boolean accountStatus;

    @Column(name = "email")
    private String email;

    @OneToMany
    private List<Address> addressList;

    public static User createNew() {
        return new User();
    }

}
