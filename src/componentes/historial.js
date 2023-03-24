import React from "react";

function Historial({ historial }) {
	return (
		<div className="historial">
			<h2>Historial</h2>
			{historial.map((item, index) => (
				<div key={index}>
					<span>{item.operacion}</span>
					<span>= {item.resultado}</span>
				</div>
			))}
		</div>
	);
}

export default Historial;
  