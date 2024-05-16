import { } from '../../assets/partners/index'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import AuthContext from '../../context/AutoContext'
export default function Authorization() {



	const {loginUser} = useContext(AuthContext)
	const handleSubmit = e => {
	  e.preventDefault()
	  const email = e.target.email.value
	  const password = e.target.password.value
  
	  email.length > 0 && loginUser(email, password)
  
	  console.log(email)
	  console.log(password)
	 
	}
    return(
        <>
            <section className="bg-gray-50 font-lato">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<div className="flex flex-col gap-2">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
							Log in
							</h1>
							<p className="font-light font-medium text-[#444444] opacity-90 ">
							Log in to your account
							</p>
							</div>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit}
							>
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
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="remember"
												aria-describedby="remember"
												type="checkbox"
												className="w-4 h-4 border border-[#444] rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
											/>
										</div>
										<div className="ml-3 text-sm">
											<label htmlFor="remember" className="text-[#444]">
												Remember me
											</label>
										</div>
									</div>
									<a
										href="#"
										className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Forget the password?
									</a>
								</div>
								<button className="group relative h-11 w-full overflow-hidden rounded-xl bg-violet-600 text-white" type="submit">
									Log in
								</button>
								<p className="text-sm font-light text-[#444] opacity-80">
									Do not have an account?
									<Link to="/registration"
										className="font-medium hover:underline text-[#444] ml-2"
									>
										Create account
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}