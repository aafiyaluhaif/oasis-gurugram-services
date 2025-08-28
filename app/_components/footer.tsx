import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '2/125, Derma puritys, Vishal Khand 2, Vishal Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@dermapurity.in'],
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['Ph: +91-9958703777'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Everyday: 9AM – 7PM'],
    },
  ];

  return (
    <section className='py-16' style={{ backgroundColor: '#f5eed7' }}>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
          {contactInfo.map((info, index) => (
            <div key={index} className='flex flex-col items-center'>
              {/* Icon Circle */}
              <div
                className='w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2'
                style={{
                  borderColor: '#d4af37',
                  backgroundColor: 'transparent',
                }}
              >
                <info.icon className='w-8 h-8' style={{ color: '#d4af37' }} />
              </div>

              {/* Title */}
              <h3
                className='text-xl font-bold mb-3'
                style={{ color: '#d4af37' }}
              >
                {info.title}
              </h3>

              {/* Details */}
              <div className='text-black'>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className='text-sm leading-relaxed'>
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
