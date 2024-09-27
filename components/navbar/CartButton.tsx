import Link from "next/link"
import { Button } from "../ui/button"
import { LuShoppingCart } from 'react-icons/lu'


async function CartButton() {
    //Temporarily
    const numItemsInCart = 10;

    return (
        <Button asChild variant='outline' size='icon' className="flex justify-center items-center relative">
            <Link href='/cart'>
                <LuShoppingCart />
                <span className="absolute bg-primary text-white -top-3 -right-3 rounded-full h-6 w-6 flex items-center justify-center text-xs">{numItemsInCart}</span>
            </Link>
        </Button>
    )
}

export default CartButton