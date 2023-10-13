import Cabecalho from "./components/Cabecalho/Cabecalho";
import Favoritos from "./pages/Favoritos/Favoritos";
import Inicio from "./pages/Inicio/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./components/Rodape/Rodape";
import Container from "./components/Container/Container";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}