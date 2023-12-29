import { useState } from 'react';
import { GoBack } from '@components/icons';
import Image from 'next/image';
import ArrowUp from '@components/icons/ArrowUp';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        setTimeout(() => {
            router.push('/verification/verification-success');
        }, 1000);
    };

    return (
        <div className="px-4 mt-20 lg:w-[60%] 2xl:w-[45%] container mx-auto ">
            <div className='mx-auto p-1'>
                <span className="cursor-pointer" onClick={() => router.back()}>
                    <GoBack />
                </span>
            </div>
            <h1 className="text-3xl text-[#484C52] text-center mb-10">
                Document Verification
            </h1>
            <h1 className="text-2xl text-[#484C52] text-center mt-20">
                Upload ID Proof
            </h1>
            <div className="flex items-center justify-center">
                <Image src={"/document-verification.png"} width={300} height={150} />
            </div>
            <h1 className=" mx-auto lg:w-4/6 sm:w-auto sm:mx-auto text-xl text-[#484C52] text-center  px-4 sm:px-0">
                To become a landlord you have to verify your identity and provide a valid ID proof. Don’t worry we won’t share the data with anyone.
            </h1>
            <div className="flex items-center justify-center mt-7">
                <label className="cursor-pointer px-6 py-2 rounded-md text-lg font-medium bg-primary gap-6 flex items-center">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <span className="flex items-center">
                        <ArrowUp />
                        <span className="ml-2">Upload</span>
                    </span>
                </label>
            </div>

        </div>
    );
};

export default Index;