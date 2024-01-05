import Image from 'next/image';
import { Button } from "@components/ui";
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] px-4">
            <div className='px-2 sm:px-10'>
                <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-2 mb-3">Your Property was listed successfully</h1>
                <h1 className='text-sm sm:text-sm text-[#848484] w-full sm:w-10/12'>Guests can start booking your place </h1>
            </div>
            <div className='bg-[#F7F8FA] shadow-md w-full sm:w-3/4 pb-6 border rounded-md mt-10 ml-0 sm:ml-10 px-3 sm:px-10 mx-auto'>
                <div className='mt-3 relative'>
                    <Image
                        src="/cover-image.png"
                        height={300}
                        width={600}
                        alt="map"
                        className='object-cover'
                    />
                    <button className="absolute top-0 left-0 bg-opacity-70 ml-3 bg-white w-28 h-7 px-3 text-center rounded-xl items-center focus:outline-none">
                        <p className="text-xs text-[#0F172A]">Show Preview</p>
                    </button>

                </div>
                <div className='mt-5 flex justify-between items-center'>
                    <h1 className='text-black tracking-wide text-base font-medium'>Beach View Villa - Bali</h1>
                    <h1 className='text-[#484C52] text-base'>New</h1>
                </div>
                <div className='mt-2 flex justify-start items-center'>
                    <h1 className='text-black tracking-wide text-base font-medium'>$ 178</h1>
                    <h1 className='text-[#484C52] text-base ml-4 sm:ml-2'>Night</h1>
                </div>

            </div>
            <div className=" text-center mr-0 sm:mr-20 mt-7 ">
                {" "}
                <Button
                    className=" px-7 sm:px-7  py-2 text-[#484C52] rounded-md text-xl sm:text-lg font-medium bg-primary shadow-md " onClick={() => router.push("/list-your-property")}
                >
                    Go to Manage Your Property
                </Button>
            </div>
        </div>
    )
}

export default index;