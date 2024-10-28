

export const HomePage = () => {

    return (
            <div className="w-full mx-auto px-2  h-[100vh]  relative  overflow-hidden ">
                <div className="grid lg:grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-3 mb-4 h-[100vh]">
                        <div className="card h-full">
                            <div className="card-header p-0 border-0">
                                <div className="border-b border-dashed border-gray-200 dark:border-gray-700 flex flex-wrap justify-center">
                                    <ul className="-mb-px grid grid-cols-3 place-content-stretch w-full" id="myTab" data-tabs-toggle="#ChatBox" role="tablist">
                                        <li className="mr-2 flex items-center col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-1" role="presentation">
                                            <button className="flex items-center w-full py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="Chat-tab" data-tabs-target="#Chat" type="button" role="tab" aria-controls="Chat" aria-selected="true"><i className="ti ti-mail mr-1 text-xl -mt-1"></i>Chat</button>
                                        </li>
                                        <li className="mr-2" role="presentation col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-1">
                                            <button className="flex items-center w-full py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="UserContacts-tab" data-tabs-target="#UserContacts" type="button" role="tab" aria-controls="UserContacts" aria-selected="false"><i className="ti ti-message-dots mr-1 text-xl -mt-1"></i>Contacts</button>
                                        </li>
                                        <li className="" role="presentation col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-1">
                                            <button className="flex items-center w-full py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="UserCalls-tab" data-tabs-target="#UserCalls" type="button" role="tab" aria-controls="UserCalls" aria-selected="false"><i className="ti ti-video mr-1 text-xl -mt-1"></i>Calls</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div id="ChatBox" className="h-full" data-simplebar>
                                    <div className="" id="Chat" role="tabpanel" aria-labelledby="Chat-tab">
                                        <ul className="list-group">
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 dark:border-slate-700 p-4 unread bg-slate-50 dark:bg-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <span className="absolute text-green-500 -left-1 -top-1">
                                                                <svg width="12" height="12">
                                                                    <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                                </svg>
                                                            </span>
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Mary Schneider</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-800 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">Good morning! Congratulations Friend Congratulations Friend</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <span className="w-4 h-4 rounded-full bg-green-500 text-white text-xs font-medium text-center inline-block">3</span>
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">07:30 AM</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <span className="absolute text-slate-300 -left-1 -top-1">
                                                                <svg width="12" height="12">
                                                                    <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                                </svg>
                                                            </span>
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Victor Harrison</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">Good morning! Congratulations Friend Congratulations Friend</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">07:10 AM</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <span className="absolute text-slate-300 -left-1 -top-1">
                                                                <svg width="12" height="12">
                                                                    <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                                </svg>
                                                            </span>
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">David Ward</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">Good morning! Congratulations Friend Congratulations Friend</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">04 Apr</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <span className="absolute text-green-500 -left-1 -top-1">
                                                                <svg width="12" height="12">
                                                                    <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                                </svg>
                                                            </span>
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Virgil Locklin</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">Good morning! Congratulations Friend Congratulations Friend</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">03 Apr</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <span className="absolute text-slate-300 -left-1 -top-1">
                                                                <svg width="12" height="12">
                                                                    <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                                </svg>
                                                            </span>
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">John Martinez</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">Good morning! Congratulations Friend Congratulations Friend</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">2 Apr</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hidden" id="UserContacts" role="tabpanel" aria-labelledby="UserContacts-tab">
                                        <ul className="list-group">
                                            <li className="px-4 py-2 border-b border-dashed border-slate-200 dark:border-slate-700"><span className="font-medium dark:text-slate-300">A</span></li>
                                            <li className="list-group-item items-center flex p-4">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Amy Silver</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <button id="userSettings-1" data-dropdown-toggle="userSetting-1" className="mr-2" type="button"><i className="fas fa-ellipsis-vertical dark:text-slate-400"></i></button>

                                                    <div id="userSetting-1" className="hidden z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="userSettings-1">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex p-4">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">August Johnson</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <button id="userSettings-2" data-dropdown-toggle="userSetting-2" className="mr-2" type="button"><i className="fas fa-ellipsis-vertical dark:text-slate-400"></i></button>

                                                    <div id="userSetting-2" className="hidden z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="userSettings-2">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex p-4">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Albert Schneider</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <button id="userSettings-3" data-dropdown-toggle="userSetting-3" className="mr-2" type="button"><i className="fas fa-ellipsis-vertical dark:text-slate-400"></i></button>

                                                    <div id="userSetting-3" className="hidden z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="userSettings-3">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="px-4 py-2 border-b border-t border-dashed border-slate-200 dark:border-slate-700"><span className="font-medium dark:text-slate-300">B</span></li>
                                            <li className="list-group-item items-center flex p-4">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Beulah Haines</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <button id="userSettings-4" data-dropdown-toggle="userSetting-4" className="mr-2" type="button"><i className="fas fa-ellipsis-vertical dark:text-slate-400"></i></button>

                                                    <div id="userSetting-4" className="hidden z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="userSettings-4">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="px-4 py-2 border-b border-t border-dashed border-slate-200 dark:border-slate-700"><span className="font-medium dark:text-slate-300">C</span></li>
                                            <li className="list-group-item items-center flex p-4">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Christian Turner</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <button id="userSettings-5" data-dropdown-toggle="userSetting-5" className="mr-2" type="button"><i className="fas fa-ellipsis-vertical dark:text-slate-400"></i></button>

                                                    <div id="userSetting-5" className="hidden z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="userSettings-5">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex p-4">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Carolyn Sholar</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <button id="userSettings-6" data-dropdown-toggle="userSetting-6" className="mr-2" type="button"><i className="fas fa-ellipsis-vertical dark:text-slate-400"></i></button>

                                                    <div id="userSetting-6" className="hidden z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="userSettings-6">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="px-4 py-2 border-b border-t border-dashed border-slate-200 dark:border-slate-700"><span className="font-medium dark:text-slate-300">D</span></li>
                                            <li className="list-group-item items-center flex p-4">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Daniel Reeves</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <button id="userSettings-7" data-dropdown-toggle="userSetting-7" className="mr-2" type="button"><i className="fas fa-ellipsis-vertical dark:text-slate-400"></i></button>

                                                    <div id="userSetting-7" className="hidden z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="userSettings-7">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex p-4">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Douglas Garcia</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <button id="userSettings-8" data-dropdown-toggle="userSetting-8" className="mr-2" type="button"><i className="fas fa-ellipsis-vertical dark:text-slate-400"></i></button>

                                                    <div id="userSetting-8" className="hidden z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="userSettings-8">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex p-4">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Dan Schmidt</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <button id="userSettings-9" data-dropdown-toggle="userSetting-9" className="mr-2" type="button"><i className="fas fa-ellipsis-vertical dark:text-slate-400"></i></button>

                                                    <div id="userSetting-9" className="hidden z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 text-left" aria-labelledby="userSettings-9">
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Block</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hidden" id="UserCalls" role="tabpanel" aria-labelledby="UserCalls-tab">
                                        <ul className="list-group">
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Mary Schneider</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">12 Apr, 2022</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <i className="ti ti-phone text-green-500"></i>
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">01:07:30 min</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Victor Harrison</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">11 Apr, 2022</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <i className="ti ti-phone text-red-500"></i>
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">17:04 min</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">David Ward</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">10 Apr, 2022</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <i className="ti ti-phone text-red-500"></i>
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">10:33 min</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">Virgil Locklin</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">09 Apr, 2022</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <i className="ti ti-video text-green-500"></i>
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">02:47 min</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                                <a href="">
                                                    <div className="flex items-center">
                                                        <div className="w-9 h-9 rounded relative">
                                                            <img className="w-full h-full overflow-hidden object-cover rounded object-center" src="https://picsum.photos/200" alt="logo" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <div className="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                                <h5 className=" font-medium text-sm">John Martinez</h5>
                                                            </div>
                                                            <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">08 Apr, 2022</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="ml-auto self-center text-center">
                                                    <i className="ti ti-video text-red-500"></i>
                                                    <p className="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">21:57 min</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-9 h-[100vh]">
                        <div className="card mb-4 overflow-y-auto h-full">
                            <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-full bg-red-500">
                            <div className="flex sm:items-center justify-between pb-4 border-b border-dashed border-gray-200 dark:border-slate-700 h-[100px]">
                                    <div className="relative flex items-center space-x-4">
                                        <div className="relative">
                                            <span className="absolute text-green-500 right-0 bottom-0">
                                                <svg width="14" height="14">
                                                    <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                                                </svg>
                                            </span>
                                            <img src="https://picsum.photos/200" alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
                                        </div>
                                        <div className="flex flex-col leading-tight">
                                            <div className="text-xl mt-1 flex items-center font-medium">
                                                <span className="text-gray-700 mr-3 dark:text-slate-200">Anderson Vanhron</span>
                                            </div>
                                            <span className="text-sm text-gray-500">online</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button type="button" className="inline-flex items-center justify-center h-10 w-10 transition duration-500 ease-in-out text-gray-400 hover:text-gray-500 focus:outline-none">
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <button type="button" className="inline-flex items-center justify-center h-10 w-10 transition duration-500 ease-in-out text-gray-400 hover:text-gray-500 focus:outline-none">
                                            <i className="fas fa-phone"></i>
                                        </button>
                                        <button type="button" className="inline-flex items-center justify-center h-10 w-10 transition duration-500 ease-in-out text-gray-400 hover:text-gray-500 focus:outline-none">
                                            <i className="fas fa-video"></i>
                                        </button>
                                        <button type="button" className="inline-flex items-center justify-center h-10 w-10 transition duration-500 ease-in-out text-gray-400 hover:text-gray-500 focus:outline-none">
                                            <i className="fas fa-ellipsis-vertical dark:text-slate-400"></i>
                                        </button>
                                    </div>
                                </div>
                                <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto h-[calc(100vh - 200px)] " data-simplebar>
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start font-medium">
                                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none border border-gray-100 bg-gray-50 text-gray-600 dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400">Can be verified on any platform using docker</span></div>
                                            </div>
                                            <img src="https://picsum.photos/200" alt="My profile" className="w-8 h-8 rounded-full order-1" />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end justify-end">
                                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end font-medium">
                                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-500 text-white">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
                                            </div>
                                            <img src="https://picsum.photos/200" alt="My profile" className="w-8 h-8 rounded-full order-2" />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                                                <div><span className="px-4 py-2 rounded-lg inline-block border border-gray-100 bg-gray-50 text-gray-600 font-medium dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400">Command was run with root privileges. I'm sure about that.</span></div>
                                                <div><span className="px-4 py-2 rounded-lg inline-block border border-gray-100 bg-gray-50 text-gray-600 font-medium dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400">I've update the description so it's more obviously now</span></div>
                                            </div>
                                            <img src="https://picsum.photos/200" alt="My profile" className="w-8 h-8 rounded-full order-1" />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end justify-end">
                                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
                                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-500 text-white font-medium">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks</span></div>
                                            </div>
                                            <img src="https://picsum.photos/200" alt="My profile" className="w-8 h-8 rounded-full order-2" />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none border border-gray-100 bg-gray-50 text-gray-600 font-medium dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400">Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :)</span></div>
                                            </div>
                                            <img src="https://picsum.photos/200" alt="My profile" className="w-8 h-8 rounded-full order-1" />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end justify-end">
                                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
                                                <div><span className="px-4 py-2 rounded-lg inline-block bg-blue-500 text-white font-medium ">Are you using sudo?</span></div>
                                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-500 text-white font-medium ">Run this command sudo chown -R `whoami` /Users/ your_user_profile /.npm-global/ then install the package globally without using sudo</span></div>
                                            </div>
                                            <img src="https://picsum.photos/200" alt="My profile" className="w-8 h-8 rounded-full order-2" />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                                                <div><span className="px-4 py-2 rounded-lg inline-block border border-gray-100 bg-gray-50 text-gray-600 font-medium dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400">It seems like you are from Mac OS world. There is no /Users/ folder on linux 😄</span></div>
                                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none border border-gray-100 bg-gray-50 text-gray-600 font-medium dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400">I have no issue with any other packages installed with root permission globally.</span></div>
                                            </div>
                                            <img src="https://picsum.photos/200" alt="My profile" className="w-8 h-8 rounded-full order-1" />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end justify-end">
                                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
                                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-500 text-white font-medium">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
                                            </div>
                                            <img src="https://picsum.photos/200" alt="My profile" className="w-8 h-8 rounded-full order-2" />
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="flex items-end">
                                            <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                                                <div><span className="px-4 py-2 rounded-lg inline-block border border-gray-100 bg-gray-50 text-gray-600 font-medium dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400">I get the same error on Arch Linux (also with sudo)</span></div>
                                                <div><span className="px-4 py-2 rounded-lg inline-block border border-gray-100 bg-gray-50 text-gray-600 font-medium dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400">I also have this issue, Here is what I was doing until now: #1076</span></div>
                                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none border border-gray-100 bg-gray-50 text-gray-600 font-medium dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400">even i am facing</span></div>
                                            </div>
                                            <img src="https://picsum.photos/200" alt="My profile" className="w-8 h-8 rounded-full order-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-dashed border-gray-200 pt-4 mb-2 sm:mb-0 dark:border-slate-700 h-[100px]">
                                    <div className="relative flex">
                                        <span className="absolute inset-y-0 flex items-center">
                                            <button type="button" className="z-10 inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-400 hover:text-gray-500 focus:outline-none">
                                                <i className="fas fa-microphone"></i>
                                            </button>
                                        </span>
                                        <input type="text" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-400 pl-12 bg-gray-50 dark:bg-slate-700 rounded-md py-2 border border-gray-200 dark:border-slate-800" />
                                            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                                                <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-400 hover:text-gray-500 focus:outline-none">
                                                    <i className="fas fa-paperclip"></i>
                                                </button>
                                                <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-400 hover:text-gray-500 focus:outline-none">
                                                    <i className="fas fa-camera"></i>
                                                </button>
                                                <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-400 hover:text-gray-500 focus:outline-none">
                                                    <i className="fas fa-face-smile"></i>
                                                </button>
                                                <button type="button" className="inline-flex items-center justify-center rounded-md px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                                    <i className="fas fa-paper-plane"></i>
                                                </button>
                                            </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
    )
}