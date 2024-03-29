'use server';// react directive -> marking all the exported functions within the file as server functions

import { z } from 'zod'; // library to handle type validation
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// This schema will validate the formData before saving it to a database
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });


export async function createInvoice(formData: FormData) { // formData we got out of server action <form action> what is like API behind the scenes
    // validate Formdata
    const { customerId, amount, status } = CreateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
    // convert amount into cent to eliminate JavaScript floating-point errors and ensure greater accuracy
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    // Inserting data into database
    try {
      await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
  } catch(error){
   return {
    message: 'Database Error: Failed to Create Invoice.'
   }
  }
    // delete cache to display new data (defaul is cashing data for quick navigation between routes)
    revalidatePath('/dashboard/invoices'); // new data reload
    //  on form submission redirected
    redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });


export async function updateInvoice(id: string, formData: FormData) {
  // throw new Error('Failed to edit Invoice');

  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;

  } catch(error){
    return {
      message: 'Database Error: Failed to Update Invoice.'
    }
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');

}

export async function deleteInvoice(id: string) {
  throw new Error('Failed to Delete Invoice');
  
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');  // delete cache to display new data 
    // inside the try because?
    // no redirect because? & 
    return {message: 'Deleted Invoice'}

  } catch(error){
      return {message: 'Database Error: Failed to Delete Invoice.'}
  }
}