'use client';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

const bannerImages = [
  'Full Body Laesr Offer Banner 1.png',
  'Full Body Laesr Offer Banner 2.png',
];
export default function Banner() {
  return (
    <div>
      <Carousel
        className='w-full'
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({ delay: 2500, stopOnInteraction: false }), // ✅ No useRef
        ]}
      >
        <CarouselContent>
          {bannerImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className='relative'>
                <Image
                  src={src || '/placeholder.svg'}
                  alt={`Banner ${index + 1}`}
                  height={0}
                  width={0}
                  sizes='100vw'
                  className='w-full h-full object-cover'
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
