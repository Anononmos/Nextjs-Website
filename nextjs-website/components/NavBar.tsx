import NavSection from "./Navigation/NavSection";
import { roboto, geistSans } from "./font";

export default function Navbar() {
    return (
        <nav className="">
            <div className={`flex flex-row justify-between text-base bg-blue-600 md:px-4 py-2 ${roboto.className}`}>
                {/* Left section with name */}
                <NavSection pages={ [
                    { 
                        id: 0, 
                        page: 'Ainan Kashif', 
                        href: '/'
                    }
                ] } />
                <NavSection pages={ [
                    {
                        id: 1, 
                        page: 'Home', 
                        href: '/'
                    }, 
                    {
                        id: 2, 
                        page: 'Projects', 
                        href: '/projects', 
                    },
                    {
                        id: 3, 
                        page: 'Posts', 
                        href: '/posts', 
                    }
                ]} />
                <NavSection pages={ [
                    {
                        id: 4, 
                        page: 'About', 
                        href: "/about"
                    }, 
                    {
                        id: 5, 
                        page: 'Contact', 
                        href: '/contact'
                    }
                ] } />
            </div>
        </nav>
    )
}