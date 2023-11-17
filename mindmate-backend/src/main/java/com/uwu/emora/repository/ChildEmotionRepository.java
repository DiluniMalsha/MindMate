package com.uwu.emora.repository;

import com.uwu.emora.entity.ChildEmotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ChildEmotionRepository extends JpaRepository<ChildEmotion, Long> {

    @Query(value = "SELECT * FROM child_emotion ce JOIN child c ON ce.child_id = c.id WHERE c.id = :childId ORDER BY ce.date_time DESC LIMIT 10", nativeQuery = true)
    List<ChildEmotion> findTopEmotions(long childId);

    ChildEmotion findTopByChild_IdOrderByDateTimeDesc(long childId);

    List<ChildEmotion> findAllByChild_IdAndDateTimeBetweenOrderByDateTimeAsc(long childId, LocalDateTime startDate, LocalDateTime endDate);

}
