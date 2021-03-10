import { gql, useQuery } from '@apollo/client'
// import memesQuery from '../graphql/memes.graphql'

const Fetch = ({ keyword }) => {
    const GET_MEMES = gql`
        query Memes($keyword : Int) {
            memes(where: {id: $keyword}) {
                title
                image_url
                description
            }
        }  
    `;
    // const GET_MEMES = gql`
    //     query Memes {
    //         memes {
    //         title
    //         image_url
    //         description
    //         }
    //     }        
    // `;
    const { loading, error, data } = useQuery(GET_MEMES);
  

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <ul>
        { data.memes.map((memes, i) => (
            <li key={memes.title}>{memes.title}</li>
        ))}
        </ul>
    )
}

export default Fetch