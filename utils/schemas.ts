import { Schema, z, ZodSchema } from 'zod';

export const productSchema = z.object({
    name: z.string().min(2, { message: 'Name needs to be at least 2 characters long' }).max(100, { message: 'Name must be less than 100 characters long' }),
    company: z.string().min(4, { message: 'Company name needs to be at least 4 characters long' }),
    featured: z.coerce.boolean(),
    price: z.coerce.number().int().min(0, { message: 'Number needs to be a positive number' }),
    description: z.string().refine(
        (description) => {
            const wordCount = description.split(' ').length;
            return wordCount >= 10 && wordCount <= 1000;
        },
        { message: 'Description must be bewtween 10 to 1000 words' })
});

export function validateWithZodSchema<T>(schema: Schema<T>, data: unknown): T {
    const result = schema.safeParse(data);

    if (!result.success) {
        const errors = result.error.errors.map((error) => error.message)
        throw new Error(errors.join(', '));
    }

    return result.data;
}