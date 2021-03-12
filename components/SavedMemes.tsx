import Link from 'next/link'
import MasonryLayout from './MasonryLayout'
import SaveButton from './SaveButton'
import { useState, useEffect } from 'react'
import { useSavedQuery } from "../generated/graphql"

const SavedMemes = (): JSX.Element => {
    const { data, loading, error } = useSavedQuery()
    const [memeCount, setMemeCount] = useState(1)

    if (loading) return (
      <p>Loading...</p>
    )
    if (error) return (
      <p>Error! ${error.message}</p>
    )

    // const addMemeHandler = (memetoAdd) => {
    //   setMemes([...memes, memeToAdd]);
    // }

    const memeSaved = []
    for (let id in data.users[0].user_memes) {
      memeSaved.push(data.users[0].user_memes[id].meme)
    }

    // useEffect(() => {
    //   setMemeCount(5);
    // }, [])

    const removeChild = (memeSelected) => {
      setMemeCount(memeSaved.filter(meme => meme.id !== memeSelected.id).length)
    }

    const outputHTML = () => {
      if (memeCount === 0) {
        return (
          <div className="box">  
            <p>You have no saved memes. Explore now!</p>
            <Link href="/"><button className="btn-explore">Explore</button></Link>
          </div>
        )
      } else {
        return (
          <MasonryLayout >
            {
              memeSaved.map(meme => { 
                return (
                  <SaveButton key={meme.id} meme={meme} initState={true} page="saved" removeChild={removeChild}/>
                )
              })
            }
          </MasonryLayout>
        )
      }
    }

    return (
        <div className='saved'>
            <h1>Your saved memes.</h1>
            {/* {outputHTML} */}
            {memeCount === 0 ? 
              <div className="box">  
                <p>You have no saved memes. Explore now!</p>
                <Link href="/"><button className="btn-explore">Explore</button></Link>
              </div>
              : <MasonryLayout >
                {
                  memeSaved.map(meme => { 
                    return (
                      <SaveButton key={meme.id} meme={meme} initState={true} page="saved" removeChild={removeChild}/>
                    )
                  })
                }
              </MasonryLayout>
              }
            
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
            `}
          </style>
      </div>
    )
}

export default SavedMemes
