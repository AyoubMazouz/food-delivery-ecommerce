import React from "react";
// Firebase Imports.
import { db } from "../firebase";
import { setDoc, doc, Timestamp, getDoc } from "firebase/firestore";

// This Hook Uses Only one document to store data.

const useEmail = () => {
    // To make sure it doesn't sent request before ending the first one.
    const [loading, setLoading] = React.useState(false);

    const getEmails = () =>
        new Promise(async (resolve, reject) => {
            try {
                const snap = await getDoc(doc(db, "emails", "emails"));
                let temp = [];
                if (snap.exists()) {
                    temp = snap.data().emailsLs;
                }
                resolve(temp);
            } catch (err) {
                console.warn(err);
                reject(err);
            }
        });

    const addEmail = (email) =>
        new Promise(async (resolve, reject) => {
            setLoading(true);
            try {
                const emailsLs = await getEmails();

                const emailExist = emailsLs.filter(
                    (value) => value.email === email
                );

                if (emailExist.length > 0) reject("email_exist");
                else {
                    emailsLs.push({
                        email,
                        createdAt: Timestamp.now(),
                        createdAtStr: Timestamp.now()
                            .toDate()
                            .toDateString(),
                    });

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
                let emailsLs = await getEmails();
                emailsLs = emailsLs.filter(
                    (email) => email.email !== targetEmail
                );
                await setDoc(doc(db, "emails", "emails"), { emailsLs });
                resolve(true);
            } catch (err) {
                console.warn(err);
                reject(err);
            }
        });

    return { addEmail, deleteEmail, getEmails, loading };
};

export default useEmail;
