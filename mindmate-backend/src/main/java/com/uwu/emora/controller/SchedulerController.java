package com.uwu.emora.controller;

import com.uwu.emora.dto.CommonResponse;
import com.uwu.emora.dto.scheduler.OneTimeSchedulerDto;
import com.uwu.emora.service.SchedulerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/scheduler")
public class SchedulerController {

    private final SchedulerService schedulerService;

    @PostMapping(value = "/onetime/{childId}")
    public ResponseEntity scheduleOnetime(@PathVariable("childId") long childId, @RequestBody OneTimeSchedulerDto dto) {
        schedulerService.scheduleOnetime(dto, childId);
        return ResponseEntity.ok(new CommonResponse<>(true, "Onetime Reminder Added Successfully"));
    }

}
