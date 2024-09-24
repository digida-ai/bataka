import { Link } from "react-router-dom";
import "./mamba.css";

function Mamba() {
    return (
        <div className={"mamba-clan-container"}>

            <div>
                <p>We are currently in the process of working on it. Meanwhile, you can explore the Ffumbe clan. </p>
                <p>If you&apos;re a coder, you can contribute to this project <Link to={"https://github.com/dgidanlpai"}>Github Link</Link>.</p>
                <p>If you&apos;re not a coder, you can help by writing articles, providing assistance, or giving feedback to this <a href="mailto:digidanlpai@gmail.com">E-mail</a></p>
                <p>Your suggestions and feedback are highly appreciated.</p>
            </div>
        </div>
    );
}

export default Mamba;
