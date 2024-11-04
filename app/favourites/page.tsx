import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavourites } from "@/utils/actions";

async function FavouritesPage() {
    const favorites = await fetchUserFavourites();
    if (favorites.length === 0) return <SectionTitle text="You have no favorites yet" />

    return (
        <div>
            <SectionTitle text="Favourites" />
            <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
        </div>
    )
}

export default FavouritesPage;