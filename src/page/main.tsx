import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {

    const navigation = useNavigate();

    return (
        <main>
            메인입니다.
            <button onClick={() => navigation("/scroll")}>이동</button>
        </main>
    )
}

export default Main;