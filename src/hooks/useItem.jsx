import React from "react"
// Firebase Imports.
import { setDoc, doc, Timestamp } from "firebase/firestore"
import { db } from "../firebase"

const useItem = () => {
	const addItem = (id, quantity, options, description) => {
		const document = {
			id,
			quantity,
			options,
			description,
			createdAt: Timestamp.now(),
			modifiedAt: Timestamp.now(),
		}

		setDoc(doc(db, "items", id), document)
	}

	return { addItem }
}

export default useItem
