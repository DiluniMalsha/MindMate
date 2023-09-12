package com.uwu.emora.repository;

import com.uwu.emora.entity.Child;
import com.uwu.emora.entity.Scheduler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SchedulerRepository extends JpaRepository<Scheduler, String> {

    @Query(value = "select id from scheduler",nativeQuery = true)
    List<String> getAllIDs();

    List<Scheduler> findAllByChildOrderByDateAsc(Child child);
}
