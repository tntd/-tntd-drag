import React, { useEffect, useState, useRef } from "react";
import DragM from "../dragm/index";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

const BuildTitle = props => {
	const { title, className } = props;

	let modalDom = document.querySelector(`.${className}`);
	useEffect(() => {
		modalDom = document.querySelector(`.${className}`);
	}, []);

	const updateTransform = transformStr => {
		modalDom.style.transform = transformStr;
	};

	return (
		<DragM updateTransform={updateTransform}>
			<div>{title}</div>
		</DragM>
	);
}

export default props => {
	const [modalVisible, setModalVisible] = useState(false);

	const title = <BuildTitle title="Basic Modal" className="m-test-modal" />

	return (
		<div>
			<Button type="primary" onClick={() => setModalVisible(true)}>Open</Button>

			<Modal
				title={title}
				className="m-test-modal"
				destroyOnClose={true}
				visible={modalVisible}
				onOk={() => setModalVisible(false)}
				onCancel={() => setModalVisible(false)}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	);
};
