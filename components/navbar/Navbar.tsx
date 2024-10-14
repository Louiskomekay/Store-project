import Container from "@/components/global/Container"
import CartButton from "@/components/navbar/CartButton"
import DarkMode from "./DarkMode"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import LinksDropdown from './LinksDropdown'
import MobileLinksDropdown from "./MobileLinksDropdown"
import { Suspense } from "react"

function Navbar() {
    return (
        <nav className="border-b">
            {/* ------------Desktop nav start------------ */}
            <Container className='max-lg:hidden md:flex flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8'>
                <Logo />
                <Suspense>
                    <NavSearch />
                </Suspense>
                <div className="flex justify-between gap-5">
                    <CartButton />
                    <DarkMode />
                    <LinksDropdown />
                </div>
            </Container>
            {/* ------------Desktop nav end------------ */}

            {/* ------------Mobile nav start------------ */}
            <Container className="sm:hidden block">
                <div className="flex justify-between py-6">
                    <div className="inline-flex gap-3">
                        <MobileLinksDropdown />
                        <Logo />
                    </div>
                    <div className="inline-flex gap-5">
                        <CartButton />
                        <DarkMode />
                    </div>
                </div>
                <div className="pb-6"><NavSearch /></div>
            </Container>
            {/* ------------Mobile nav end------------ */}
        </nav>
    )
}

export default Navbar;