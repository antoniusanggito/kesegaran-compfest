import MasonryLayout from "./MasonryLayout"
import MyComponent from "./MyComponent"
import React from 'react'
import { useMemesQuery } from "../generated/graphql"

const Explore = () => {
    // const { data, loading: memesLoading } = useMemesQuery({
    //   variables: {
    //       keyword: "%st%",
    //     }
    // })
    // const title = document.getElementById('search').value

    return (
        <div className="explore">
          <div className="explore-box">
            <h1>Explore.</h1>
            <MyComponent />
            {/* <form className="explore-form" method="get">
              <input type="text" id="search" placeholder='search for memes...' onKeyUp={(e) => {
                e.preventDefault()
                console.log("Searching")
              }} />
            </form> */}
          </div>
            {/* <MasonryLayout columns={3} gap={15}>
              {
                [...Array(12).keys()].map(key => {
                  const height = 200 + Math.ceil(Math.random() * 300);
              
                  return (
                    <div style={{height: `${height}px`}} />
                  )
                })
              }
            </MasonryLayout> */}
            {/* {memesLoading ? "loading.." : data ?.memes.map(meme => (
              <div>
                <h2>{meme.title}</h2>
                <img src={meme.image_url} className="img-meme" />
              </div>
            ))} */}
            <style jsx>
              {`
                .explore {
                  // position: fixed;
                  // top: 50%;
                  // left: 50%;
                  // -webkit-transform: translate(-50%, -50%);
                  // transform: translate(-50%, -50%);
                  margin: 0 6rem;
                  padding: 3rem 0;
                  // height: 75vh;
                }

                .explore h1 {
                  font-size: 40px;
                  font-weight: bold;
                }

                .explore-box {
                  // padding: 2rem;
                  position: relative;
                  top: 25%;
                  margin-bottom: 3rem;
                  text-align: center;
                }

                img-meme {
                  max-height: 300px;
                  max-width: 300px;
                }
              `}
            </style>
        </div>
    )
}

export default Explore
