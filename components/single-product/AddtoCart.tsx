import { Button } from "@/components/ui/button";

function AddtoCart({ productID }: { productID: string }) {
    return (
        <Button className="mt-8 capitalize" size='lg'>add to cart</Button>
    )
}

export default AddtoCart;