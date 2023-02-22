import React from "react"
import "./Dialog.css"

export const Dialog = (props) => {

	return (
		<div className="Dialog__container">
			{
				props.titel && <div className="Dialog_title">
					{props.titel}
				</div>
			}
			<div className="Dialog_content">
				{props.children}
			</div>
		</div>
	)
}