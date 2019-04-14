package com.lp.services;

import com.lp.daos.AddressRepository;
import com.lp.entities.ImageUrl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageUrlService {

    private final AddressRepository imageUrlRepository;

    @Autowired
    public ImageUrlService(AddressRepository imageUrlRepository) {
        this.imageUrlRepository = imageUrlRepository;
    }

    public void add(ImageUrl imageUrl) {
        imageUrlRepository.save(imageUrl);
    }

}
