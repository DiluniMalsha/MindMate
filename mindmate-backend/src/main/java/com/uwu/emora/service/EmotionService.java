package com.uwu.emora.service;

import com.uwu.emora.dto.emotion.ChildEmotionDto;
import org.springframework.stereotype.Service;

@Service
public interface EmotionService {
    void saveChildEmotion(long childId, long emotionId);

    ChildEmotionDto getLatestEmotion();
}
