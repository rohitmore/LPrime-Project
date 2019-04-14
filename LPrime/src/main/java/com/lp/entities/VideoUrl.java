package com.lp.entities;

import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "video_url")
@NoArgsConstructor
public class VideoUrl {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "video-url")
    private String videoUrl;

    @ManyToOne
    private Product product;

    public static VideoUrl createNew() {
        return new VideoUrl();
    }

}
