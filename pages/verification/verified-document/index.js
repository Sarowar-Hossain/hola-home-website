import Image from 'next/image';
import { Button } from "@components/ui";

const index = () => {
    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] ">
            {" "}
            <h1 className="sm:container sm:mx-auto text-3xl text-[#484C52] lg:text-start lg:font-normal mb-10 text-center font-bold sm:font-normal">
                Document Verified
            </h1>


            <div className="flex items-center justify-center">
                <Image src={"/become-landlord.svg"} width={200} height={80} />{" "}
            </div>

            <h1 className="mx-auto lg:w-1/3 text-2xl text-[#fccf12] text-center">
                Congratulations!!<br /> You’re a landlord now{" "}
            </h1>{" "}

            <h1 className="mt-10 lg:w-4/6 sm:w-auto sm:mx-auto text-xl text-[#484C52] text-center mx-auto px-4 sm:px-0">
                List your properties on Hola Homes to earn additional money by clicking on <span className='font-bold'>“Manage Property”</span>
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