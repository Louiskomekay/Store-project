import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavoriteID } from '@/utils/actions';
import FavouriteToggleForm from './FavouriteToggleForm';

async function FavouriteToggleButton({ productID }: { productID: string }) {
    const { userId } = auth();
    if (!userId) return <CardSignInButton />
    const favoriteId = await fetchFavoriteID({ productId: productID })
    return (
        <FavouriteToggleForm favoriteId={favoriteId} productId={productID}/>
    )
}

export default FavouriteToggleButton;