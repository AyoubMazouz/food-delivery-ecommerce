import React from "react"

const Model = ({ setState, children }) => {
	return (
		<div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center">
			<div className="relative bg-white p-10 max-w-[900px]">
				<div
					className="absolute top-0 right-0 py-4"
					onClick={() => setState(false)}
				>
					CLOSE
				</div>
				{children}
			</div>
		</div>
	)
}

export default Model
