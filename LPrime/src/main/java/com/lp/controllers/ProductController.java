package com.lp.controllers;

import com.lp.entities.Product;
import com.lp.models.ModelResponse;
import com.lp.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping(value = "/product")
    public ModelResponse add() {
        productService.add(new Product());
        return new ModelResponse(true, "", HttpStatus.OK);
    }

    @ExceptionHandler(Throwable.class)
    public ModelResponse handleException(Exception ex) {
        return new ModelResponse(false, ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
