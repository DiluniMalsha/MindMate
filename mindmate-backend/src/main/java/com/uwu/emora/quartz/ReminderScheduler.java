package com.uwu.emora.quartz;

import com.uwu.emora.enums.ReminderType;
import lombok.RequiredArgsConstructor;
import org.quartz.*;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.Date;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class ReminderScheduler {

    private final Scheduler scheduler;

    public void schedule(ReminderType type, String scheduleId, ZonedDateTime dateTime) {
        JobDetail jobDetail = buildJobDetail(type, scheduleId);
        Trigger trigger = buildJobTrigger(jobDetail, dateTime);

        try {
            scheduler.scheduleJob(jobDetail, trigger);
        } catch (SchedulerException e) {
            e.printStackTrace();
        }

    }

    private JobDetail buildJobDetail(ReminderType type, String id) {

        JobDataMap jobDataMap = new JobDataMap();
        jobDataMap.put("reminderType", type);
        jobDataMap.put("reminderId", id);

        return JobBuilder.newJob(ReminderJob.class)
                .withIdentity(UUID.randomUUID().toString(), "reminder-jobs")
                .withDescription("Send reminder Job")
                .usingJobData(jobDataMap)
                .storeDurably()
                .build();
    }

    private Trigger buildJobTrigger(JobDetail jobDetail, ZonedDateTime startAt) {
        return TriggerBuilder.newTrigger()
                .forJob(jobDetail)
                .withIdentity(jobDetail.getKey().getName(), "reminder-triggers")
                .withDescription("Send Reminder Trigger")
                .startAt(Date.from(startAt.toInstant()))
                .withSchedule(SimpleScheduleBuilder.simpleSchedule().withMisfireHandlingInstructionFireNow())
                .build();
    }
}
