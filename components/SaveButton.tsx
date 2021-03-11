import { useState } from 'react'

const SaveButton = ({}) => {
    const [saved, setSaved] = useState(false)
    const toggleSave = () => {
        setSaved(!saved)
    }

    return (
        <>
            <button className="btn-save" onClick={toggleSave}>{saved ? "Saved" : "Save"}</button>
            <style jsx>
                {`
                    .btn-save {
                        font-weight: bold;
                        color: ${saved ? "orange" : "black"};
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