package com.lp.controllers;

import com.lp.entities.User;
import com.lp.models.ModelResponse;
import com.lp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(name = "/users", method = RequestMethod.GET)
    public List<User> getUsers() {
        return userService.getAllUser();
    }

    @ExceptionHandler(Throwable.class)
    public ModelResponse handleException(Exception ex) {
        return new ModelResponse(false, ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
