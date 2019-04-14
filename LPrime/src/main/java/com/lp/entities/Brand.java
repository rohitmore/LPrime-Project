package com.lp.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "brand")
@Data
@NoArgsConstructor
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "brand")
    private String name;

    @Column(name = "history")
    private String history;

    @Column(name = "images")
    private List<ImageUrl> imageUrlList;

    @Column(name = "video_url")
    private VideoUrl videoUrl;

    public static Brand createNew() {
        return new Brand();
    }
}
