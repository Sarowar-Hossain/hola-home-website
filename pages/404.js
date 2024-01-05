import { Button } from '@components/ui';
import { useRouter } from 'next/router';
import React from 'react';

const WrongRoute = () => {
    const router = useRouter()
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-5'>
            <p className='text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-black'>404</p>
            <Button onClick={() => router.push("/")}>Return to the Homepage</Button>
        </div>
    );
};

export default WrongRoute;