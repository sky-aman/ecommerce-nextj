import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import FormSubmitButton from '@/component/FormSubmitButton';
import prisma from '@/lib/db/prisma';

export const metadata: Metadata = {
  title: 'Add Product | We-commerce',
};

async function addProduct(formData: FormData) {
  'use server';
  const name = formData.get('name')?.toString();
  const description = formData.get('description')?.toString();
  const imageUrl = formData.get('imageUrl')?.toString();
  const price = Number(formData.get('price')) ?? 0;

  if (!name || !description || !imageUrl || !price) {
    throw Error('Missing required fields');
  }

  await prisma?.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect('/');
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className='mb-3 text-lg font-bold'>Add Product</h1>
      <form action={addProduct}>
        <input
          name='name'
          placeholder='Name'
          className='input input-bordered mb-3 w-full'
        />
        <textarea
          required
          name='description'
          placeholder='Description'
          className='textarea textarea-bordered mb-3 w-full'
        />
        <input
          name='imageUrl'
          placeholder='Image Url'
          type='url'
          className='input input-bordered mb-3 w-full'
        />
        <input
          name='price'
          placeholder='Price'
          type='number'
          className='input input-bordered mb-3 w-full'
        />
        <FormSubmitButton type='submit' className='btn-block'>
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}
