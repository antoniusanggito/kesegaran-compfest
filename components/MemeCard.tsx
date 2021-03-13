import { useState } from 'react';
import { useInsertMutation, useDeleteMutation } from '../generated/graphql';

const MemeCard = ({ meme, initState, page, removeChild }) => {
    const [insertMutation, { data: dataIn, loading: loadingIn, error: errorIn }] = useInsertMutation()
    const [deleteMutation, { data: dataDel, loading: loadingDel, error: errorDel }] = useDeleteMutation()
    const [state, setState] = useState(initState)

    const mutate = () => {
        // console.log(state)
        if (!state) {
            insertMutation({
                variables: {
                    id: meme.id
                },
            })
            // console.log("inserting")
        } else { 
            deleteMutation({
                variables: {
                    id: meme.id
                },
            })
            // console.log("deleting")
            if (page === "saved") {
                // console.log("on saved")
                removeChild(meme)
            }
        }
        setState(prevState => !prevState)
    }

    return (
        <div className="meme-card" key={meme.id}>
            <img src={meme.image_url} className="meme-img" />
            <div className="meme-desc">
                <div className="left">
                    <h2>{meme.title}</h2>
                    <p>{meme.description}</p>
                </div>
                <button className="btn-save" onClick={mutate}>
                    {state ? "Saved" : "Save"}
                </button>
            </div>
            <style jsx>
                {`
                    .meme-card {
                        text-align: left;
                        border-radius: 10px;
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

                    .meme-desc h2 {
                        font-weight: bold;
                    }

                    .meme-desc p {
                        font-size: 15px;
                    }

                    .left {
                        padding: 0.4rem;
                    }

                    .btn-save {
                        font-weight: bold;
                        color: ${state ? "orange" : "black"};
                        transition: .2s;
                    }

                    .btn-save:hover {
                        color: orange;
                        transform: scale(1.1);
                    }
                `}
            </style>
        </div>
    )
}

export default MemeCard