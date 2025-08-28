'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import BookForm from './BookForm';

export default function BookingDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-xl bg-white py-5'>
        <DialogHeader className='px-6 '>
          <DialogTitle>Book a Free Consultation</DialogTitle>
          <DialogDescription>
            Fill out your details below and we’ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <BookForm />
      </DialogContent>
    </Dialog>
  );
}
