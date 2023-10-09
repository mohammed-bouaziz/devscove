import Link from "next/link"


const Header = () => {
    return (
        <div className="flex items-center justify-center text-lg font-hind font-bold">
            <div className="flex space-x-9 text-lg font-hind font-bold">
            <Link href="/">
                Home
            </Link>
                {/* <Link href="courses/">
                    Courses
                </Link> */}
                <Link href="about/">
                    About
                </Link>
                <Link href="subscribe/">
                    Subscribe
                </Link>
            </div>
        </div>
    )
}

export default Header