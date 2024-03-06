'use server';// react directive -> marking all the exported functions within the file as server functions


export async function createInvoice(formData: FormData) {
    //extract the values of formData

    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    };
    // Test it out:
    console.log(rawFormData);
  }