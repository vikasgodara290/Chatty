import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import CreateRoom from "../components/CreateRoom";
import Home from "../components/Home";
import RoomHome from "../components/RoomHome";

import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="createroom" element={<CreateRoom />} />
                    <Route path="chat" element={<Home />} />
                    <Route path="rooms" element={<RoomHome />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
