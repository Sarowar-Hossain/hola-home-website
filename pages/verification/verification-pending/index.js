import Image from 'next/image';
import { Button } from "@components/ui";

const index = () => {
    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] ">
            {" "}
            <h1 className=" sm:container sm:mx-auto text-3xl text-[#484C52] text-start mb-10 hidden sm:block">
                Verification Pending{" "}
            </h1>{" "}

            <h1 className="text-2xl text-[#484C52] text-center mt-20 lg:font-normal sm:font-bold">
                Please wait for verification{" "}
            </h1>{" "}
            <div className="flex items-center justify-center">
                <Image src={"/verification-pending.png"} width={300} height={150} />{" "}
            </div>
            <h1 className="lg:w-4/6 sm:w-auto sm:mx-auto text-xl text-[#484C52] text-center mx-auto px-4 sm:px-0">
                Now all you have to do is wait for 24 hours. We need this time to verify and process the documents
            </h1>{" "}
            <div className="flex items-center justify-center mt-7 ">
                {" "}
                <Button
                    className=" px-6 py-2 rounded-md text-lg font-medium bg-primary "
                >
                    Back to home
                </Button>
            </div>
        </div>

    );
}

export default index