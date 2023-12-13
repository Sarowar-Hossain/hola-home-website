import { Button, useUI } from "@components/ui";

import Image from "next/image";
import React, { useState } from "react";

function Index() {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const [subError, setSubError] = useState(false);

	
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
	
	const handleNextClick = async () => {
		
		let subHasError = false;
		let msgHasError = false;

		

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

		if ( !subHasError && !msgHasError) {
            openModal(), setModalView("CONTACT_US");
            setSelectedOption(""),  setMsg("")
		}
	};

	return (
		<div className="px-4 my-12 lg:w-[60%] 2xl:w-[45%] container mx-auto ">
			{" "}
			<h1 className="text-3xl text-[#484C52] text-center lg:text-left">
				Report a bug{" "}
			</h1>{" "}
			<div className="flex items-center justify-center">
				<Image src={"/report-bug.png"} width={300} height={150} />{" "}
			</div>
			<div className=" mt-7 ">
				
				<div className=" lg:w-[55%] ">
					<label className="block text-black text-lg font-semibold mb-2">
						Select the page where bug was found: <span className="text-[#E90000]">*</span>
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
						} bg-[#F7F8FA] absolute border-2 border-[#C4C4C4] rounded-lg shadow-xl w-[90%] lg:w-[31%] 2xl:w-[24%]`}
					>
						<button
							className={`block px-4 py-2 hover:bg-yellow-50 text-base font-medium w-full text-left ${
								selectedOption === "Home"
									? "text-yellow-500 "
									: ""
							}`}
							onClick={() => handleOptionClick("Home")}
						>
						Home
						</button>
						<button
							className={`block px-4 py-2 hover:bg-yellow-50 text-base font-medium w-full text-left ${
								selectedOption === "Bookings"
									? "text-yellow-500"
									: ""
							}`}
							onClick={() =>
								handleOptionClick("Bookings")
							}
						>
							Bookings
						</button>
						<button
							className={`block px-4 py-2 hover:bg-yellow-50 text-base font-medium w-full text-left ${
								selectedOption === "Bookmarks"
									? "text-yellow-500"
									: ""
							}`}
							onClick={() =>
								handleOptionClick("Bookmarks")
							}
						>
							Bookmarks
						</button>
						<button
							className={`block px-4 py-2 hover:bg-yellow-50 text-base font-medium w-full text-left ${
								selectedOption === "Profile"
									? "text-yellow-500"
									: ""
							}`}
							onClick={() => handleOptionClick("Profile")}
						>
							Profile
						</button>
					</div>

					{subError && (
						<p className="text-[#E90000]">Please, select the page</p>
					)}
				</div>
			</div>
			<div className=" lg:mt-5 mt-7">
				<label className="block text-black text-lg font-semibold mb-2">
					Message <span className="text-[#E90000]">*</span>
				</label>

				<textarea
					rows="4"
					className="w-full px-3 py-3 border border-gray-400  bg-gray-50 rounded-lg shadow-sm focus:ring focus:ring-yellow-200 focus:outline-none focus:border-none focus:ring-opacity-50"
					placeholder={"Describe the issue you encountered in as much detail as possible."}
					value={msg}
					onChange={(e) => {
						setMsg(e.target.value);
					}}
				/>
				{msgError && (
					<p className="text-[#E90000] ">Please provide issue description</p>
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
