import { Link, Outlet } from "react-router-dom";
export default function Layout() {
    return <>
        <nav>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </nav>
        
        <div>
            <Outlet/>
        </div>
    </>
}