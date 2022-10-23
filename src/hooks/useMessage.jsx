import React from "react";
// Firebase Imports.
import { db } from "../firebase";
import {
    setDoc,
    doc,
    Timestamp,
    getDoc,
    deleteDoc,
    getDocs,
    collection,
    onSnapshot,
    query,
    orderBy,
} from "firebase/firestore";

const useMessage = () => {
    // To make sure it doesn't sent request before ending the first one.
    const [loading, setLoading] = React.useState(false);
    const addMessage = (message) =>
        new Promise(async (resolve, reject) => {
            setLoading(true);
            const id = Timestamp.now().seconds;
            const document = {
                id,
                ...message,
                createdAt: Timestamp.now(),
                status: 0,
            };

            try {
                await setDoc(doc(db, "messages", `${id}`), document);
                resolve();
            } catch (err) {
                console.warn(err);
                reject(err);
            }
            setLoading(false);
        });

    const deleteMessage = (id) =>
        new Promise(async (resolve, reject) => {
            try {
                await deleteDoc(doc(db, "messages", `${id}`));
                resolve();
            } catch (err) {
                console.warn(err);
                resolve();
            }
        });

    const getMessages = (setMessages) =>
        onSnapshot(
            query(collection(db, "messages"), orderBy("createdAt")),
            (snap) => {
                const itemsLs = [];
                snap.forEach((doc) => {
                    const data = doc.data();
                    data.createdAtStr = data.createdAt
                        .toDate()
                        .toLocaleDateString();
                    itemsLs.push(data);
                });
                setMessages(itemsLs);
            }
        );

    const markMsgAsRead = (msg) =>
        new Promise(async (resolve, reject) => {
            setLoading(true);
            msg.status = 1;
            try {
                await setDoc(doc(db, "messages", `${msg.id}`), msg);
                resolve();
            } catch (err) {
                console.warn(err);
                reject(err);
            }
            setLoading(false);
        });

    return { addMessage, deleteMessage, getMessages, loading, markMsgAsRead };
};

export default useMessage;
