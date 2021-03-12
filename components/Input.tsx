import MasonryLayout from "./MasonryLayout"
import SaveButton from "./SaveButton"
import { useState } from 'react'
import { useMemesQuery } from "../generated/graphql"

const Input = () => {
  const [input, setInput] = useState('')
  const modInput = "%" + input + "%"
  const { data, loading: memesLoading } = useMemesQuery(
    {
    variables: {
        keyword: modInput,
      }
    }
  )

  const recieved = memesLoading ? "loading" : data
  console.log(recieved)

  const memeList = []
  const memeSaved = []
  if (recieved !== "loading") {
    for (let id in data.users[0].user_memes) {
      memeSaved.push(data.users[0].user_memes[id].meme_id)
    }
    for (let id in data.memes) {
      memeList.push(data.memes[id])
    }
    // console.log(memeList)
    console.log(memeSaved)
  }

  return (
    <div>
      <form className="explore-form">
        <input value={input} placeholder='search for memes...' onInput={e => {
            setInput(e.target.value)
        }}/>
      </form>
      { input !== "" &&
        <MasonryLayout >
          {
            memeList.map(meme => {
              return (
                <SaveButton meme={meme} initState={memeSaved.includes(meme.id)} page="explore" removeChild={()=>{}} />
              )
            })
          }
        </MasonryLayout>
      }
      <style jsx>
        {`
          .meme-card {
            font-weight: bold;
            text-align: left;
            border-radius: 10px;
          }

          .meme-card h2 {
            padding: 0 0.2rem;
          }

          .explore-form {
            margin: 2rem;
          }

          .explore-form input {
            border: 1px solid #cccccc;
            width: 400px;
            height: 35px;
            padding: 10px;
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
  );
}

export default Input