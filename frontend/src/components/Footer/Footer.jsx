export default function Footer() {
    return(
        <>
        

<footer>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 mx-auto max-w-screen-xl" />
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-['Montserrat'] mx-auto p-4 md:py-8">   
        <div class="sm:flex sm:items-center sm:justify-between w-[570px]">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <span class="self-center text-xl font-medium whitespace-nowrap ">HackerPlace</span>
            </a>
            <ul class="flex flex-row justify-around w-96 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline mr-4">Flowbite™</a> All Rights Reserved.</span>
    </div>
</footer>


        </>
    )
}