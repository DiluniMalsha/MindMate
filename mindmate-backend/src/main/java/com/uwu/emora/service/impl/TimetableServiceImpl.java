package com.uwu.emora.service.impl;

import com.uwu.emora.dto.timetable.TimetableRecordDto;
import com.uwu.emora.entity.Timetable;
import com.uwu.emora.enums.Day;
import com.uwu.emora.exception.CustomServiceException;
import com.uwu.emora.repository.TimetableRepository;
import com.uwu.emora.service.TimetableService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TimetableServiceImpl implements TimetableService {

    private final TimetableRepository timetableRepository;

    @Override
    public void addTimetableRecord(TimetableRecordDto timeTableRecordDto) {
        Timetable existingRecord = timetableRepository
                .findTimetableByDayAndFromTimeAndToTime(
                        timeTableRecordDto.getDay(), timeTableRecordDto.getFromTime(), timeTableRecordDto.getToTime());
        if (existingRecord == null) {
            Timetable timetable = new Timetable();
            timetable.setDay(timeTableRecordDto.getDay());
            timetable.setFromTime(timeTableRecordDto.getFromTime());
            timetable.setToTime(timeTableRecordDto.getToTime());
            timetable.setTask(timeTableRecordDto.getTask());
            timetableRepository.save(timetable);
        } else {
            throw new CustomServiceException("There is an existing timetable record for the given timeslot!");
        }
    }

    @Override
    public void updateTimetableRecord(TimetableRecordDto timeTableRecordDto) {
        Optional<Timetable> optionalRecord = timetableRepository.findById(timeTableRecordDto.getId());
        if (optionalRecord.isPresent()) {
            Timetable timetable = optionalRecord.get();
            timetable.setDay(timeTableRecordDto.getDay());
            timetable.setFromTime(timeTableRecordDto.getFromTime());
            timetable.setToTime(timeTableRecordDto.getToTime());
            timetable.setTask(timeTableRecordDto.getTask());
            timetableRepository.save(timetable);
        } else {
            throw new CustomServiceException("Timetable Record Not Found!");
        }
    }

    @Override
    public void deleteTimetableRecord(long id) {
        Optional<Timetable> optionalRecord = timetableRepository.findById(id);
        if (optionalRecord.isPresent()) {
            Timetable timetable = optionalRecord.get();
            timetableRepository.delete(timetable);
        } else {
            throw new CustomServiceException("Timetable Record Not Found!");
        }
    }

    @Override
    public List<TimetableRecordDto> getTimetableRecordsForDay(Day day) {
        return timetableRepository.findTimetablesByDayOrderByFromTime(day)
                .stream()
                .map(tb ->
                        new TimetableRecordDto(
                                tb.getId(),
                                tb.getDay(),
                                tb.getFromTime(),
                                tb.getToTime(),
                                tb.getTask()))
                .collect(Collectors.toList());

    }
}
