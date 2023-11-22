import { Layout } from '@components/common';
import { PageBackButton, Save, Share, Star } from '@components/icons';
import { Container, Text } from '@components/ui';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import React from 'react';

const DetailsPage = () => {
    const router = useRouter()
    return (
        <Container className='py-10'>
            <div className='flex justify-between items-center'>
                <span className='cursor-pointer' onClick={() => router.back()}>
                    <PageBackButton />
                </span>
                <div className='flex gap-3'>
                    <div className='relative w-16 h-16'>
                        <Image src="/host.png" fill alt='' className='object-cover' />
                    </div>
                    <div>
                        <Text className='text-accent-2'>Private Host</Text>   {/*Host type*/}
                        <Text className='text-accent-0 text-lg font-medium text-right'>Charles</Text>   {/*Host type*/}
                    </div>
                </div>
            </div>
            <div className='mt-8 flex justify-between items-end'>
                <div>
                    <Text variant='pageHeading' className='text-accent-0'>The Astin Villa  Hotel</Text>
                    <div className='flex items-center gap-2'>
                        <Star className="text-yellow-400" /><span className='text-accent-0 text-[18px]'>
                            5.0 <span className='text-accent-4'>(22 Reviews)</span>
                        </span>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <span className='text-accent-0 flex items-center gap-1'>
                        <Share />
                        Share
                    </span>
                    <span className='text-accent-0 flex items-center gap-1'>
                        <Save />
                        Save
                    </span>
                </div>
            </div>
        </Container>
    );
};

export default DetailsPage;
Layout.DetailsPage = Layout