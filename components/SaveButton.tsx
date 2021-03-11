import { useEffect, useState } from 'react';
import { useInsertMutation } from '../generated/graphql';

const SaveButton = ({ currentId, initState }) => {
    const [insertMutation, { data, loading, error }] = useInsertMutation({
        variables: {
            id: currentId
        }
    })
    // const [deleteMutation, { delData, delLoading, delError }] = useDeleteMutation({
    //     variables: { 
    //         id: currentId
    //     }
    // })
    const [state, setState] = useState(initState)

    useEffect(() => {
        setState(prevState => !prevState)
        // for (let id in data.insert_user_memes.returning[0].user.user_memes) {
        //     if (data.insert_user_memes.returning[0].user.user_memes[id].meme_id === currentId) {
        //         saved = true
        //     }
        // }
    }, [data])

    return (
        <>
            <button className="btn-save" onClick={() => {
                !state ? console.log("saving") : console.log("already saved")
            }}
                >{state ? "Saved" : "Save"}
            </button>
            <style jsx>
                {`
                    .btn-save {
                        font-weight: bold;
                        color: ${state ? "orange" : "black"};
                        transition: .2s;
                    }

                    .btn-save:hover {
                        color: orange;
                    }
                `}
            </style>
        </>
    )
}

export default SaveButton