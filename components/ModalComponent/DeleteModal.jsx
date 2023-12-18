import { Button, useUI } from "@components/ui";

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const DeleteModal = () => {
	const { closeModal } = useUI();

	const router = useRouter();

	const handleCancel = () => {
		closeModal();
		router.push("/");
	};
	return (
		<div className=" bg-white rounded-md flex flex-col justify-center items-center  gap-2 text-center">
			<div className="flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="126"
					height="126"
					viewBox="0 0 126 126"
					fill="none"
				>
					<g clip-path="url(#clip0_4635_165660)">
						<path
							d="M63.2218 -0.00976562C28.7352 -0.00976562 0.434082 28.2913 0.434082 62.778C0.434082 97.2646 28.7352 125.566 63.2218 125.566C97.7085 125.566 126.01 97.2646 126.01 62.778C126.01 28.2913 97.7085 -0.00976562 63.2218 -0.00976562ZM55.6233 91.3366L28.1279 63.8414L38.5325 53.4368L56.1047 71.009L91.3819 38.9402L101.283 49.8263L55.6233 91.3366Z"
							fill="#02E031"
						/>
					</g>
					<defs>
						<clipPath id="clip0_4635_165660">
							<rect
								width="125.575"
								height="125.575"
								fill="white"
								transform="translate(0.434082 -0.00976562)"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
			<p className="text-base max-w-xs mt-4 lg:px-4">
				Account deletion request sent. We will log you out of the app.
			</p>
			<div className="flex justify-center gap-10 items-center mt-4">
				<Button
					onClick={handleCancel}
					className=" px-6 py-2 rounded-3xl text-base font-medium bg-primary "
				>
					Logout
				</Button>
			</div>
		</div>
	);
};

export default DeleteModal;
