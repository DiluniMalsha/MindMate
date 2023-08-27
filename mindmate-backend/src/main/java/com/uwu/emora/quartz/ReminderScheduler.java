package com.uwu.emora.quartz;

import com.uwu.emora.enums.ReminderType;
import lombok.RequiredArgsConstructor;
import org.quartz.*;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.Date;

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

    public void deleteSchedule(String scheduleId) {
        try {
            scheduler.deleteJob(new JobKey(scheduleId, "reminder-jobs"));
            TriggerKey triggerKey = new TriggerKey(scheduleId, "reminder-jobs");
            scheduler.unscheduleJob(triggerKey);
        } catch (SchedulerException e) {
            e.printStackTrace();
        }

    }

    private JobDetail buildJobDetail(ReminderType type, String id) {

        JobDataMap jobDataMap = new JobDataMap();
        jobDataMap.put("reminderType", type);
        jobDataMap.put("reminderId", id);

        return JobBuilder.newJob(ReminderJob.class)
                .withIdentity(id, "reminder-jobs")
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
