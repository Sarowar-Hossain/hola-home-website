import Image from 'next/image';
import { Button } from "@components/ui";
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] px-4">
            <div className='px-2 sm:px-10'>
                <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-1 mb-3">Time to Publish</h1>
                <h1 className='text-sm text-[#848484]'>Please make sure to review the details before publishing</h1>
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
            
            <div className="mt-10 px-6 sm:px-10 sm:mb-0 mb-10 flex justify-between items-center sm:flex sm:justify-between sm:items-center">
                <div>
                    <h1 className="text-[#484C52] underline cursor-pointer" onClick={() => router.back()}>
                        Back
                    </h1>
                </div>
                <div className="sm:px-6 mt-4 sm:mt-0">
                    <h1 className="text-[#0F172A]">
                        <span className="font-bold">10</span> of 10
                    </h1>
                </div>
                <div>
                    <Button
                        className="cursor-pointer py-2 lg:mr-28 md:mr-28 px-6 rounded-md text-base font-medium bg-primary"
                        onClick={() => router.push('/list-your-property/property-listing/listing-soon')}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default index;