import MasonryLayout from "./MasonryLayout"
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
            // const height = 200 + Math.ceil(Math.random() * 300);
        
            return (
              <div className="meme-card">
                <img src={meme.image_url} className="meme-img" />
                <h2>{meme.title}</h2>
              </div>    
              // <div style={{height: `${height}px`}} />
            )
          })
        }
      </MasonryLayout>
      <style jsx>
        {`
          .meme-card {
            font-weight: bold;
            text-align: left;
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

          meme-img {
            width: 200px;
            height: auto;
          }
        `}
      </style>
    </div>
  );
}

export default MyComponent