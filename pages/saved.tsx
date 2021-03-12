import Head from "next/head"
import tw from "twin.macro"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SavedMemes from "../components/SavedMemes"
import { useSavedQuery } from "../generated/graphql"

export default function Saved() {
  // const { data, loading, error } = useSavedQuery()

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  // const count = data.users[0].user_memes.length
  
  // const memeSaved = []
  // for (let id in data.users[0].user_memes) {
  //   memeSaved.push(data.users[0].user_memes[id].meme)   
  // }

  return (
    <div className="container">
      <Head>
        <title>Saved Memes - Kesegaran COMPFEST</title>
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
