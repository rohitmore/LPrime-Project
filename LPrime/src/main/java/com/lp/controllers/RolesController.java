package com.lp.controllers;

import com.lp.entities.Role;
import com.lp.models.ModelResponse;
import com.lp.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RolesController {

    private final RoleService roleService;

    @Autowired
    public RolesController(RoleService roleService) {
        this.roleService = roleService;
    }

    @RequestMapping(value = "/roles",  method = RequestMethod.GET)
    public List<Role> getRoles() {
        return roleService.getAllRoles();
    }

    @ExceptionHandler(Throwable.class)
    public ModelResponse handleException(Exception ex) {
        return new ModelResponse(false, ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
