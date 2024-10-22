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
import UserIcon from './UserIcon';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignOutLink from './SignOutLink';
import { auth } from '@clerk/nextjs/server'

function LinksDropdown() {
    const { userId } = auth();
    const isAdminUser = userId === process.env.ADMIN_USER_ID;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex gap-4 max-w-[100px]'>
                    <LuAlignLeft className='w-6 h-6' />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
                {/* SIGNED OUT MENU ITEM */}
                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode='modal'>
                            <button className='w-full text-left'>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignUpButton mode='modal'>
                            <button className='w-full text-left'>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                {/* SIGNED IN MENU ITEM */}
                <SignedIn>
                    {links.map((link) => {
                        const { href, label } = link;
                        if (label === 'dashbaord' && !isAdminUser) null;

                        return (
                            <DropdownMenuItem key={href}>
                                <Link href={href} className='capitalize'>{label}</Link>
                            </DropdownMenuItem>
                        )
                    })}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignOutLink />
                    </DropdownMenuItem>
                </SignedIn>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LinksDropdown;