import { Button } from "@components/ui";
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState(false);

    const handleNext = () => {
        if (title === "") {
            setTitleError(true);
        } else {
            setTitleError(false);
            router.push('/list-your-property/property-detail/property-desc');
        }
    };

    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] px-4 mb-10">
            <div className='px-2 sm:px-4'>
                <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-1 mb-3">Now, let’s give your house a title</h1>
                <h1 className='text-lg sm:text-sm text-[#848484] tracking-wide'>Short titles work the best. Have fun with it - you can always change it later.</h1>
            </div>
            <div className="mt-5 mx-auto ml-0 sm:ml-5">
                <textarea
                    rows="8"
                    className={`w-full sm:w-3/4 px-6 py-4 text-2xl text-[#484C52] border ${titleError ? 'border-[#EB5757]' : 'border-[#848484]'} bg-white rounded-lg shadow-sm focus:outline-none focus:border-[#848484]`}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        setTitleError(false);
                    }}
                />
                {titleError && (
                    <p className="text-[#EB5757]">This field cannot be empty</p>
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
                        <span className="font-bold">7</span> of 10
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
