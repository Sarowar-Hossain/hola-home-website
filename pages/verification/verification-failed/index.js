import Image from 'next/image';
import { Button } from "@components/ui";

const Modal = () => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-md p-4 w-64">
                {/* Modal content */}
                <div className="flex items-center justify-center">
                    <Image src={"/warning.png"} width={120} height={60} />{" "}
                </div>
                <div className="text-center">
                    <h1 className="text-xl mb-2 text-[#484C52]">Failed!!</h1>
                    <p className="text-sm text-[#484C52]">Failed to upload ID <br />Please retry</p>
                </div>
                <div className="flex items-center justify-center mt-7">
                    <Button className="w-full px-6 py-2 rounded-md text-base font-medium bg-primary">
                        Retry
                    </Button>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Button className="w-full px-6 py-2 rounded-md text-base font-medium bg-primary">
                        Back to home
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Modal;