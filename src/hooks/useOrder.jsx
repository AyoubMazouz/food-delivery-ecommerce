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
} from "firebase/storage";

const useOrder = () => {
    // To make sure it doesn't sent request before ending the first one.
    const [loading, setLoading] = React.useState(false);

    const addOrder = (fullName, phone, address, note, orders) => {
        return new Promise(async (resolve, reject) => {
            setLoading(true);
            const id = Timestamp.now().nanoseconds;
            const document = {
                id,
                fullName,
                phone,
                address,
                note,
                orders,
                status: 0,
                createdAt: Timestamp.now(),
            };
            try {
                await setDoc(doc(db, "orders", `${id}`), document);
                resolve();
            } catch (err) {
                console.warn(err);
                reject(err);
            }
            setLoading(false);
        });
    };

    const nextStage = (order) => {
        return new Promise(async (resolve, reject) => {
            setLoading(true);
            try {
                order.status++;
                await setDoc(doc(db, "orders", `${order.id}`), order);
                resolve(true);
            } catch (err) {
                resolve(false);
                console.warn(err);
            }
            setLoading(false);
        });
    };

    const prevStage = (order) => {
        return new Promise(async (resolve, reject) => {
            setLoading(true);
            try {
                order.status--;
                await setDoc(doc(db, "orders", `${order.id}`), order);
                resolve(true);
            } catch (err) {
                resolve(false);
                console.warn(err);
            }
            setLoading(false);
        });
    };

    const cancel = (order) => {
        return new Promise(async (resolve, reject) => {
            setLoading(true);
            try {
                order.status = 3;
                await setDoc(doc(db, "orders", `${order.id}`), order);
                resolve(true);
            } catch (err) {
                resolve(false);
                console.warn(err);
            }
            setLoading(false);
        });
    };

    // RealTime.
    const getOrders = (setOrders) =>
        onSnapshot(
            query(collection(db, "orders"), orderBy("status")),
            (snap) => {
                const ordersLs = [];
                snap.forEach((doc) => {
                    const data = doc.data();
                    data.createdAtStr = data.createdAt
                        .toDate()
                        .toLocaleDateString();
                    ordersLs.push(data);
                });
                setOrders(ordersLs);
            }
        );

    const deleteOrder = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                await deleteDoc(doc(db, "orders", `${id}`));
                resolve();
            } catch (err) {
                resolve();
            }
        });
    };

    return {
        addOrder,
        getOrders,
        deleteOrder,
        nextStage,
        prevStage,
        cancel,
        loading,
    };
};

export default useOrder;
