import { Button, useUI } from "@components/ui";

import Image from "next/image";
import { useRouter } from "next/router";
import React  from "react";

const ContactUsModal = () => {
	const { closeModal } = useUI();

	const router = useRouter();

	const handleCancel = () => {
		closeModal();
		router.push("/");
	};
	return (
		<div className=" bg-white rounded-md flex flex-col justify-center items-center  gap-2 text-center">
			<div className="flex items-center justify-center">
				<Image src={"/contact-us-done.png"} width={300} height={150} />{" "}
			</div>
			<p className="text-base max-w-xs mt-2 lg:px-4">
				We have received your message and  will respond as soon as
				possible.
			</p>
            {/*<div className="flex justify-center gap-10 items-center mt-4">
				<Button
					onClick={handleCancel}
					className=" px-6 py-2 rounded-md text-base font-medium bg-primary "
				>
					Browse More
				</Button>
    </div>*/}
		</div>
	);
};

export default ContactUsModal;
