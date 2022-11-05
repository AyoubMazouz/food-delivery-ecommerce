import React from "react";
// Firebase Imports.
import { db } from "../firebase";
import { setDoc, doc, Timestamp, getDoc } from "firebase/firestore";

// This Hook Uses Only one document to store data.

const useComment = () => {
    // To make sure it doesn't sent request before ending the first one.
    const [loading, setLoading] = React.useState(false);

    const getComments = (itemId) =>
        new Promise(async (resolve, reject) => {
            try {
                console.log(itemId);
                const snap = await getDoc(doc(db, "comments", itemId));
                let temp = undefined;
                if (snap.exists()) {
                    temp = snap.data().comments;
                }
                resolve(temp || []);
            } catch (err) {
                console.warn(err);
                reject(err);
            }
        });

    const addComment = (rating, fullName, comment, itemId) =>
        new Promise(async (resolve, reject) => {
            setLoading(true);
            try {
                const comments = await getComments(itemId);

                comments.push({
                    itemId,
                    fullName,
                    comment,
                    rating: rating ? rating : 1,
                    id: Timestamp.now().seconds,
                    createdAt: Timestamp.now(),
                    createdAtStr: Timestamp.now()
                        .toDate()
                        .toLocaleDateString(),
                });

                await setDoc(doc(db, "comments", itemId), { comments });

                resolve(true);
            } catch (err) {
                console.warn(err);
                reject(err);
            }
            setLoading(false);
        });

    const deleteComment = (id, itemId) =>
        new Promise(async (resolve, reject) => {
            try {
                console.log(itemId);
                const temp = await getComments(itemId);
                const comments = temp.filter((comment) => comment.id !== id);
                await setDoc(doc(db, "comments", itemId), { comments });
                resolve(true);
            } catch (err) {
                console.warn(err);
                reject(err);
            }
        });

    const deleteComments = (itemId) =>
        new Promise(async (resolve, reject) => {
            try {
                await setDoc(doc(db, "comments", itemId), {});
                resolve(true);
            } catch (err) {
                console.warn(err);
                reject(err);
            }
        });

    return { getComments, addComment, deleteComment, deleteComments, loading };
};

export default useComment;
