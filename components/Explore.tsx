import Input from "./Input"
import { useState } from 'react'

const Explore = () => {
    const [state, setState] = useState(false)
    const toggleOnClass = () => {
      setState(true)
    }

    return (
        <div className="explore">
          <div className={state ? 'explore-box-up': 'explore-box'} onFocus={toggleOnClass} >
            <Input state={state}/>
          </div>
            <style jsx>
              {`
                .explore {
                  margin: 0 6rem;
                  min-height: 85vh;
                }

                .explore-box {
                  position: relative;
                  padding-top: 12rem;
                  text-align: center;
                }

                .explore-box-up {
                  padding-top: 3rem;
                  position: relative;
                  text-align: center;
                }

                @media only screen and (max-width: 600px) {
                  .explore {
                    margin: 0 2rem;
                  }
                }
              `}
            </style>
        </div>
    )
}

export default Explore
