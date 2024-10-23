'use server'

import db from '@/utils/db';
import { currentUser, User } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { productSchema, validateWithZodSchema } from './schemas';

const getAuthUser = async () => {
    const user = await currentUser();
    if (!user) redirect('/');
    return user;
}

const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return { message: error instanceof Error ? error.message : 'There was an error' }
}

export const fetchFeaturedProducts = async () => {
    const products = await db.product.findMany({
        where: {
            featured: true,
        },
    })
    return products;
}

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
    const allProducts = await db.product.findMany({
        where: {
            OR: [{ name: { contains: search, mode: 'insensitive' } }, { company: { contains: search, mode: 'insensitive' } }]
        },
        orderBy: {
            createdAt: 'desc',
        },
    })
    return allProducts;
}

export const fetchSingleProduct = async (productID: string) => {
    const product = await db.product.findUnique({
        where: {
            id: productID
        }
    });
    if (!product) redirect('/products');
    return product;
}

export const createProductAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
    const user = await getAuthUser();
    try {
        const rawData = Object.fromEntries(formData);
        const validatedFields = validateWithZodSchema(productSchema, rawData);

        await db.product.create({
            data: { ...validatedFields, image: '/image/product-3.jpg', clerkId: user.id }
        });

        return { message: 'Product created' }
    } catch (error) {
        return renderError(error);
    }
}