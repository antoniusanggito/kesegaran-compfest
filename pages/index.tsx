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
      </Head>

      <main>
        {/* <Memes /> */}
        <Navbar />
        <Explore />
        <Footer />
      </main>
    </div>
  )
}
