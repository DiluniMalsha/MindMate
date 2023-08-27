package com.uwu.emora.service;

import com.uwu.emora.dto.scheduler.OneTimeSchedulerDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SchedulerService {
    void scheduleOnetime(OneTimeSchedulerDto dto, long childId);

    void sendOneTimeReminder(String reminderId);

    List<OneTimeSchedulerDto> getScheduledTasks(long childId);

    void editScheduledTask(OneTimeSchedulerDto dto, long childId);

    void deleteScheduledTask(String reminderId, long childId);

}
