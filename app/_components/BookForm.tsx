'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z
    .string()
    .length(10, 'Phone number must be exactly 10 digits')
    .regex(/^\d+$/, 'Phone number must contain only numbers'),
  branch: z.string().min(1, 'Select a branch'),
  service: z.string().min(1, 'Select a service'),
});

type FormSchema = z.infer<typeof formSchema>;

export default function BookForm() {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',

      phone: '',
      branch: '',
      service: '',
    },
  });

  const addData = async (values: FormSchema) => {
    const payload = {
      name: values.name,
      phone: values.phone,
      branch: values.branch,
    };

    // Send to your PHP email script
    await fetch('https://oasiswaveofwellness.com/lp/config.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const res = await fetch(
      'https://api-v2.ledsak.ai/api/webhook/website/webhook',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client: '6895e63a9a8cbf9a5840f2b0',
          source: 'google',
          branch: values.branch,
          lead_details: [
            { lead_field: 'name', lead_value: values.name },

            { lead_field: 'phone', lead_value: values.phone },
            { lead_field: 'branch', lead_value: values.branch },
            { lead_field: 'service', lead_value: values.service },
          ],
        }),
      }
    );

    const data = await res.json();
    console.log(data);
    router.push('/laser-hair-reduction/thankyou');
  };

  const onSubmit = async (values: FormSchema) => {
    console.log(values, 'value');
    try {
      await addData(values);
      form.reset();
      router.push('/thankyou');
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-sm  '>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='Name' {...field} className='text-black' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Phone'
                    {...field}
                    className='text-black'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='branch'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Branch</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className='flex h-10 text-black w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  >
                    <option value=''>Select Branch</option>
                    <option value='Gurugram'>Gurugram</option>
                    <option value='Indirapuram'>Indirapuram</option>

                    <option value='Noida'>Noida</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='service'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Service</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className='flex h-10 text-black w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  >
                    <option value=''>Select Service</option>
                    <option value='hydrafacial'>HydraFacial</option>
                    <option value='photofacial'>PhotoFacial</option>
                    <option value='carbon-facial'>Carbon Facial</option>
                    <option value='chemical-peels'>Chemical Peels</option>
                    <option value='acne-treatment'>Acne Treatment</option>
                    <option value='skin-lightening'>Skin Lightening</option>
                    <option value='pigmentation-peels'>
                      Pigmentation Peels
                    </option>
                    <option value='acne-scar-treatment'>
                      Acne & Scar Treatment
                    </option>
                    <option value='anti-ageing-treatment'>
                      Anti-Ageing Treatment
                    </option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full bg-[#6B7D5C]'>
            Book Appointment
          </Button>
        </form>
      </Form>
    </div>
  );
}
