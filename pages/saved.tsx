import Head from "next/head"
import tw from "twin.macro"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import YourSaved from "../components/YourSaved"

export default function Saved() {
  return (
    <div>
      <Head>
        <title>Saved Memes - Kesegaran COMPFEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar page="saved"/>
        <YourSaved />
        <Footer />
      </main>
    </div>
  )
}
