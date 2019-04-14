package com.lp.controllers;

import com.lp.entities.ImageUrl;
import com.lp.models.ModelResponse;
import com.lp.services.ImageUrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageUrlController {
    private final ImageUrlService imageUrlService;

    @Autowired
    public ImageUrlController(ImageUrlService imageUrlService) {
        this.imageUrlService = imageUrlService;
    }

    @PostMapping(value = "/imageUrl")
    public ModelResponse add() {
        imageUrlService.add(new ImageUrl());
        return new ModelResponse(true, "", HttpStatus.OK);
    }

    @ExceptionHandler(Throwable.class)
    public ModelResponse handleException(Exception ex) {
        return new ModelResponse(false, ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
