import { } from '../../assets/partners/index'
export default function Registration() {

    return(
        <>
            <section className="bg-gray-50 font-['Montserrat']">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<div className="flex flex-col gap-2">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
								Create an account
							</h1>
							<p className="font-light font-medium text-[#444444] opacity-90 ">
							Join the global cybersecurity community by becoming a part of HackerPlace today!
							</p>
							</div>
							<form
								className="space-y-4 md:space-y-6"
							>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-[#444444] text-[18px] font-lato">
										Nickname
									</label>
									<input
										type="text"
										name="username"
										id="username"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-5 h-12"
										placeholder="Username"
										required
									/>
								</div>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-[#444444] text-[18px] font-lato">
										Email
									</label>
									<input
										type="text"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-5 h-12"
										placeholder="Email"
										required
									/>
								</div>
								<div>
									<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-5 h-12"
										required
									/>
								</div>
								<button className="group relative h-11 w-full overflow-hidden rounded-xl bg-violet-600 text-white" type="submit">
									Log in
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}