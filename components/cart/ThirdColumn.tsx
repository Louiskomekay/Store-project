'use client';
import { useState } from 'react';
import SelectProductAmount from '../single-product/SelectProductAmount';
import { Mode } from '../single-product/SelectProductAmount';
import FormContainer from '../form/FormContainer';
import SubmitButton from '../form/Buttons';
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';
import { useToast } from '@/hooks/use-toast';

function ThirdColumn({ id, quantity }: { id: string, quantity: number }) {
    const [amount, setAmount] = useState(quantity);
    const [isLoading, setIsloading] = useState(false);
    const { toast } = useToast();

    const handleAmountChange = async (value: number) => {
        setIsloading(true)
        toast({ description: 'Calculating...' })
        const result = await updateCartItemAction({ amount: value, cartItemId: id })

        setAmount(value)
        toast({ description: result.message })

        setIsloading(false)
    };

    return (
        <div className='md:ml-8'>
            <SelectProductAmount amount={amount} setAmount={handleAmountChange} mode={Mode.CartItem} isLoading={false} />
            <FormContainer action={removeCartItemAction}>
                <input type="hidden" name='id' value={id} />
                <SubmitButton size='sm' className='mt-4' text='remove' />
            </FormContainer>
        </div>
    )
}

export default ThirdColumn