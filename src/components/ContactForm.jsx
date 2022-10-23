import React from "react";
// Hooks & Contexts.
import { useAlert } from "../contexts/AlertContext";
import useMessage from "../hooks/useMessage";

const ContactForm = () => {
    // Form Values.
    const [message, setMessage] = React.useState("");
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");

    const { addMessage, loading } = useMessage();
    const { setAlert } = useAlert();

    const onSubmit = async (e) => {
        e.preventDefault();

        // Form validation.

        const messageDoc = { fullName, email, message };

        try {
            await addMessage(messageDoc);
            setAlert(["success", "Message has been sent successfully!"]);
        } catch (err) {
            if (err === "email_exist")
                setAlert(["warn", "This Email is already on the list."]);
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-3">
            <div className="model-header">Send us a message</div>
            <div className="col-span-2">
                <label htmlFor="id" className="form-label">
                    Full Name
                </label>
                <input
                    type="text"
                    name="username"
                    required
                    className="form-input"
                    placeholder="Full name..."
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>
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
            <div className="col-span-2">
                <label htmlFor="id" className="form-label">
                    Message
                </label>
                <textarea
                    name="message"
                    required
                    className="form-input"
                    placeholder="What's on your mind..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button className="btn" disabled={loading}>
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
