import Head from "next/head"
import tw from "twin.macro"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Explore from "../components/Explore"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kesegaran COMPFEST</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script> */}
      </Head>

      <main>
        {/* <Fetch keyword={1}/> */}
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
