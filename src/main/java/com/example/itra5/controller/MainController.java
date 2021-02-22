package com.example.itra5.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
public class MainController {
    @MessageMapping("/add")
    @SendTo("/topic/add")
    public String add(@RequestBody String body) {
        return body;
    }

    @MessageMapping("/remove")
    @SendTo("/topic/remove")
    public String remove(@RequestBody String body) {
        return body;
    }
}