'use server';// react directive -> marking all the exported functions within the file as server functions

import { z } from 'zod'; // library to handle type validation

// This schema will validate the formData before saving it to a database
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
    // validate Formdata
    const { customerId, amount, status } = CreateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
    // convert  amount into cent to eliminate JavaScript floating-point errors and ensure greater accuracy
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
  }