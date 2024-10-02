import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import { link } from 'fs';

function MobileLinksDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className='flex gap-4 max-w-[100px]'>
                    <LuAlignLeft className='w-6 h-6' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
                {links.map((link) => {
                    const { href, label } = link;
                    return (
                        <DropdownMenuItem key={href}>
                            <Link href={href} className='capitalize'>{label}</Link>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MobileLinksDropdown;