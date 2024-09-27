import Container from "../global/Container"
import CartButton from "./CartButton"
import DarkMode from "./DarkMode"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import LinksDropdown from './LinksDropdown'

function Navbar() {
    return (
        <nav className="border-b">
            <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8'>
                <Logo />
                <NavSearch />
                <div>
                    <CartButton />
                    <DarkMode />
                    <LinksDropdown />
                </div>
            </Container>
        </nav>
    )
}

export default Navbar