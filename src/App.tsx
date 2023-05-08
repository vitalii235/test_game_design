import {SignUp} from "./pages/sign-up";
import {BaseLayout} from "./layouts";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Paths} from "./routes/paths.ts";
import {SignIn} from "./pages/sign-in";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(Paths.SIGN_UP)
    }, [])

    return (
        <BaseLayout>
            <Routes>
                <Route path={Paths.SIGN_UP} element={<SignUp/>}/>
                <Route path={Paths.SIGN_IN} element={<SignIn/>}/>
            </Routes>
        </BaseLayout>
    )
}

export default App
