import Favoritos from "./pages/Favoritos/Favoritos";
import Inicio from "./pages/Inicio/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./pages/Player/Player";
import NaoEncontrada from "./pages/NaoEncontrada/NaoEncontrada";
import PaginaBase from "./pages/PaginaBase/PaginaBase";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}