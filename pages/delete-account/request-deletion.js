import { Button, useUI } from "@components/ui";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Index() {
	const [loading, setLoading] = useState(false)
	const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
	const handleNextClick = async () => {
		setLoading(true)
		const userId = localStorage.getItem('userId')
		try {
			const response = await axios.post(baseUrl + '/manageUsersApis/make-deletion-request', {
				id: userId
			})
			console.log(response)
			toast.success('Deletion request successfully added')
			setLoading(false)
			openModal(), setModalView("DELETE_MODAL");
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	};
	const { openModal, setModalView } = useUI();
	const router = useRouter()
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
				<div className="lg:max-w-xl container mx-auto flex flex-col items-center justify-center">
					<div className=" border-b border-gray-400  container mx-auto mb-7 ">
						<h2 className="text-3xl text-[#484C52] text-center  mb-3 ">
							Delete Account
						</h2>
					</div>
					<ul className="list-disc pl-4 text-[#828282] space-y-5">
						<li>
							Your profile, photos, posts, booking, and everything
							else you've added will be permanently deleted. You
							won't be able to retrieve anything you've added.
						</li>

						<li>
							Some information, such as messages you sent to the
							host, may still be visible to them after you've
							deleted your account. Copies of messages that you've
							sent are stored in their inboxes.
						</li>
						<li>
							You will automatically be logged out after
							initiating the deletion request.
						</li>
						<li>
							If you log in to the account again within 30 days,
							your deletion request will be canceled.
						</li>
						<li>
							After 30 days, your account and all of your
							information will be permanently deleted, and you
							won't be able to retrieve your information.
						</li>
					</ul>

					<Button
						loading={loading}
						className="text-base my-12"
						onClick={() => handleNextClick()}
					>
						Request Deletion
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Index;
