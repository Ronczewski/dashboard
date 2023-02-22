import React from "react";
import { Dialog } from "./Dialog";

interface Props {
	titel?: string,
	children: React.ReactNode
}

export const ConfirmDialog = (props: Props) => {

return (
 <Dialog titel= {props.titel}>

	{props.children}
	<hr />

	<button>YES</button> <button>No</button>
 </Dialog>
	)
}
