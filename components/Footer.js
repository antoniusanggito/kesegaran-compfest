import Link from 'next/link'
import FooterStyles from "../styles/modules/Footer.module.css"

const Footer = () => {
    return (
        <div className={FooterStyles.footer}>
            <Link href="/">KESEGARAN.COMPFEST</Link>
            <div className={FooterStyles.medsos}>
                <a href="#">F</a>
                <a href="#">T</a>
                <a href="#">Y</a>
                <a href="#">I</a>
                <a href="#">LI</a>
                <a href="#">L</a>
            </div>
            <p>@ 2021 Antonius Anggito Arissaputro</p>
        </div>
    )
}

export default Footer
