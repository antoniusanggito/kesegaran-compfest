import Link from 'next/link'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-item">
                <Link href="/">KESEGARAN.COMPFEST</Link>
                <div className="medsos">
                    <a href="#">F</a>
                    <a href="#">T</a>
                    <a href="#">Y</a>
                    <a href="#">I</a>
                    <a href="#">LI</a>
                    <a href="#">L</a>
                </div>
                <p>@ 2021 Antonius Anggito Arissaputro</p>
            </div>
            <style jsx>
                {`
                    .footer {
                        background-color: #DCDCDC;
                        position:relative;
                        bottom:0;
                        width:100%;
                    }

                    .footer-item {
                        color: grey;
                        margin: 0 6rem;
                        display: flex;
                        justify-content: space-between;
                        padding: 1.3rem 0;
                        font-weight: bold;
                    }

                    .footer-item p {
                        font-weight: lighter;
                    }

                    .footer-item a:hover {
                        color: black;
                    }
                    
                    .medsos a {
                        padding: 1rem;
                    }

                    .medsos img {
                        width: 10px;
                        height: 10px;
                    }

                    @media only screen and (max-width: 600px) {
                        .footer-item {
                          flex-direction: column;
                          text-align: center;
                        }

                        .medsos a {
                            padding: 0.4rem;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Footer
