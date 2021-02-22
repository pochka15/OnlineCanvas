package com.example.itra5.domain.fabric;

import lombok.Data;

import java.util.List;

@Data
public class Canvas {
    private String version;
    private List<Rectangle> objects;
}
