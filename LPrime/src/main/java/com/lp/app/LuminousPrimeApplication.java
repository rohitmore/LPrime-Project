package com.lp.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ComponentScan(basePackages = "com.lp")
@EnableJpaRepositories(basePackages = "com.lp")
@EntityScan(basePackages = "com.lp")
@SpringBootApplication
public class LuminousPrimeApplication {

    public static void main(String[] args) {
        SpringApplication.run(LuminousPrimeApplication.class, args);
    }

}
