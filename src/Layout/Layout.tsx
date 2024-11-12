import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Helmet, HelmetProvider } from "react-helmet-async"

export const Layout = () => {
    const links = {
        preconnect: [
            "https://fonts.googleapis.com",
            "https://fonts.gstatic.com"
        ],
        canonical: ["https://www.tacobell.com/"],
        stylesheet: ["https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"]
    }

    return (
        <HelmetProvider>
            <Helmet>
                {
                    Object.entries(links).map(([rel, links]) => {
                        return links.map(link => <link rel={rel} href={link}/>)
                    })
                }
            </Helmet>
            <Header />
            <Outlet />
        </HelmetProvider>
    )
}