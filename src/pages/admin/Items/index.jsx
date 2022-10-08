import React from "react"
import Model from "../../../components/Model"
import AddItem from "./AddItem"

const Items = () => {
	const [currModel, setCurrModel] = React.useState(false)
	return (
		<div>
			items
			<button onClick={() => setCurrModel(<AddItem />)}>Add</button>
			{currModel && <Model setState={setCurrModel}>{currModel}</Model>}
		</div>
	)
}

export default Items
