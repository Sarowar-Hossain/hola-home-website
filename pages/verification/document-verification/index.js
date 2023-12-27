import { GoBack } from '@components/icons';
import Image from 'next/image';
import { Button, useUI } from "@components/ui";
import ArrowUp from '@components/icons/ArrowUp';

const index = () => {
    return (
        <div className="mt-20 lg:w-[60%] 2xl:w-[45%] container mx-auto ">
            {" "}
            <div className='mx-auto p-1'>
                <GoBack />
            </div>
            <h1 className="text-3xl text-[#484C52] text-center mb-10">
                Document Verification{" "}
            </h1>{" "}

            <h1 className="text-2xl text-[#484C52] text-center mt-20">
                Upload ID Proof{" "}
            </h1>{" "}
            <div className="flex items-center justify-center">
                <Image src={"/document-verification.png"} width={300} height={150} />{" "}
            </div>
            <h1 className="lg:w-4/6 sm:w-auto sm:mx-auto text-xl text-[#484C52] text-center mx-auto">
                To become a landlord you have to verify your identity and provide a valid ID proof. Don’t worry we won’t share the data with anyone.
            </h1>{" "}
            <div className="flex items-center justify-center mt-7 ">
                {" "}
                <Button
                    className=" px-6 py-2 rounded-md text-lg font-medium bg-primary gap-6 "
                >
                    <ArrowUp />
                    Upload
                </Button>
            </div>
        </div>
    );
}

export default index