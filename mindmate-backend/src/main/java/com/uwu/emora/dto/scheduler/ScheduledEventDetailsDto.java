package com.uwu.emora.dto.scheduler;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ScheduledEventDetailsDto {
    private LocalDate date;
    private List<SingleScheduledEventDto> events;

    public void setEvent(SingleScheduledEventDto event) {
        if (events == null) events = new ArrayList<>();
        events.add(event);
    }
}
