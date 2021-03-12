import Head from "next/head"
import tw from "twin.macro"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Explore from "../components/Explore"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KESEGARAN.COMPFEST</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script> */}
      </Head>

      <main>
        <Navbar page="explore"/>
        <Explore />
        <Footer />
      </main>
      <style jsx>
        {`
          .container {
            height: 100%;
          }
        `}
      </style>
    </div>
  )
}
