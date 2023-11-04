package com.uwu.emora.repository;

import com.uwu.emora.entity.ChildEmotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChildEmotionRepository extends JpaRepository<ChildEmotion, Long> {

    ChildEmotion findTopByChild_IdOrderByDateTimeDesc(long childId);

}
