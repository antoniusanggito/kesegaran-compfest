import Link from 'next/link'
import { useMemesQuery } from "../generated/graphql"

const YourSaved = () => {
    const { data, loading: memesLoading } = useMemesQuery()

    return (
        <div className='saved'>
            <h1>Your saved memes.</h1>
            <div className="box">
              <p>You have no saved memes. Explore now!</p>
              <Link href="/"><button className="btn-explore">Explore</button></Link>
            </div>
            {/* <Button /> */}
            
            <style jsx>
              {`
                .saved {
                  text-align: center;
                  margin: 0 6rem;
                  height: 80vh;
                  // position: fixed;
                  // top: 50%;
                  // left: 50%;
                  // -webkit-transform: translate(-50%, -50%);
                  // transform: translate(-50%, -50%);
                }

                .saved h1 {
                  font-size: 40px;
                  font-weight: bold;
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

export default YourSaved
