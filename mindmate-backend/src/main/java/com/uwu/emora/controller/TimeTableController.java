package com.uwu.emora.controller;

import com.uwu.emora.dto.CommonResponse;
import com.uwu.emora.dto.timetable.TimetableRecordDto;
import com.uwu.emora.enums.Day;
import com.uwu.emora.service.TimetableService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/timetable")
public class TimeTableController {

    private final TimetableService timetableService;

    @PostMapping(value = "/")
    public ResponseEntity addTimetableRecord(@RequestBody TimetableRecordDto timetableRecordDto) {
        timetableService.addTimetableRecord(timetableRecordDto);
        return ResponseEntity.ok(new CommonResponse<>(true, "Timetable Record Added Successfully"));
    }

    @PutMapping(value = "/")
    public ResponseEntity updateTimetableRecord(@RequestBody TimetableRecordDto timetableRecordDto) {
        timetableService.updateTimetableRecord(timetableRecordDto);
        return ResponseEntity.ok(new CommonResponse<>(true, "Timetable Record Updated Successfully"));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteTimetableRecord(@PathVariable("id") long id) {
        timetableService.deleteTimetableRecord(id);
        return ResponseEntity.ok(new CommonResponse<>(true, "Timetable Record Deleted Successfully"));
    }

    @GetMapping(value = "/{day}")
    public ResponseEntity deleteTimetableRecord(@PathVariable("day") Day day) {
        List<TimetableRecordDto> timetableRecordsForDay = timetableService.getTimetableRecordsForDay(day);
        return ResponseEntity.ok(new CommonResponse<>(true, timetableRecordsForDay));
    }
}
