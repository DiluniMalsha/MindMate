package com.uwu.emora.service.impl;

import com.uwu.emora.dto.scheduler.OneTimeSchedulerDto;
import com.uwu.emora.entity.Child;
import com.uwu.emora.entity.Scheduler;
import com.uwu.emora.enums.ReminderType;
import com.uwu.emora.exception.CustomServiceException;
import com.uwu.emora.quartz.ReminderScheduler;
import com.uwu.emora.repository.ChildRepository;
import com.uwu.emora.repository.SchedulerRepository;
import com.uwu.emora.service.SchedulerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.TimeZone;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SchedulerServiceImpl implements SchedulerService {

    private final SchedulerRepository schedulerRepository;
    private final ChildRepository childRepository;
    private final ReminderScheduler reminderScheduler;

    @Override
    public void scheduleOnetime(OneTimeSchedulerDto dto, long childId) {

        Child child = childRepository.findById(childId).orElseThrow(() -> new CustomServiceException("Child not found"));

        String str = dto.getDate() + " " + dto.getRemindTime();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime remindDateTime = LocalDateTime.parse(str, formatter);

        formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate date = LocalDate.parse(dto.getDate(), formatter);

        TimeZone timeZone = TimeZone.getTimeZone("Asia/Kolkata");
        ZoneId zoneId = timeZone.toZoneId();
        ZonedDateTime dateTime = ZonedDateTime.of(remindDateTime, zoneId);

        String reminderId = UUID.randomUUID().toString();
        List<String> allIDs = schedulerRepository.getAllIDs();

        while (true) {
            if (allIDs.contains(reminderId)) {
                reminderId = UUID.randomUUID().toString();
            } else {
                break;
            }
        }

        reminderScheduler.schedule(ReminderType.ONETIME, reminderId, dateTime);

        //save to database
        Scheduler scheduler = new Scheduler();
        scheduler.setId(reminderId);
        scheduler.setNote(dto.getNote());
        scheduler.setDate(date);
        scheduler.setRemindTime(remindDateTime);
        scheduler.setChild(child);
        schedulerRepository.save(scheduler);
    }

    @Override
    public void sendOneTimeReminder(String reminderId) {

        Optional<Scheduler> optionalScheduler = schedulerRepository.findById(reminderId);

        if (optionalScheduler.isPresent()) {
            Scheduler scheduler = optionalScheduler.get();
            String note = scheduler.getNote();
            LocalDate date = scheduler.getDate();
            LocalDateTime remindTime = scheduler.getRemindTime();
            String id = scheduler.getId();

            System.out.println("**********************************************************");
            System.out.println("* ID: " + id);
            System.out.println("* Date: " + date);
            System.out.println("* Remind Time: " + remindTime);
            System.out.println("* Note: " + note);
            System.out.println("**********************************************************");
            //TODO
            //send reminder
        }
    }
}
