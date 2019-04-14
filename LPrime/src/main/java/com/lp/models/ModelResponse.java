package com.lp.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
@NoArgsConstructor
public class ModelResponse {

    private boolean success;
    private String message;
    private HttpStatus status;

    public ModelResponse(boolean success, String message, HttpStatus status) {
        this.success = success;
        this.message = message;
        this.status = status;
    }

    public ModelResponse(boolean success, HttpStatus status) {
        this.success = success;
        this.status = status;
    }
}
