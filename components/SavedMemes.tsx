import Link from 'next/link'
import MasonryLayout from './MasonryLayout'
import SaveButton from './SaveButton'
import { useSavedQuery } from "../generated/graphql"

const SavedMemes = () => {
  const { data, loading, error } = useSavedQuery()

  const recieved = loading ? "loading" : data

  const memeSaved = []
  if (recieved !== "loading") {
    for (let id in data.users[0].user_memes) {
      memeSaved.push(data.users[0].user_memes[id].meme)
    }
    console.log(memeSaved)
  }

    return (
        <div className='saved'>
            <h1>Your saved memes.</h1>
            {memeSaved.length === 0 ? console.log("kosong") : console.log("print!")}
            {/* <div className="box">  
              <p>You have no saved memes. Explore now!</p>
              <Link href="/"><button className="btn-explore">Explore</button></Link>
            </div> */}
            
            <MasonryLayout >
            {
              memeSaved.map(meme => {
                return (
                  <div className="meme-card" key={meme.id}>
                    <img src={meme.image_url} className="meme-img" />
                    <div className="meme-desc">
                      <h2>{meme.id} {meme.title}</h2>
                      <SaveButton currentId={meme.id} initState={memeSaved.includes(meme.id)}/>
                    </div>
                  </div>
                )
              })
            }
          </MasonryLayout>
          <style jsx>
            {`
              .saved {
                text-align: center;
                margin: 0 6rem;
                min-height: 85vh;
              }

              .saved h1 {
                font-size: 36px;
                font-weight: bold;
                margin: 2rem;
              }

              .box {
                border-radius: 10px;
                background-color: lightblue;
                width: 100%;
                padding: 3rem;
                margin: 3rem auto;
              }

              .btn-explore {
                margin-top: 0.5rem;
                background-color: blue;
                padding: 0.7rem 1.5rem;
                color: white;
                border-radius: 10px;
                transition: .2s;
              }

              .btn-explore:hover {
                filter: brightness(85%);
              }

              .meme-card {
                font-weight: bold;
                text-align: left;
                border-radius: 10px;
              }

              .meme-card h2 {
                padding: 0 0.2rem;
              }

              .meme-img {
                min-width: 100%;
                max-height: 100%;
                border-radius: 10px;
              }

              .meme-desc {
                display: flex;
                justify-content: space-between;
              }
            `}
          </style>
      </div>
      )
}

export default SavedMemes
