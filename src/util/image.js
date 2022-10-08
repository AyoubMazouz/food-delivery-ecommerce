export const getRandomString = (len) =>
	Math.random()
		.toString(36)
		.substring(2, len + 2)

export const resizeImg = (file, size) => {
	return new Promise((resolve, reject) => {
		if (!file || isNaN(size)) reject("File or Size unspecified")

		const reader = new FileReader()
		reader.onload = (e) => {
			const img = new Image()
			img.src = e.target.result
			img.onload = () => {
				// Dynamically Creating Canvas.
				const canvas = document.createElement("canvas")
				canvas.width = size
				canvas.height = (size * (img.height / img.width)) | 0
				const ctx = canvas.getContext("2d")
				// Drawing the resized Image to the Canvas.
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

				// DataURL of the Resized Image
				resolve(canvas.toDataURL())
			}
		}
		reader.readAsDataURL(file)
	})
}

export const getRandomAvatar = () =>
	new Promise((resolve, reject) => {
		const rdmStr = getRandomString(8)
		fetch(`https://avatars.dicebear.com/api/personas/${rdmStr}.svg`)
			.then((response) => resolve(response.url))
			.catch((error) => reject(error))
	})
