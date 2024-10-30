import EmptyList from '@/components/global/EmptyList';
import { deleteProductAction, fetchAdminProducts } from '@/utils/actions';
import Link from 'next/link';

import { formatCurrency } from '@/utils/format';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';

async function AdminProductsPage() {
    const items = await fetchAdminProducts();
    if (items.length === 0) return <EmptyList />;

    return (
        <section>
            <Table>
                <TableCaption className='capitalize'>
                    Total prodcuts:{items.length}
                </TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {items.map((item) => {
                        const { id: productID, name, company, price } = item;
                        return <TableRow>
                            <TableCell>
                                <Link href={`/products/${productID}`} className='underline text-muted-foreground tracking-wide capitalize'>
                                    {name}
                                </Link>
                            </TableCell>
                            <TableCell>{company}</TableCell>
                            <TableCell>{formatCurrency(price)}</TableCell>
                            <TableCell className='flex items-center gap-x-2'>
                                <Link href={`/admin/products/${productID}/edit`}>
                                    <IconButton actionType='edit' />
                                </Link>
                                <DeleteProduct productID={productID} />
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </section>
    )
}

function DeleteProduct({ productID }: { productID: string }) {
    const deleteProduct = deleteProductAction.bind(null, { productID });
    return <FormContainer action={deleteProduct}>
        <IconButton actionType='delete' />
    </FormContainer>
}

export default AdminProductsPage;