'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ConsultationForm from './form';

export default function ConsultationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-[#c6993e] hover:bg-amber-700 text-white cursor-pointer'>
          Book Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-xl'>
        <DialogHeader>
          <DialogTitle>Book a Free Consultation</DialogTitle>
          <DialogDescription>
            Fill out your details below and we’ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <ConsultationForm />
      </DialogContent>
    </Dialog>
  );
}
