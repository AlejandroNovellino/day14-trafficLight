import { element } from "prop-types";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

//create your first component
export function Home() {
	let [lightsList, setlightsList] = useState(["red", "yellow", "green"]);
	let [selected, setSelected] = useState(null);

	let changeLight = key => {
		if (selected == key) {
			setSelected(null);
		} else {
			setSelected(key);
		}
	};

	return (
		<Container fluid className="bg-light vw-100 vh-100">
			<Row>
				<Col>
					<div className="post"></div>
				</Col>
			</Row>
			<Row>
				<Col className="">
					<div className="d-flex flex-column rounded-lg m-auto p-3 trafficLightBody">
						{lightsList.map((element, index) => {
							let clasN =
								"rounded-circle mx-auto light " + element;
							if (index == selected) clasN += " selected";
							return (
								<div
									key={index}
									className={clasN}
									onClick={() => {
										changeLight(index);
									}}></div>
							);
						})}
					</div>
				</Col>
			</Row>
		</Container>
	);
}
