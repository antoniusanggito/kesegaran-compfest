import MasonryLayout from "./MasonryLayout"
import SaveButton from "./SaveButton"
import { useState } from 'react'
import { useMemesQuery } from "../generated/graphql"

const MyComponent = () => {
  const [input, setInput] = useState('')
  const modInput = "%" + input + "%"
  const { data, loading: memesLoading } = useMemesQuery({
    variables: {
        keyword: modInput,
      }
  })

  return (
    <div>
      <form className="explore-form">
        <input value={input} placeholder='search for memes...' onInput={e => {
            setInput(e.target.value)
        }}/>
      </form>
      <MasonryLayout columns={3} gap={20}>
        {
          memesLoading ? "loading.." : data ?.memes.map(meme => {
            return (
              <div className="meme-card" key={meme.title}>
                <img src={meme.image_url} className="meme-img" />
                <div className="meme-desc">
                  <h2>{meme.title}</h2>
                  <SaveButton />
                </div>
              </div>
            )
          })
        }
      </MasonryLayout>
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

export default MyComponent