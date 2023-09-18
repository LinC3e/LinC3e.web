import Link from "next/link"

const NavLink = ( { href, title }) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-1  pb-4 font-medium text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-orange-600 hover:underline">
            {title}
        </Link>
    )
}

export default NavLink;