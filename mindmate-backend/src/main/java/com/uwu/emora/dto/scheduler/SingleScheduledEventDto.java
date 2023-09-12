package com.uwu.emora.dto.scheduler;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SingleScheduledEventDto {
    private String id;
    private String note;
    private LocalDateTime from;
    private LocalDateTime to;
    private LocalDateTime remindTime;
}
