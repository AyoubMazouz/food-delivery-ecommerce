import React from "react";
// Hooks & Contexts.
import { useAlert } from "../../../contexts/AlertContext";
import useEmail from "../../../hooks/useEmail";

const AddEmail = () => {
    // Form Values.
    const [email, setEmail] = React.useState("");

    const { addEmail, loading } = useEmail();
    const { setAlert } = useAlert();

    const onSubmit = async (e) => {
        e.preventDefault();

        // Form validation.

        try {
            await addEmail(email);
            setAlert(["success", "Email has been added successfully!"]);
        } catch (err) {
            if (err === "email_exist")
                setAlert(["warn", "This Email is already on the list."]);

            console.warn(err);
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-3 w-[320px]">
            <div className="model-header">Add An New Email</div>
            <div className="col-span-2">
                <label htmlFor="id" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="Email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button className="btn" disabled={loading}>
                Submit
            </button>
        </form>
    );
};

export default AddEmail;
