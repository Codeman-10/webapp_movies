import requests from "../Utils/requests"
import {useRouter} from 'next/router'
function Nav() {
    const router =useRouter();
    return (
        <nav>
            <div className="flex text-2xl px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) =>
                (
                    <h2
                        className="cursor-pointer transition duration-100 
                        transform hover:scale-125 hover:text-white active:text-red-500"
                        key={key}
                        onClick={()=>router.push(`/?genre=${key}`)}
                        >
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A]  h-10 w-1/12">
            </div>
        </nav>
    )
}

export default Nav
