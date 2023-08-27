package com.uwu.emora.service;

import com.uwu.emora.dto.timetable.TimetableRecordDto;
import com.uwu.emora.enums.Day;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TimetableService {
    void addTimetableRecord(TimetableRecordDto timeTableRecordDto);

    void updateTimetableRecord(TimetableRecordDto timeTableRecordDto);

    void deleteTimetableRecord(long id);

    List<TimetableRecordDto> getTimetableRecordsForDay(Day day,long id);
}
