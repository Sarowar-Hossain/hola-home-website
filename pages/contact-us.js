import { Button, useUI } from "@components/ui";

import Image from "next/image";
import React, { useState } from "react";

function Index() {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const [subError, setSubError] = useState(false);

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [msg, setMsg] = useState("");
	const [msgError, setMsgError] = useState(false);
	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setDropdownOpen(false);
	};

	const { openModal, setModalView } = useUI();
	const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	const handleNextClick = async () => {
		let emailHasError = false;

		let subHasError = false;
		let msgHasError = false;

		if (!email.match(emailPattern)) {
			setEmailError(true);
			emailHasError = true;
		} else {
			setEmailError(false);
		}

		if (selectedOption == "") {
			setSubError(true);
			subHasError = true;
		} else {
			setSubError(false);
		}

		if (msg == "") {
			setMsgError(true);
			msgHasError = true;
		} else {
			setMsgError(false);
		}

		if (!emailHasError && !subHasError && !msgHasError) {
            openModal(), setModalView("CONTACT_US");
            setSelectedOption(""), setEmail(""), setMsg("")
		}
	};

	return (
		<div className="px-4 my-12 lg:w-[60%] 2xl:w-[45%] container mx-auto ">
			{" "}
			<h1 className="text-3xl text-[#484C52] text-center lg:text-left">
				Contact Us{" "}
			</h1>{" "}
			<div className="flex items-center justify-center">
				<Image src={"/contact-us.png"} width={300} height={150} />{" "}
			</div>
			<div className="mt-2 flex flex-col lg:flex lg:flex-row justify-between items-start lg:gap-x-12  gap-y-5 lg:gap-y-0">
				<div className=" w-full">
					<label className="block text-black text-lg font-semibold mb-2">
						Email <span className="text-[#E90000]">*</span>
					</label>
					<input
						type="text"
						className="w-full px-3 py-3 border border-gray-400  bg-gray-50 rounded-lg shadow-sm focus:ring focus:ring-yellow-200 focus:outline-none focus:border-none focus:ring-opacity-50"
						placeholder={"Enter Your E-mail"}
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					{emailError && (
						<p className="text-[#E90000]">
							Enter a valid email address
						</p>
					)}
				</div>
				<div className=" w-full">
					<label className="block text-black text-lg font-semibold mb-2">
						Select Subject <span className="text-[#E90000]">*</span>
					</label>
					<button
						className="flex  items-center justify-between w-full px-3 py-3 border border-gray-400  bg-gray-50 rounded-lg shadow-sm focus:ring focus:ring-yellow-200 focus:outline-none focus:border-none focus:ring-opacity-50"
						type="button"
						onClick={toggleDropdown}
					>
						{selectedOption || (
							<p className="text-gray-400">
								{" "}
								Select subject type
							</p>
						)}
						<svg
							className={`w-2.5 h-2.5 ${
								isDropdownOpen ? "transform rotate-180" : ""
							} ms-3`}
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>

					<div
						id="dropdown"
						className={`z-10 ${
							isDropdownOpen ? "" : "hidden"
						} bg-[#F7F8FA] absolute border-2 border-[#C4C4C4] rounded-lg shadow-xl w-[90%] lg:w-[28%] 2xl:w-[21%]`}
					>
						<button
							className={`block px-4 py-2 hover:bg-yellow-50 text-base font-medium w-full text-left ${
								selectedOption === "General Inquiry"
									? "text-yellow-500 "
									: ""
							}`}
							onClick={() => handleOptionClick("General Inquiry")}
						>
							General Inquiry
						</button>
						<button
							className={`block px-4 py-2 hover:bg-yellow-50 text-base font-medium w-full text-left ${
								selectedOption === "Technical Support"
									? "text-yellow-500"
									: ""
							}`}
							onClick={() =>
								handleOptionClick("Technical Support")
							}
						>
							Technical Support
						</button>
						<button
							className={`block px-4 py-2 hover:bg-yellow-50 text-base font-medium w-full text-left ${
								selectedOption === "Customer Support"
									? "text-yellow-500"
									: ""
							}`}
							onClick={() =>
								handleOptionClick("Customer Support")
							}
						>
							Customer Support
						</button>
						<button
							className={`block px-4 py-2 hover:bg-yellow-50 text-base font-medium w-full text-left ${
								selectedOption === "Other Inquiry"
									? "text-yellow-500"
									: ""
							}`}
							onClick={() => handleOptionClick("Other Inquiry")}
						>
							Other Inquiry
						</button>
					</div>

					{subError && (
						<p className="text-[#E90000]">Please select subject</p>
					)}
				</div>
			</div>
			<div className=" mt-5">
				<label className="block text-black text-lg font-semibold mb-2">
					Message <span className="text-[#E90000]">*</span>
				</label>

				<textarea
					rows="4"
					className="w-full px-3 py-3 border border-gray-400  bg-gray-50 rounded-lg shadow-sm focus:ring focus:ring-yellow-200 focus:outline-none focus:border-none focus:ring-opacity-50"
					placeholder={"Enter your message"}
					value={msg}
					onChange={(e) => {
						setMsg(e.target.value);
					}}
				/>
				{msgError && (
					<p className="text-[#E90000] ">Please write message</p>
				)}
			</div>
			<div className="flex items-center justify-center mt-7 ">
				{" "}
				<Button
					onClick={() => handleNextClick()}
					className=" px-6 py-2 rounded-md text-lg font-medium bg-primary "
				>
					Submit
				</Button>
			</div>
		</div>
	);
}

export default Index;
