package com.uwu.emora.service.impl;

import com.uwu.emora.repository.SchedulerRepository;
import com.uwu.emora.service.SchedulerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SchedulerServiceImpl implements SchedulerService {

    private final SchedulerRepository schedulerRepository;
}
