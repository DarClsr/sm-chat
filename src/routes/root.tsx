
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div id="sidebar">

            </div>
            <div id="content" className="overflow-hidden h-[100vh]">
                <Outlet />
            </div>
        </>
    );
}