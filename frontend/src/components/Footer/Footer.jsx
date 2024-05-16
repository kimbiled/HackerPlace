export default function Footer() {
    return(
        <>
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                  <div className="mb-6 md:mb-0">
                      <a href="https://flowbite.com/" className="flex items-center">
                          <span className="self-center text-2xl font-semibold whitespace-nowrap">ShekerEmes</span>
                      </a>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                      <div>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Ресурсы</h2>
                          <ul className="text-gray-500  font-medium">
                              <li className="mb-4">
                                  <a href="https://flowbite.com/" className="hover:underline">Новостные порталы</a>
                              </li>
                              <li>
                                  <a href="https://tailwindcss.com/" className="hover:underline">Статьи</a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Подписаться на нас</h2>
                          <ul className="text-gray-500  font-medium">
                              <li className="mb-4">
                                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Instagram</a>
                              </li>
                              <li>
                                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Telegram</a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Права</h2>
                          <ul className="text-gray-500 font-medium">
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">Политика конфидециальности</a>
                              </li>
                              <li>
                                  <a href="#" className="hover:underline">Правила &amp; Условия</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">ShekerEmes</a>. Все права защищены.
                  </span>
                  
              </div>
            </div>
        </footer>
        </>
    )
}