import MasonryLayout from "./MasonryLayout"
import MemeCard from "./MemeCard"
import { useState } from 'react'
import { useMemesQuery } from "../generated/graphql"

const Input = ({ state }) => {
  const [input, setInput] = useState('')
  const modInput = "%" + input + "%"
  const { data, loading: memesLoading } = useMemesQuery(
    {
    variables: {
        keyword: modInput,
      }
    }
  )

  if (memesLoading) return (
    <>Loading...</>
  )

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const memeList = []
  const memeSaved = []
  for (let id in data.users[0].user_memes) {
    memeSaved.push(data.users[0].user_memes[id].meme_id)
  }
  for (let id in data.memes) {
    memeList.push(data.memes[id])
  }
  // console.log(memeList)
  // console.log(memeSaved)

  return (
    <>
      <h1>Explore.</h1>
      <form className="explore-form">
        <input value={input} placeholder='search for memes...' onInput={handleInput}/>
      </form>
      { (input !== "" || (input === "" && state)) &&
        <MasonryLayout >
          {
            memeList.map(meme => {
              return (
                <MemeCard meme={meme} initState={memeSaved.includes(meme.id)} page="explore" removeChild={()=>{}} />
              )
            })
          }
        </MasonryLayout>
      }
      <style jsx>
        {`
          h1 {
            font-size: 36px;
            font-weight: bold;
          }

          .meme-card {
            font-weight: bold;
            text-align: left;
            border-radius: 15px;
          }

          .meme-card h2 {
            padding: 0 0.2rem;
          }

          .explore-form {
            margin: 2rem;
          }

          .explore-form input {
            border: 1px solid #cccccc;
            width: 25rem;
            height: 40px;
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
    </>
  );
}

export default Input