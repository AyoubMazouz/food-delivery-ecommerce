import React from "react";
// Firebase Imports.
import { db } from "../firebase";
import { setDoc, doc, Timestamp, getDoc } from "firebase/firestore";

// This Hook Uses Only one document to store data.

const useEmail = () => {
    // To make sure it doesn't sent request before ending the first one.
    const [loading, setLoading] = React.useState(false);

    const getEmailsUnchanged = () =>
        new Promise(async (resolve, reject) => {
            try {
                const snap = await getDoc(doc(db, "emails", "emails"));
                const emailsLs = snap.data().emailsLs;

                resolve(emailsLs);
            } catch (err) {
                console.warn(err);
                reject(err);
            }
        });

    const addEmail = (email) =>
        new Promise(async (resolve, reject) => {
            setLoading(true);
            try {
                const emailsLs = await getEmailsUnchanged();

                const emailExist = emailsLs.filter(
                    (value) => value.email === email
                );

                if (emailExist.length > 0) reject("email_exist");
                else {
                    emailsLs.push({ email, createdAt: Timestamp.now() });

                    const document = { emailsLs };
                    await setDoc(doc(db, "emails", "emails"), document);
                }

                resolve(true);
            } catch (err) {
                console.warn(err);
                reject(err);
            }
            setLoading(false);
        });

    const deleteEmail = (targetEmail) =>
        new Promise(async (resolve, reject) => {
            try {
                let emailsLs = await getEmailsUnchanged();
                emailsLs = emailsLs.filter(
                    (email) => email.email !== targetEmail
                );
                emailsLs = { emailsLs };
                await setDoc(doc(db, "emails", "emails"), emailsLs);
                resolve();
            } catch (err) {
                console.warn(err);
                reject(err);
            }
        });

    const getEmails = () =>
        new Promise(async (resolve, reject) => {
            setLoading(true);
            try {
                const emailsLs = await getEmailsUnchanged();

                if (emailsLs.length)
                    emailsLs.forEach((email) => {
                        email.createdAt = email.createdAt
                            .toDate()
                            .toLocaleDateString();
                    });

                resolve(emailsLs);
            } catch (err) {
                console.warn(err);
                reject(err);
            }
            setLoading(false);
        });

    return { addEmail, deleteEmail, getEmails, loading };
};

export default useEmail;
