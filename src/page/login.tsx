import { useState } from "react"
import {
    isPermissionGranted,
    requestPermission,
    sendNotification,
} from '@tauri-apps/plugin-notification';
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { fakeAuthProvider } from "../auth/auth";

export const LoginPage = () => {

    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isAgree, setAgree] = useState(false);

    const navigate = useNavigate();



    const agreeHandler = (e: any) => {
        setAgree(!isAgree)
    }



    const loginHandler = async () => {
        if (!username) {
            return toast.error("用户名不能为空", {
                autoClose: 300,
            })
        }

        if (!password) {
            return toast.error("密码不能为空", {
                autoClose: 300,
            })
        }

        fakeAuthProvider.signin(username).then(() => {
            toast.success("登陆成功", {
                autoClose: 300,
                onClose: () => {
                    navigate("/")
                    console.log("hahah")
                }
            });
        });


       






    }



    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <ToastContainer
                position="top-right"
            />
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
                                <input type="checkbox" className=" text-blue-500"
                                    checked={isAgree}
                                    onChange={(e) => agreeHandler(e.target)}
                                />
                            </div>
                            <span className="text-sm text-slate-500 font-medium"> {isAgree} 记住我</span>
                        </label>
                    </div>
                    <div className="mt-6">
                        <button
                            onClick={loginHandler}
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            登录
                        </button>
                    </div>
                </form>

            </div>
        </div>

    )
}