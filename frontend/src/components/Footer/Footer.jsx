import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <>
        

<footer>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 mx-auto max-w-screen-xl" />
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-['Montserrat'] mt-[-40px] md:py-8">   
        <div class="sm:flex sm:items-center sm:justify-between w-[570px]">
            <Link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span class="self-center text-xl font-medium whitespace-nowrap ">HackerPlace</span>
            </Link>
        </div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" class="hover:underline mr-4">HackerPlace</Link> All Rights Reserved.</span>
    </div>
</footer>


        </>
    )
}