package com.lp.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@Entity
@Table(name = "supplier")
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "landline_number")
    @NotNull
    private String landLineNumber;

    @Column(name = "address")
    @NotNull
    private Address address;

    public static Supplier createNew() {
        return new Supplier();
    }
}
