import React from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../contexts/AlertContext";
// Contexts & Hooks.
import { useAuth } from "../../contexts/AuthContext";

const LogIn = () => {
    const { logIn } = useAuth();
    const { setAlert } = useAlert();

    const navigate = useNavigate();

    const [userValue, setUserValue] = React.useState("");
    const [pwdValue, setPwdValue] = React.useState("");

    React.useEffect(() => {
        document.title = "Burgelo - Login";
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await logIn(userValue, pwdValue);
            if (res) {
                navigate("/admin");
                setAlert(["success", "Welcome back admin user!"]);
            }
        } catch (err) {
            setAlert(["success", "Something when wrong, Please ty again."]);
        }
    };

    return (
        <div>
            <form
                onSubmit={onSubmit}
                className="grid justify-center flex-col items-center gap-y-4 py-24 w-full"
            >
                <div className="text-xl text-uppercase text-danger-dark max-w-[35ch] text-center uppercase">
                    this page is for administrator only, if your are not the
                    admin you should leave immediately
                </div>
                <div>
                    <label htmlFor="user" className="form-label">
                        User
                    </label>
                    <input
                        type="text"
                        name="user"
                        required
                        className="form-input"
                        value={userValue}
                        onChange={(e) => setUserValue(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="pwd" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="pwd"
                        required
                        className="form-input"
                        value={pwdValue}
                        onChange={(e) => setPwdValue(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn">
                    submit
                </button>
            </form>
        </div>
    );
};

export default LogIn;
