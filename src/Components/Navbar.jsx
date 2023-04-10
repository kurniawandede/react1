import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const nav = useNavigate()
    return(
        <>
            <button onClick={() => nav("/")}>Home</button>
            <button onClick={() => nav("/about")}>About</button>
        </>
    );
};

export default Navbar;