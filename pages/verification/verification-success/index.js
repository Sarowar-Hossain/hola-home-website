import Image from 'next/image';
import { Button } from "@components/ui";

const Modal = () => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-md p-4 w-64">
                {/* Modal content */}
                <div className="flex items-center justify-center">
                    <Image src={"/verified.png"} width={150} height={80} />{" "}
                </div>
                <div className="text-center">
                    <h1 className="text-xl mb-2 text-[#484C52]">Success!!</h1>
                    <p className="text-sm text-[#484C52]">ID uploaded successfully. Please wait for verification.</p>
                </div>
                <div className="flex items-center justify-center mt-7 ">
                    {" "}
                    <Button
                        className=" px-6 py-2 rounded-md text-lg font-medium bg-primary "
                    >
                        Back to home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

