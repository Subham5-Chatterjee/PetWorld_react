import { Link } from "react-router";

function Tophead(){
    return(
<div className="top-bar d-flex justify-content-center align-items-center">
        <div className="container">
            <p className="text-center">
                20% discount for a limited period. Hurry up! <strong><Link to="/product" className="text-white fw-bold ms-1 text-decoration-none">Shop all products.</Link></strong></p>
        </div>
    </div>
    );
}

export default Tophead;