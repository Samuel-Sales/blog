import Cabecalho from "./components/Cabecalho/Cabecalho";
import Favoritos from "./pages/Favoritos/Favoritos";
import Inicio from "./pages/Inicio/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./components/Rodape/Rodape";
import Container from "./components/Container/Container";
import FavoritosProvider from "./contextos/Favoritos";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}