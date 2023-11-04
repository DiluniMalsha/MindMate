package com.uwu.emora.dto.emotion;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ChildEmotionDto {
    private long emotionId;
    private LocalDateTime dateTime;
}
