package com.uwu.emora.dto.dataset;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class DataSetResponseDto {

    private LocalDateTime dateTime;
    private String emotion;
    private String response;
    private String afterEmotion;
}
