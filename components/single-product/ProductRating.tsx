import { FaStar } from "react-icons/fa"
import { fetchProductRating } from "@/utils/actions";

async function ProductRating({ productID }: { productID: string }) {
    const { rating, count } = await fetchProductRating(productID)

    const className = `flex gap-1 items-center text-md mt-1 mb-4`
    const countValue = `(${count}) reviews`

    return (
        <span className={className}>
            <FaStar className="w-3 h-3" />
            {rating} {countValue}
        </span>
    )
}

export default ProductRating