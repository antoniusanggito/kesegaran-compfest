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
                        -webkit-box-shadow: 1px 1px 5px 2px #dbdbdb;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
                        -moz-box-shadow: 1px 1px 5px 2px #dbdbdb;  /* Firefox 3.5 - 3.6 */
                        box-shadow: 1px 1px 5px 2px #dbdbdb;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
                        position: fixed;
                        z-index: 5;
                        width: 100%;
                        background-color: white;
                        top: 0;
                    }
                      
                    .navbar-item {
                        margin: 0 6rem;
                        display: flex;
                        justify-content: space-between;
                        padding: 1.2rem 0;
                        font-weight: bold;
                        opacity: 0.8;
                    }

                    .navbar-link a {
                        padding: 1rem;
                        transition: .2s;
                    }

                    .navbar-link a:hover {
                        opacity: 1;
                        color: blue;
                        transform: scale(1.1);
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