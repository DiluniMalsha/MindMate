package com.uwu.emora.controller;

import com.uwu.emora.dto.CommonResponse;
import com.uwu.emora.dto.emotion.ChildEmotionDto;
import com.uwu.emora.service.EmotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "")
@CrossOrigin
public class EmotionController {

    private final EmotionService emotionService;

    @PostMapping(value = "/emotion")
    public ResponseEntity saveChildEmotion(@RequestBody ChildEmotionDto data) {
        emotionService.saveChildEmotion(1, data.getEmotionId());
        return ResponseEntity.ok(new CommonResponse<>(true, "Child Emotion Details Saved Successfully"));
    }

    @GetMapping(value = "/user/emotion")
    public ResponseEntity updateChild() {
        ChildEmotionDto latestEmotion = emotionService.getLatestEmotion();
        return ResponseEntity.ok(new CommonResponse<>(true, latestEmotion));
    }
}
