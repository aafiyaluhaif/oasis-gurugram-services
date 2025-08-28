import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  CheckCircle,
  Clock,
  Heart,
  Mail,
  MapPin,
  Shield,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BookForm from './_components/BookForm';
import BookingDialog from './_components/BookingDialog';

const treatmentAreas = [
  {
    name: 'HydraFacial',
    description:
      'Deeply cleanses, hydrates, and nourishes the skin for an instant, long-lasting glow.',
    image: 'services/HydraFacial.png',
  },
  {
    name: 'Photofacial',
    description:
      'Uses advanced light technology to reduce pigmentation and  improve texture',
    image: 'services/Photofacial.png',
  },
  {
    name: 'Carbon Facial',
    description:
      'Purifies pores, balances oil, and brightens dull skin for a flawless, refreshed look.',
    image: 'services/Carbon Facial.png',
  },
  {
    name: 'Chemical Peels',
    description:
      'Gently exfoliates and renews the skin, revealing a smoother, healthier, and youthful complexion.',
    image: 'services/Chemical Peels.png',
  },
  {
    name: 'Acne Treatment',
    description:
      'Targets active breakouts and prevents future flare-ups for clear, confident skin.',
    image: 'services/Acne Treatment.png',
  },
  {
    name: 'Skin Lightening ',
    description:
      'Brightens and evens out skin tone, enhancing natural clarity and glow.',
    image: 'services/Skin Lightening.png',
  },
  {
    name: 'Pigmentation Peels ',
    description:
      'Reduces dark spots and discoloration, unveiling brighter, luminous skin.',
    image: 'services/Pigmentation Peels.png',
  },
  {
    name: 'Acne & Scar Treatment ',
    description:
      'Smooths uneven texture and fades scars, restoring skin’s natural beauty.',
    image: 'services/Acne & Scar Treatment.png',
  },
  {
    name: 'Anti-Ageing Treatment ',
    description:
      'Minimizes fine lines and wrinkles while restoring firmness, vitality, and youthful radiance.',
    image: 'services/Anti-Ageing Treatment.png',
  },
];

export default function ViViAestheticsLanding() {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-vivipurple-50 to-white'>
        {/* Header */}
        <header className='bg-white/95 backdrop-blur-sm border-b border-vivipurple-100 sticky top-0 z-50'>
          <div className='container mx-auto px-4 '>
            <div className='flex items-center justify-between'>
              <div>
                <Image
                  src={'logo.png'}
                  alt='logo-image'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='h-[120px] w-auto'
                />
              </div>
              <BookingDialog>
                <Button className='bg-[#6B7D5C] p-2 lg:p-7 text-xl text-white'>
                  Book Appointment
                </Button>
              </BookingDialog>
            </div>
          </div>
        </header>

        {/* Hero Section text-[#B28421] */}
        <section id='home' className='relative py-20 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-[#6B7D5C]/10 to-[#6B7D5C]/10'></div>
          <div className='container mx-auto px-4 relative'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='space-y-8'>
                <Badge className='bg-gradient-to-r from-[#8BA279] to-[#6B7D5C] text-white border-vivipurple-300 p-2'>
                  <Sparkles className='w-4 h-4 mr-2' />
                  Limited Time Offer
                </Badge>
                <div className='space-y-4'>
                  <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                    Your Skin, Your Confidence
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#8BA279] to-[#6B7D5C]'>
                      {' '}
                      – Unlock 50% Off{' '}
                    </span>
                    &amp; on Expert Skin Treatments!
                  </h1>
                  <p className='text-xl text-gray-600 leading-relaxed'>
                    At Oasis Wave of Wellness Clinic Gurgaon, we are dedicated
                    to redefining skin care by combining medical expertise with
                    advanced aesthetics. Recognized as one of the best skin
                    clinics in Gurgaon, we go beyond surface-level treatments to
                    provide a holistic experience where science meets beauty.
                    Every skin type is unique, and our experienced
                    dermatologists create personalized plans to address concerns
                    such as acne, pigmentation, dullness, uneven texture, fine
                    lines, wrinkles, and other age-related changes. With
                    state-of-the-art technology, painless procedures, and a
                    transparent approach, we deliver treatments that are not
                    only effective but also trusted by our patients. Over the
                    years, Oasis has built a reputation for reliability,
                    offering visible transformations that enhance your
                    appearance and restore your confidence.
                  </p>
                </div>
                <div className='bg-gradient-to-r from-[#8BA279] to-[#6B7D5C] text-white p-6 rounded-2xl'>
                  <div className='flex items-center space-x-3 mb-2'>
                    <Zap className='w-6 h-6' />
                    <span className='text-lg font-semibold'>
                      Clear. Confident. Beautiful.
                    </span>
                  </div>
                  <p className='text-xl font-bold'>
                    Achieve flawless skin with dermatologist-approved advanced
                    technology, ensuring safe, gentle, and lasting results.
                  </p>
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <BookingDialog>
                    <Button
                      size='lg'
                      className='bg-gradient-to-r from-[#8BA279] to-[#6B7D5C]  text-lg px-8 py-4'
                    >
                      Say Yes to Radiant Skin – Book Now!
                    </Button>
                  </BookingDialog>
                </div>
              </div>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-[#8BA279] to-[#6B7D5C] rounded-3xl transform rotate-3'></div>
                <Image
                  src='landing_page/First image_650_450.png'
                  alt='image'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-[650px] h-[450px] rounded-3xl shadow-2xl relative z-10'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ViVi Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Your Journey to Flawless Skin – Step by Step
              </h2>
              {/* <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our certified dermatologists and therapists tailor each session to
              your skin type and hair texture for optimal results.
            </p> */}
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <Card className='border-[#6B7D5C] hover:shadow-lg transition-shadow pb-5'>
                <CardHeader className='text-center'>
                  <div className='w-16 h-16 bg-gradient-to-r from-[#8BA279] to-[#6B7D5C] rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Zap className='w-8 h-8 text-white' />
                  </div>
                  <CardTitle className='text-[#6B7D5C] text-xl'>
                    Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 text-center'>
                    Personalized skin assessment with our expert dermatologists
                    in Gurgaon, designed to understand your unique concerns like
                    acne, pigmentation, dullness, or ageing.
                  </p>
                </CardContent>
              </Card>

              <Card className='border-[#6B7D5C] hover:shadow-lg transition-shadow pb-5'>
                <CardHeader className='text-center'>
                  <div className='w-16 h-16 bg-gradient-to-r from-[#8BA279] to-[#6B7D5C] rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Clock className='w-8 h-8 text-white' />
                  </div>
                  <CardTitle className='text-[#6B7D5C] text-xl  '>
                    Preparation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 text-center'>
                    Step-by-step guidance to prepare your skin for treatments
                    such as HydraFacial, Photofacial, Carbon Facial, or Chemical
                    Peels — ensuring maximum effectiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className='border-[#6B7D5C] hover:shadow-lg transition-shadow pb-5'>
                <CardHeader className='text-center'>
                  <div className='w-16 h-16 bg-gradient-to-r from-[#8BA279] to-[#6B7D5C] rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Heart className='w-8 h-8 text-white' />
                  </div>
                  <CardTitle className='text-[#6B7D5C] text-xl'>
                    Treatment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 text-center'>
                    Safe, painless, and result-driven procedures for skin
                    rejuvenation, anti-ageing, scar reduction, and brightening —
                    tailored for all skin types.
                  </p>
                </CardContent>
              </Card>

              <Card className='border-[#6B7D5C] hover:shadow-lg transition-shadow pb-5'>
                <CardHeader className='text-center'>
                  <div className='w-16 h-16 bg-gradient-to-r from-[#8BA279] to-[#6B7D5C] rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Shield className='w-8 h-8 text-white' />
                  </div>
                  <CardTitle className='text-[#6B7D5C] text-xl'>
                    Aftercare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 text-center'>
                    Easy-to-follow post-treatment tips and
                    dermatologist-recommended routines to maintain lasting glow,
                    clear complexion, and youthful, healthy skin.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <div className='container mx-auto pb-20'>
          <Image
            src={'Banner 1.png'}
            alt='banner'
            height={0}
            width={0}
            sizes='100vw'
            className='w-full h-full rounded-2xl '
          />
        </div>

        {/* Treatment Areas with Pictures */}
        <section className='py-20  bg-[#A3B396] '>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-black mb-4'>
                Radiance Redefined – Save 40% on Advanced Skin Care
              </h2>
              {/* <p className='text-xl text-black'>
                Advanced skin care, professional salon hair treatments, and
                dermatologist-approved laser solutions — all under one roof.
              </p> */}
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {treatmentAreas.map((area, index) => (
                <Card
                  key={index}
                  className='border-vivipurple-100 hover:shadow-xl transition-all duration-300 group overflow-hidden p-0 pb-5'
                >
                  <div className='relative overflow-hidden'>
                    <Image
                      src={area.image || '/placeholder.svg'}
                      alt={area.name}
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-vivipurple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>
                  <CardHeader>
                    <CardTitle className='text-vivipurple-800 flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5' />
                      {area.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600'>{area.description}</p>
                    <BookingDialog>
                      <Button
                        variant='outline'
                        className='w-full mt-4 text-black border-[#A3B396] hover:bg-vivipurple-50'
                      >
                        Book Treatment
                      </Button>
                    </BookingDialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* <div className='container mx-auto px-4 py-12'>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-2xl font-bold text-center mb-8 text-foreground'>
                India’s Best Professional Salon Services
              </h2>
              <div className='grid grid-cols-3 gap-6'>
                {womenServices.map((service, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-center text-center'
                  >
                    <div className='relative w-24 h-24 mb-3 overflow-hidden rounded-2xl'>
                      <Image
                        src={service.image || '/placeholder.svg'}
                        alt={service.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <p className='text-base font-medium text-foreground leading-tight'>
                      {service.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold text-center mb-8 text-foreground'>
                India’s Best Professional Clinic Services
              </h2>
              <div className='grid grid-cols-3 gap-6'>
                {menServices.map((service, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-center text-center'
                  >
                    <div className='relative w-24 h-24 mb-3 overflow-hidden rounded-2xl'>
                      <Image
                        src={service.image || '/placeholder.svg'}
                        alt={service.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <p className='text-base font-medium text-foreground leading-tight'>
                      {service.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        {/* Key Benefits */}
        {/* <section className='py-20 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Benefits of Skin, Hair & Laser Treatments
              </h2>
            </div>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='space-y-8'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-vivipurple-100 to-vivipurple-200 rounded-full flex items-center justify-center flex-shrink-0'>
                    <CheckCircle className='w-6 h-6 text-vivipurple-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      Precision
                    </h3>
                    <p className='text-gray-600'>
                      Targeted treatments that address specific needs — from
                      laser hair removal for dark, coarse hair without harming
                      skin, to precision haircuts and skin treatments tailored
                      to your unique profile.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-vivipurple-100 to-vivipurple-200 rounded-full flex items-center justify-center flex-shrink-0'>
                    <Shield className='w-6 h-6 text-vivipurple-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      Safety
                    </h3>
                    <p className='text-gray-600'>
                      We use advanced, dermatologist-approved technology and
                      salon-grade products, ensuring every skin, hair, and laser
                      service is safe, effective, and suitable for all skin and
                      hair types.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-vivipurple-100 to-vivipurple-200 rounded-full flex items-center justify-center flex-shrink-0'>
                    <Sparkles className='w-6 h-6 text-vivipurple-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      Speed
                    </h3>
                    <p className='text-gray-600'>
                      Quick, efficient sessions for laser hair removal (face,
                      arms, legs, back), express facials for instant glow, and
                      professional hair services that transform your look in
                      minimal time.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-vivipurple-100 to-vivipurple-200 rounded-full flex items-center justify-center flex-shrink-0'>
                    <Heart className='w-6 h-6 text-vivipurple-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      Results
                    </h3>
                    <p className='text-gray-600'>
                      Experience visible transformations — lasting smoothness
                      from laser, frizz-free shiny hairs and radiant,
                      rejuvenated skin from our premium facials — all at one
                      trusted clinic in Noida.
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-[#8BA279] to-[#6B7D5C] rounded-3xl transform rotate-3'></div>
                <Image
                  src='landing_page/Key Benfits 650_400.png'
                  alt='key-benefits'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-[650px] h-[400px] rounded-3xl shadow-2xl relative z-10'
                />
              </div>
            </div>
          </div>
        </section> */}
        <div className='container mx-auto py-20'>
          <Image
            src={'Banner 2.png'}
            alt='banner'
            height={0}
            width={0}
            sizes='100vw'
            className='w-full h-full rounded-2xl '
          />
        </div>
        {/* Testimonials */}
        <section className='py-20  bg-gradient-to-b from-[#A3B396] to-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Real People. Real Results.
              </h2>
              <p className='text-xl text-gray-600'>
                See what our satisfied clients have to say!
              </p>
            </div>
            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <Card className='border-vivipurple-100 shadow-lg p-5'>
                <CardHeader>
                  <div className='flex items-center space-x-1 mb-2'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-5 h-5 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                  </div>
                  <CardTitle className='text-vivipurple-800'>
                    Krishna Devi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 italic text-lg'>
                    &quot;Absolutely go to place for your inner and outer
                    wellness, happiness. It&apos;s just been over a month when i
                    started taking her treatment for very old and deep
                    pigmentation.They without prescribing any fancy or any
                    expensive lotions and creams, gave me skin friendly and
                    pocket friendly solutions. Her staff is extremely
                    helpful,pleasant and well behaved. I strongly recommend
                    Oasis Clinic to every who so ever wants to feel good, look
                    good and live a healthy beautiful life internally and
                    externally.&quot;
                  </p>
                </CardContent>
              </Card>

              <Card className='border-vivipurple-100 shadow-lg p-5'>
                <CardHeader>
                  <div className='flex items-center space-x-1 mb-2'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-5 h-5 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                  </div>
                  <CardTitle className='text-vivipurple-800'>
                    Shivam Rajput
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 italic text-lg'>
                    &quot;It&apos;s been over a month that i have started going
                    to Oasis Clinic and I am quite satisfied with how my
                    treatment is going. In a short span of time, I can
                    definitely tell the difference on my face and I am happy
                    with the way their treatment is going. Thank you Poonam and
                    her entire Oasis Family will definitely gonna recommend to
                    my friends and family members🥰&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section with Accordion */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Frequently Asked Questions
              </h2>
              <p className='text-xl text-gray-600'>
                Get answers to common questions about laser hair reduction
              </p>
            </div>
            <div className='max-w-4xl mx-auto'>
              <Accordion type='single' collapsible className='space-y-4'>
                <AccordionItem
                  value='item-1'
                  className='border border-vivipurple-100 rounded-lg px-6'
                >
                  <AccordionTrigger className='text-left text-vivipurple-800 hover:text-vivipurple-600'>
                    1. Which skin treatments are available at Oasis Gurgaon?{' '}
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-600'>
                    We offer HydraFacial, Photofacial, Carbon Facial, Chemical
                    Peels, Acne & Scar Treatments, Pigmentation Peels, Skin
                    Lightening, and Anti-Ageing solutions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value='item-2'
                  className='border border-vivipurple-100 rounded-lg px-6'
                >
                  <AccordionTrigger className='text-left text-vivipurple-800 hover:text-vivipurple-600'>
                    2. Are the treatments safe for all skin types?
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-600'>
                    Yes, our dermatologist-approved procedures are safe,
                    painless, and customized for every skin type.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value='item-3'
                  className='border border-vivipurple-100 rounded-lg px-6'
                >
                  <AccordionTrigger className='text-left text-vivipurple-800 hover:text-vivipurple-600'>
                    3. How many sessions will I need to see results?
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-600'>
                    HydraFacial shows instant glow in one session, while acne,
                    scars, or ageing concerns may need multiple sessions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value='item-4'
                  className='border border-vivipurple-100 rounded-lg px-6'
                >
                  <AccordionTrigger className='text-left text-vivipurple-800 hover:text-vivipurple-600'>
                    4. Do the treatments have downtime or side effects?
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-600'>
                    Most treatments are painless with no downtime, and you can
                    resume daily activities right away.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value='item-5'
                  className='border border-vivipurple-100 rounded-lg px-6'
                >
                  <AccordionTrigger className='text-left text-vivipurple-800 hover:text-vivipurple-600'>
                    5. Why choose Oasis Gurgaon for skin care?
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-600'>
                    Trusted dermatologists, advanced technology, transparent
                    pricing, and proven results make us one of the best skin
                    clinics in Gurgaon.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section
          id='contact'
          className='py-20 bg-gradient-to-r from-[#8BA279] to-[#6B7D5C] text-white'
        >
          <div className='container mx-auto px-4'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Left Section */}
              <div className='space-y-8'>
                <div className='mb-7'>
                  <h2 className='text-4xl font-bold mb-4'>
                    Book Your Skin Consultation in Gurgaon
                  </h2>
                  <p className='text-xl text-vivipurple-100'>
                    Ready to rejuvenate, refresh, and transform your skin?
                    Schedule your appointment at Oasis Wave of Wellness Clinic
                    Gurgaon, a trusted destination for advanced facials,
                    pigmentation solutions, acne & scar treatments, skin
                    lightening, and anti-ageing care.
                  </p>
                </div>

                {/* Branch: Gurgaon */}
                <div className='space-y-4'>
                  <div className='flex items-center space-x-3'>
                    <Mail className='h-5 w-5' />
                    <span> oasiswellness3@gmail.com</span>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <Clock className='h-5 w-5' />
                    <span> Mon–Sun: 10:00 AM – 7:00 PM</span>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-1'>Gurugram</h3>
                    <p className='text-vivipurple-100'>
                      A27, 4th Floor, Golf Course Road, Adjacent to DT Mega
                      Mall, DLF Phase 1, Sector 28
                    </p>
                    <p className='text-vivipurple-100'>
                      +91-7703934027, 8595041634
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-1'> Noida</h3>
                    <p className='text-vivipurple-100'>
                      GF 26, Waves Silver Tower, Ground Floor, Sector 18, Noida
                      - 201301
                    </p>

                    <p className='text-vivipurple-100'>+91-8929666113</p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-1'>Indirapuram</h3>
                    <p className='text-vivipurple-100'>
                      587, Niti Khand-1, Opp. ATS Gate No.5, Indirapuram,
                      Ghaziabad, Uttar Pradesh - 201014
                    </p>
                    <div className='flex items-center gap-2 mt-2'>
                      {' '}
                      {/* <Phone className='w-5 h-5 text-vivipurple-100' /> */}
                      <p className='text-vivipurple-100'>
                        +91-7065566673 , 7065566619
                      </p>{' '}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section: Booking Form */}
              <div className='bg-white/20 backdrop-blur-sm rounded-3xl p-8'>
                <h3 className='text-2xl font-bold mb-6 text-center'>
                  Book Your Free Consultation
                </h3>
                <BookForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='bg-vivipurple-100 text-white py-12'>
          <div className='container mx-auto px-4'>
            <div className='text-center'>
              <div className='flex justify-center'>
                <Image
                  src={'logo.png'}
                  alt='logo-image'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='h-[120px] w-auto'
                />
              </div>

              <p className='text-gray-400 mb-4'>
                Your journey to beautiful, hair-free skin starts here.
              </p>
              <Separator className='bg-gray-700 mb-4' />
              <p className='text-gray-500 text-sm'>
                Oasis Wave of Wellness by Sapna Tiwari © 2025. All rights
                reserved.
              </p>
            </div>
          </div>
          <Link
            href='https://wa.me/+917703934027' // replace with your WhatsApp number
            target='_blank'
            rel='noopener noreferrer'
            className='fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
              className='w-8 h-8 text-white'
            >
              <path d='M12 .5C5.648.5.5 5.648.5 12c0 2.088.546 4.03 1.498 5.725L.5 23.5l5.941-1.552A11.47 11.47 0 0 0 12 23.5c6.352 0 11.5-5.148 11.5-11.5S18.352.5 12 .5zm0 20.833c-1.82 0-3.508-.497-4.958-1.357l-.356-.211-3.53.922.94-3.445-.233-.376A9.29 9.29 0 0 1 2.667 12c0-5.146 4.187-9.333 9.333-9.333S21.333 6.854 21.333 12 17.146 21.333 12 21.333zm5.008-6.992c-.275-.138-1.62-.797-1.87-.888s-.434-.138-.618.138-.71.888-.87 1.072-.32.207-.595.069c-.275-.138-1.16-.427-2.21-1.362-.816-.727-1.368-1.626-1.53-1.901-.16-.275-.017-.424.122-.562.126-.126.275-.32.412-.48.138-.16.183-.275.275-.458.092-.183.046-.344-.023-.481-.069-.138-.618-1.49-.847-2.043-.223-.537-.45-.464-.618-.473l-.527-.009c-.183 0-.48.069-.732.344s-.96.938-.96 2.287 1.003 2.653 1.143 2.842c.138.183 1.975 3.017 4.788 4.233.67.289 1.192.462 1.6.59.672.214 1.283.184 1.768.112.539-.08 1.62-.662 1.849-1.301.229-.64.229-1.187.16-1.301-.068-.114-.251-.183-.526-.321z' />
            </svg>
          </Link>
        </footer>
      </div>
    </>
  );
}
