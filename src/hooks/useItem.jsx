import React from "react";
// Firebase Imports.
import { db, storage } from "../firebase";
import {
    setDoc,
    doc,
    Timestamp,
    getDoc,
    collection,
    getDocs,
    deleteDoc,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import {
    ref,
    uploadString,
    getDownloadURL,
    deleteObject,
    uploadBytesResumable,
} from "firebase/storage";

const useItem = () => {
    // To make sure it doesn't sent request before ending the first one.
    const [loading, setLoading] = React.useState(false);
    const uploadBase64 = (str, id) => {
        return new Promise(async (resolve, reject) => {
            str = str.replace("data:image/png;base64,", "");
            const strRef = ref(storage, id + ".jpeg");

            try {
                await uploadString(strRef, str, "base64");
                const url = await getDownloadURL(strRef);
                resolve(url);
            } catch (err) {
                reject(err);
            }
        });
    };
    const uploadFile = (file, id) => {
        return new Promise(async (resolve, reject) => {
            const storageRef = ref(storage, "images/items/" + id + ".jpeg");

            try {
                uploadBytesResumable(storageRef, file).then(async (snap) => {
                    const url = await getDownloadURL(snap.ref);
                    resolve(url);
                });
            } catch (err) {
                reject(err);
            }
        });
    };

    const itemIdExist = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const snap = await getDoc(doc(db, "items", id));
                if (snap.exists()) reject("id_taken");
                else resolve();
            } catch (err) {
                console.log(err);
                reject(err);
            }
        });
    };

    const deleteItemImage = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                await deleteObject(ref(storage, id + ".jpeg"));
                resolve();
            } catch (err) {
                console.log(err);
                reject(err);
            }
        });
    };

    const addItem = (id, tags, sizes, description, image) => {
        return new Promise(async (resolve, reject) => {
            setLoading(true);
            try {
                await itemIdExist(id);
                const imageURL = await uploadFile(image, id);

                const document = {
                    id,
                    tags,
                    sizes,
                    description,
                    imageURL,
                    createdAt: Timestamp.now(),
                    modifiedAt: Timestamp.now(),
                };

                await setDoc(doc(db, "items", id), document);

                resolve();
            } catch (err) {
                console.log(err);
                reject(err);
            }
            setLoading(false);
        });
    };

    const updateItem = (id, tags, sizes, description, image, createdAt) => {
        return new Promise(async (resolve, reject) => {
            setLoading(true);

            try {
                getDownloadURL(ref(storage, `${id}.jpeg`))
                    .then(() => deleteItemImage(id))
                    .catch((err) => console.warn(err));

                const imageURL = await uploadFile(image, id);
                const document = {
                    id,
                    tags,
                    sizes,
                    description,
                    imageURL,
                    createdAt,
                    modifiedAt: Timestamp.now(),
                };
                await setDoc(doc(db, "items", id), document);

                resolve();
            } catch (err) {
                console.log(err);
                reject(err);
            }
            setLoading(false);
        });
    };

    // RealTime.
    const getItems = (setItems) => {
        onSnapshot(query(collection(db, "items"), orderBy("id")), (snap) => {
            const itemsLs = [];
            snap.forEach((doc) => {
                const data = doc.data();
                data.modifiedAtStr = data.modifiedAt
                    .toDate()
                    .toLocaleDateString();
                data.createdAtStr = data.createdAt
                    .toDate()
                    .toLocaleDateString();
                itemsLs.push(data);
            });
            setItems(itemsLs);
        });
    };

    const deleteItem = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                await deleteDoc(doc(db, "items", `${id}`));
                resolve();
            } catch (err) {
                resolve();
            }
        });
    };

    return {
        addItem,
        updateItem,
        getItems,
        deleteItem,
        itemIdExist,
        deleteItemImage,
        loading,
    };
};

export default useItem;
