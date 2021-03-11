import Link from 'next/link'

const Navbar = ({ page }) => {
    return (
        <div className="navbar">
            <div className="navbar-item">
                <Link href="/">KESEGARAN.COMPFEST</Link>
                <div className="navbar-link">
                    <Link href="/">
                        <a className="link-explore">Explore</a>
                    </Link>
                    <Link href="/saved">
                        <a className="link-saved">Saved</a>
                    </Link>
                </div>
            </div>
            <style jsx>
                {`
                    .navbar {
                        -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
                        -moz-box-shadow: 3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
                        box-shadow: 3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
                    }
                      
                    .navbar-item {
                        margin: 0 6rem;
                        display: flex;
                        justify-content: space-between;
                        padding: 1.2rem 0;
                        font-weight: bold;
                        opacity: 0.8;
                    }

                    .navbar-link a{
                        padding: 1rem;
                        transition: .2s;
                    }

                    .navbar-link a:hover {
                        opacity: 1;
                        color: blue;
                    }

                    .link-explore {
                        color: ${page === "explore" ? "blue" : "black"};
                    }

                    .link-saved {
                        color: ${page === "saved" ? "blue" : "black"};
                    }
                `}
            </style>
        </div>
    )
}

export default Navbar