package com.uwu.emora.service.impl;

import com.uwu.emora.dto.dataset.DataSetRequestDto;
import com.uwu.emora.dto.dataset.DataSetResponseDto;
import com.uwu.emora.entity.ChildEmotion;
import com.uwu.emora.entity.Emotion;
import com.uwu.emora.entity.Response;
import com.uwu.emora.repository.ChildEmotionRepository;
import com.uwu.emora.service.DataSetService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DataSetServiceImpl implements DataSetService {

    private final ChildEmotionRepository childEmotionRepository;

    @Override
    public List<DataSetResponseDto> generateDataSet(DataSetRequestDto dto) {
        List<ChildEmotion> childEmotions = childEmotionRepository.findChildEmotionsByDateTimeBetweenAndResponseIsNotNull(dto.getStartDateTime(), dto.getEndDateTime());
        return childEmotions.stream().map(c -> {
            Emotion emotion = c.getEmotion();
            Response response = c.getResponse();
            ChildEmotion afterEmotion = childEmotionRepository.findTopByDateTimeAfterOrderByDateTimeAsc(c.getDateTime());
            return DataSetResponseDto.builder()
                    .dateTime(c.getDateTime())
                    .emotion(emotion.getName())
                    .response(String.valueOf(response.getResponseType()))
                    .afterEmotion(afterEmotion.getEmotion().getName())
                    .build();
        }).collect(Collectors.toList());
    }
}
