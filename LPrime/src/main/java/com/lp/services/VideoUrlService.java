package com.lp.services;

import com.lp.daos.VideoUrlRepository;
import com.lp.entities.VideoUrl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VideoUrlService {

    private final VideoUrlRepository videoUrlRepository;

    @Autowired
    public VideoUrlService(VideoUrlRepository videoUrlRepository) {
        this.videoUrlRepository = videoUrlRepository;
    }

    public void add(VideoUrl videoUrl) {
        videoUrlRepository.save(videoUrl);
    }

}
