import MasonryLayout from "./MasonryLayout"
import Input from "./Input"
import React from 'react'
import { useMemesQuery } from "../generated/graphql"

const Explore = () => {
    return (
        <div className="explore">
          <div className="explore-box">
            <h1>Explore.</h1>
            <Input />
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
                  min-height: 85vh;
                }

                .explore h1 {
                  font-size: 36px;
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
