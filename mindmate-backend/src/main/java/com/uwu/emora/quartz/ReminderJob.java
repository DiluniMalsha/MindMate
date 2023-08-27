package com.uwu.emora.quartz;
import com.uwu.emora.service.SchedulerService;
import lombok.RequiredArgsConstructor;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ReminderJob extends QuartzJobBean{

    private final SchedulerService schedulerService;

    @Override
    protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        JobDataMap jobDataMap=jobExecutionContext.getMergedJobDataMap();

        String reminderId = jobDataMap.getString("reminderId");

        System.out.println("sending scheduled sms");
        schedulerService.sendOneTimeReminder(reminderId);
    }
}
