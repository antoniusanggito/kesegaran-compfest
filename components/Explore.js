import ExploreStyles from "../styles/modules/Explore.module.css"

const Explore = () => {
    return (
        <div className={ExploreStyles.explore}>
            <h1>Explore.</h1>
            <form className={ExploreStyles.form} method="get">
                <input type="text" placeholder='search for memes...'/>
            </form>
        </div>
    )
}

export default Explore
