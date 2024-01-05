import { Button } from "@components/ui";
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = () => {
    const router = useRouter();
    const [desc, setDesc] = useState("");
    const [descError, setDescError] = useState(false);

    const handleNext = () => {
        if (desc === "") {
            setDescError(true);
        } else if (desc.length > 50) {
            setDescError(true);
        } else {
            setDescError(false);
            router.push('/list-your-property/property-detail/property-pricing');
        }
    };

    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] px-4 mb-10">
            <div className='px-2 sm:px-4'>
                <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-1 mb-3">Create Description for your property</h1>
                <h1 className='text-lg sm:text-sm text-[#848484] tracking-wide'>Choose up to 2 highlights. We'll use these to get your description started.</h1>
            </div>
            <div className="mt-5 mx-auto ml-0 sm:ml-5">
                <textarea
                    rows="8"
                    className={`w-full sm:w-3/4 px-6 py-4 text-2xl text-[#484C52] border ${descError ? 'border-[#EB5757]' : 'border-[#848484]'} bg-white rounded-lg shadow-sm focus:outline-none focus:border-[#848484]`}
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                        setDescError(false);
                    }}
                />
                <p className="text-[#0F172A] mr-48 text-end">Maximum 50 words</p>
                {descError && (
                    <p className="text-[#EB5757]">This field cannot be empty or exceed 50 words</p>
                )}
            </div>
            <div className="mt-10 sm:px-6 mb-0 sm:mb-10 flex justify-between items-center sm:flex sm:justify-between sm:items-center">
                <div>
                    <h1 className="text-[#484C52] underline cursor-pointer" onClick={() => router.back()}>
                        Back
                    </h1>
                </div>
                <div className="sm:px-6 mt-4 sm:mt-0">
                    <h1 className="text-[#0F172A]">
                        <span className="font-bold">8</span> of 10
                    </h1>
                </div>
                <div>
                    <Button
                        className="cursor-pointer py-2 md:mr-4 px-6 rounded-md text-base font-medium bg-primary"
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Index;
