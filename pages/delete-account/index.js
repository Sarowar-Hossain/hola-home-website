import { Button } from "@components/ui";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Index() {
	const [showTextarea, setShowTextarea] = useState(false);
	const [selectedReason, setSelectedReason] = useState(null); 

	const reasons = [
		"Too many ads",
		"Expensive plans and High brokerage",
		"Too many notifications!",
		"Not for me",
		"Too many bugs",
		"Site not working properly",
		"Others",
	];

	const handleRadioClick = (value) => {
		if (value === "Others") {
			setShowTextarea(true);
		} else {
			setShowTextarea(false);
		}
		setSelectedReason(value); 
	};

	const router = useRouter();

	return (
		<div className=" "> 
		<div className="lg:w-[70%] 2xl:w-[40%] container mx-auto lg:flex  lg:flex-row flex flex-col items-start py-8 lg:px-0 px-6">
			<button
				className="mt-1  cursor-pointer "
				onClick={() => router.back()}
			>
				{" "}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-move-left"
				>
					<path d="M6 8L2 12L6 16" />
					<path d="M2 12H22" />
				</svg>
			</button>
			<div className="lg:w-[70%] container mx-auto flex items-center justify-center">
				<div className="custom-radio ">
					<h2 className="text-3xl text-[#484C52] text-center lg:text-left mb-3">
						Delete Account
					</h2>
					<p className="text-lg text-[#484C52] text-center lg:text-left mb-8">
						{" "}
						Please tell us why you are leaving us!
					</p>

					{reasons.map((reason) => (
						<div
							key={reason}
							className="mb-2 flex items-center gap-3 hover:bg-[#FFF8DB] p-1"
						>
							<input
								type="radio"
								id={reason}
								name="reason"
								value={reason}
								onChange={() => handleRadioClick(reason)}
								className="hidden"
							/>
							<label
								htmlFor={reason}
								className="custom-radio-label"
							>
								<span className="custom-radio-button mr-3"></span>
								<p className="text-base"> {reason}</p>
							</label>
						</div>
					))}

					<div className={`mb-4 ${showTextarea ? "" : "hidden"}`}>
						<textarea
							id="additionalReason"
							name="additionalReason"
							rows="4"
							cols="50"
							className="w-full p-2 border-2 border-primary rounded focus:border-none focus:outline-primary"
							placeholder="Please state your reason. It will help us improve."
						></textarea>
					</div>

					<div className="flex items-center justify-center mt-12">
						<Button
							className="text-base"
							onClick={() =>
								router.push("/delete-account/request-deletion")
							}
							disabled={!selectedReason}
						>
							Next
						</Button>
					</div>
				</div>
			</div>
			</div>
			</div>
	);
}

export default Index;
