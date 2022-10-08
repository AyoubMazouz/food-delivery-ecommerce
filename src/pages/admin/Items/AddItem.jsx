import React, { useEffect } from "react"
import useItem from "../../../hooks/useItem"
import { resizeImg } from "../../../util/image"
// Hooks Imports.

const AddItem = () => {
	const [id, setId] = React.useState("")
	const [quantity, setQuantity] = React.useState("")
	const [options, setOptions] = React.useState("")
	const [description, setDescription] = React.useState("")
	const [images, setImages] = React.useState([])

	const [file, setFile] = React.useState(0)

	const { addItem } = useItem()

	useEffect(() => {
		if (file) {
			resizeImg(file, 1268, 720).then((dataURL) => {
				if (images.includes(dataURL) == false) {
					setImages([...images, dataURL])
				}
			})
		}
	}, [file])

	const onSubmit = (e) => {
		e.preventDefault()

		// Form validation.

		addItem(id, quantity, options, description)
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="file">Images</label>
					<input
						type="file"
						name="file"
						required
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</div>
				<div>
					<label htmlFor="id">Id</label>
					<input
						type="text"
						name="id"
						required
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="quantity">Quantity</label>
					<input
						type="number"
						name="quantity"
						required
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="options">Options</label>
					<input
						type="text"
						name="options"
						required
						value={options}
						onChange={(e) => setOptions(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input
						type="text"
						name="description"
						required
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<button type="submit">submit</button>
				<div className="flex flex-wrap">
					{images?.map((image, index) => (
						<img src={image} key={index} />
					))}
				</div>
			</form>
		</div>
	)
}

export default AddItem
