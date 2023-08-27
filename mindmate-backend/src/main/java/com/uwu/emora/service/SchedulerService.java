package com.uwu.emora.service;

import com.uwu.emora.dto.scheduler.OneTimeSchedulerDto;
import org.springframework.stereotype.Service;

@Service
public interface SchedulerService {
    void scheduleOnetime(OneTimeSchedulerDto dto, long childId);

    void sendOneTimeReminder(String reminderId);
}
