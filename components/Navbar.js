import Link from 'next/link'
import NavbarStyles from "../styles/modules/Navbar.module.css"
import Navlist from "./Navlist"

const Navbar = () => {
    return (
        <div className={NavbarStyles.navbar}>
            <Link href="/">KESEGARAN.COMPFEST</Link>
            <Navlist />
        </div>
    )
}

export default Navbar