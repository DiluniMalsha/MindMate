package com.uwu.emora.service.impl;

import com.uwu.emora.dto.emotion.ChildEmotionDto;
import com.uwu.emora.entity.Child;
import com.uwu.emora.entity.ChildEmotion;
import com.uwu.emora.entity.Emotion;
import com.uwu.emora.repository.ChildEmotionRepository;
import com.uwu.emora.service.EmotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;

@Service
@RequiredArgsConstructor
public class EmotionServiceImpl implements EmotionService {

    private final ChildEmotionRepository childEmotionRepository;

    @Override
    public void saveChildEmotion(long childId, long emotionId) {

        Emotion emotion = new Emotion();
        emotion.setId(emotionId);

        Child child = new Child();
        child.setId(childId);

        ChildEmotion childEmotion = new ChildEmotion();
        childEmotion.setEmotion(emotion);
        childEmotion.setChild(child);

        childEmotionRepository.save(childEmotion);
    }

    @Override
    public ChildEmotionDto getLatestEmotion() {

        ChildEmotion emotion = childEmotionRepository.findTopByChild_IdOrderByDateTimeDesc(1);
        return new ChildEmotionDto(emotion.getEmotion().getId(), getDateTimeByZone(emotion.getDateTime()));
    }

    public static LocalDateTime getDateTimeByZone(LocalDateTime dateTime) {
        ZoneId oldZone = ZoneId.of("GMT");
        ZoneId newZone = ZoneId.of("Asia/Colombo");
        return dateTime.atZone(oldZone).withZoneSameInstant(newZone).toLocalDateTime();
    }

}
