import Head from "next/head"
import tw from "twin.macro"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SavedMemes from "../components/SavedMemes"

export default function Saved() {
  return (
    <div className="container">
      <Head>
        <title>Saved - KESEGARAN.COMPFEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar page="saved"/>
        <SavedMemes />
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
