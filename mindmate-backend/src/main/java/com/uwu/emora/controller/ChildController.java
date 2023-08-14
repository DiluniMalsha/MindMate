package com.uwu.emora.controller;

import com.uwu.emora.service.ChildService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/child")
public class ChildController {

    private final ChildService childService;

    //http://localhost:8080/child/test
    @GetMapping(value = "/test")
    public ResponseEntity test() {
        return ResponseEntity.ok("Hello Test");
    }
}

//$2a$10$dDlzpYz52i/HkNy2Fr63L.ceUnQNfcPxExujGY3WdNe3sVaZjy6SS
