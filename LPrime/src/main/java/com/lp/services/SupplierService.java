package com.lp.services;

import com.lp.daos.SupplierRepository;
import com.lp.entities.ImageUrl;
import com.lp.entities.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupplierService {

    private final SupplierRepository supplierRepository;

    @Autowired
    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    public void add(Supplier supplier) {
        supplierRepository.save(supplier);
    }

}
