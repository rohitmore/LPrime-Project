package com.lp.daos;

import com.lp.entities.VideoUrl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoUrlRepository extends JpaRepository<VideoUrl, Long> { }
