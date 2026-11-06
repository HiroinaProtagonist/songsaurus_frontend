import {Outlet} from "react-router";

export default function Protected() {
    return (
        <>
            <h1>Protected layout</h1>
            <Outlet/>
        </>
    )
}