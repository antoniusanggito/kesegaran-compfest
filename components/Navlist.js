import Link from 'next/link'

const Navlist = () => {
    return (
        <div className='navlist'>
            <Link href="/">Explore</Link>
            <Link href="/saved">Saved</Link>
        </div>
    )
}

export default Navlist
