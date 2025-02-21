import { Navigate, Route, Routes, } from "react-router-dom"
import { DcPages, HeroPages, MarvelPages, SearchPages } from "../pages"
import { Navbar } from "../../ui"


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">

                <Routes>
                    <Route path="marvel" element={<MarvelPages />} />
                    <Route path="dc" element={<DcPages />} />
                    <Route path="search" element={<SearchPages />} />
                    <Route path="hero/:id" element={<HeroPages />} />

                    <Route path="/" element={<Navigate to='marvel' />} />
                </Routes>
            </div>
        </>
    )
}
