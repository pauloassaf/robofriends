import React from "react";

const Scroll = (props) => {
	return (
		<div style={{overflowY: "scroll", border: "3px solid black", height: "460px", margin: "10px" }}>
			{props.children}
		</div>
	);
};

export default Scroll;