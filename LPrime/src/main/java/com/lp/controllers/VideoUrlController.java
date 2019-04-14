package com.lp.controllers;

import com.lp.entities.VideoUrl;
import com.lp.models.ModelResponse;
import com.lp.services.VideoUrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VideoUrlController {

    private final VideoUrlService videoUrlService;

    @Autowired
    public VideoUrlController(VideoUrlService videoUrlService) {
        this.videoUrlService = videoUrlService;
    }

    @PostMapping(value = "/videoUrl")
    public ModelResponse add() {
        videoUrlService.add(new VideoUrl());
        return new ModelResponse(true, "", HttpStatus.OK);
    }

    @ExceptionHandler(Throwable.class)
    public ModelResponse handleException(Exception ex) {
        return new ModelResponse(false, ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
