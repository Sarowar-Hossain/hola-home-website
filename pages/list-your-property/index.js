import Image from 'next/image';
import { Button } from "@components/ui";
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%]">
            <div className='flex flex-col mx-auto mt-0 sm:flex-row'>
                <div className='w-full sm:w-1/2 order-2 sm:order-1'>
                    <h1 className="px-4 container mx-auto sm:container sm:mx-auto text-3xl text-[#484C52] mb-10 sm:text-start">
                        List your property
                    </h1>
                    <h1 className='text-xl lg:pt-10 sm:mt-0 px-4 text-[#484C52] font-medium mb-2 sm:ml-5'>Let’s Begin!!</h1>
                    <h1 className='text-xl px-4 text-[#484C52] font-medium mb-2 sm:ml-5'>Tell us about your property</h1>
                    <ul className='list-disc text-base px-4 mt-10 sm:ml-5'>
                        <li className='mx-4 sm:mx-11 text-[#484C52]'>Type of property you have</li>
                        <li className='mx-4 sm:mx-11 text-[#484C52]'>If guests can book the entire place or just a room.</li>
                        <li className='mx-4 sm:mx-11 text-[#484C52]'>Location of the property</li>
                        <li className='mx-4 sm:mx-11 text-[#484C52]'>How many guests can stay</li>
                    </ul>
                </div>
                <div className='w-full sm:w-1/2 order-1 sm:order-2 h-full'>
                    <Image
                        src={"/list-your-property-homepage.png"}
                        width={1000}
                        height={800}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className='flex justify-between items-center container mx-auto my-0'>
                <div className='px-6'>
                    <h1 className='px-4 text-[#484C52] underline cursor-pointer' onClick={() => router.push("/")}>
                        Back
                    </h1>
                </div>
                <div className='mr-4 mt-4 sm:mt-0'>
                    <Button
                        className="cursor-pointer py-2 rounded-md text-base font-medium bg-primary " onClick={() => router.push("/list-your-property/amenities")}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default index