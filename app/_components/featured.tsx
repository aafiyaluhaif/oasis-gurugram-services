'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

const featuredLogos = [
  { id: 1, src: 'featured/img-1.png' },
  { id: 2, src: 'featured/img-2.png' },
  { id: 3, src: 'featured/img-3.png' },
  { id: 4, src: 'featured/img-4.png' },
  { id: 5, src: 'featured/img-5.png' },
  { id: 6, src: 'featured/img-6.png' },
  { id: 7, src: 'featured/img-7.png' },
  { id: 8, src: 'featured/img-8.png' },
];

export default function Featured() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Auto-scroll functionality
    const autoScroll = setInterval(() => {
      api.scrollNext();
    }, 3000); // Move every 3 seconds

    // Cleanup interval on component unmount or api change
    return () => clearInterval(autoScroll);
  }, [api]);

  return (
    <div className='w-full bg-gray-50 pt-28 pb-20'>
      <div className='max-w-7xl mx-auto '>
        <h2 className='text-5xl font-bold text-custom-heading  mb-10 px-6'>
          Featured In
        </h2>

        {/* Desktop Grid - Hidden on mobile */}
        <div className='hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 px-6'>
          {featuredLogos.map((logo) => (
            <Image
              key={logo.id}
              src={logo.src || `/placeholder.svg?height=40&width=120`}
              alt={`Featured logo ${logo.id}`}
              width={120}
              height={40}
              className='h-10 w-auto object-contain'
            />
          ))}
        </div>

        {/* Mobile Carousel - Hidden on desktop */}
        <div className='md:hidden pl-6'>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className='w-full'
          >
            <CarouselContent className='-ml-4'>
              {featuredLogos.map((logo) => (
                <CarouselItem key={logo.id} className='pl-4 basis-2/5'>
                  <div className='flex items-center justify-center h-16'>
                    <Image
                      src={logo.src || `/placeholder.svg?height=40&width=120`}
                      alt={`Featured logo ${logo.id}`}
                      width={120}
                      height={40}
                      className='h-10 w-auto object-contain'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
