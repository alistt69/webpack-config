import { App } from "@/app";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <App />
            <Outlet />
        </>
    )
}

export default RootLayout;