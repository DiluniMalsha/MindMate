package com.uwu.emora.repository;

import com.uwu.emora.entity.Timetable;
import com.uwu.emora.enums.Day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimetableRepository extends JpaRepository<Timetable, Long> {

    List<Timetable> findTimetablesByDayOrderByFromTime(Day day);

    Timetable findTimetableByDayAndFromTimeAndToTime(Day day, String fromTime, String toTime);
}
