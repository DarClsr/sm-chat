import { useState } from "react"



export const LoginPage = () => {

    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isAgree, setAgree]=useState(false);



    const agreeHandler=(e)=>{
        console.log(e.value,'agree handler')
        setAgree(!isAgree)
    }



        return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full  m-auto bg-white dark:bg-slate-800/60 rounded shadow-lg ring-2 ring-slate-300/50 dark:ring-slate-700/50 lg:max-w-md">
                <div className="text-center p-6 bg-slate-900 rounded-t">
                    <a href="index.html">

                    </a>
                    <h3 className="font-semibold text-white text-xl mb-1">Let's Get Started CHAT-Wind</h3>
                    <p className="text-xs text-slate-400">Sign in to continue to CHAT-Wind.</p>
                </div>

                <form className="p-6">
                    <div>
                        <label htmlFor="email" className="label">Email</label>
                        <input type="email" id="email"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control dark:bg-slate-800/60 dark:border-slate-700/50" placeholder="Your Email" required />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="label">Your password</label>
                        <input type="password" id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control dark:bg-slate-800/60 dark:border-slate-700/50" placeholder="Password" required />
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline">忘记密码?</a>
                    <div className="block mt-3">
                        <label className="custom-label">
                            <div className="bg-white dark:bg-slate-700 dark:border-slate-600 border border-slate-200 rounded w-4 h-4  inline-block leading-4 text-center -mb-[3px]">
                                <input type="checkbox" className="hidden"
                                onChange={(e)=>agreeHandler(e.target)}
                                />
                                <i className="fas fa-check hidden text-xs text-slate-700 dark:text-slate-300"></i>
                            </div>
                            <span className="text-sm text-slate-500 font-medium">记住我</span>
                        </label>
                    </div>
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            登录
                        </button>
                    </div>
                </form>

            </div>
        </div>

        )
}