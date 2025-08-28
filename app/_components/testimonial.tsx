'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote, Star } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
const testimonials = [
  {
    id: 1,
    name: 'Vikas Bhat',
    location: 'Mumbai',
    rating: 5,
    text: "I recently had a HydraFacial at Derma Puritys, and I couldn't be more pleased. The staff was exceptionally friendly and made me feel comfortable throughout the treatment. ",
    treatment: 'Pigmentation Treatment',
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 2,
    name: 'Tani Niharia',
    location: 'Mumbai',
    rating: 5,
    text: 'My laser and hydra facial session both were great. They really took care of everything my comfort and services were excellent highly recommend this clinic. The service provider anjana was very professional and friendly. She did my laser and hydra facial very nicely and made me really comfortable. Thanks for the lovely experience',
    treatment: 'Melasma Treatment',
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 3,
    name: 'sarah khanna',
    location: 'Mumbai',
    rating: 5,
    text: ' I have been going through my full body laser at derma purity and I have seen great results in only 3 sessions. I really love the staff here, they are really sweet and make sure to put you at ease. They make sure to follow their process with utmost hygiene and care. Thank you so much to the staff providing services.',
    treatment: 'Korean Glass Skin Treatment',
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 4,
    name: 'Tarang Singhal',
    location: 'Mumbai',
    rating: 5,
    text: ' Had a great experience at dermapurity clinic The clinic is super clean and welcoming. Special shoutout to Sunita, she was professional, friendly, and made the whole process smooth and comfortable. I’m already seeing great results. Highly recommend!',
    treatment: 'Tan Removal',
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 5,
    name: 'PURVA SARNOBAT',
    location: 'Mumbai',
    rating: 5,
    text: " Took a package for laser hair removal and honestly it’s worth every rupee. It's painless and they guide you through everything. No side effects, no redness.",
    treatment: 'Full Body Whitening',
    image: '/placeholder.svg?height=80&width=80',
  },
  {
    id: 6,
    name: 'Tanya Lakra',
    location: 'Mumbai',
    rating: 5,
    text: 'Thankyou for the lovely experience! My Hair Removal Laser Experience Is Painless And Very Comfortable! And The Services Here Are Very Great! I recommend Derma Purity For Hair Removal Laser Treatment.',
    treatment: 'Skin Lightening',
    image: '/placeholder.svg?height=80&width=80',
  },
];
function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function Testimonial() {
  const handleClick = () => {
    const callback = function () {
      window.location.href = 'tel:8655749084';
    };

    if (
      typeof window !== 'undefined' &&
      typeof (window as any).gtag === 'function'
    ) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-11110495005/68KyCITd5O0aEJ3m8rEp',
        event_callback: callback,
      });
    }
  };
  return (
    <section className='py-16 bg-[#f4c2c2]'>
      <div className='container max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-black mb-4'>
            What Our Patients Say
          </h2>
          <div className='w-16 h-1 mx-auto bg-[#d4af37]'></div>
          <p className='text-lg text-gray-700 mt-4'>
            Real stories from our satisfied patients
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            loop: true,
            align: 'center',
          }}
          className='w-full'
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className='md:basis-1/2 lg:basis-1/3'
              >
                <div className='bg-white rounded-xl h-[300px] shadow-lg hover:shadow-xl transition p-6  relative flex flex-col justify-between'>
                  <Quote
                    className='absolute top-4 right-4 w-8 h-8 opacity-20'
                    style={{ color: '#d4af37' }}
                  />

                  <div>
                    <div className='flex mb-4'>
                      {[...Array(testimonial.rating)].map((i) => (
                        <Star
                          key={i}
                          className='w-4 h-4 mr-1'
                          style={{ color: '#d4af37' }}
                          fill='currentColor'
                        />
                      ))}
                    </div>
                    <blockquote className='italic text-sm text-gray-700 leading-relaxed mb-6'>
                      &quot;{testimonial.text}&quot;
                    </blockquote>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <div
                      className='w-12 h-12 rounded-full bg-[#d4af37] text-white flex items-center justify-center text-lg font-bold'
                      style={{ borderColor: '#d4af37' }}
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <h4 className='font-semibold text-black text-sm'>
                        {testimonial.name}
                      </h4>
                      {/* <p className='text-xs text-gray-500'>
                        {testimonial.location}
                      </p> */}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className='bg-white border text-[#d4af37] lg:flex hidden' />
          <CarouselNext className='bg-white border text-[#d4af37] lg:flex hidden' />
        </Carousel>

        <div className='text-center mt-10'>
          <a
            href='tel:+91-9958703777'
            onClick={handleClick}
            className='bg-[#d4af37] text-black font-semibold px-8 py-3 rounded-full inline-block hover:opacity-90 transition'
          >
            SCHEDULE YOUR CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}
