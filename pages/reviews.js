import ReviewCard from '@components/common/ReviewCard/ReviewCard';
import { PageBackButton, Star } from '@components/icons';
import { Button, Container, Text, useUI } from '@components/ui';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
const reviews = [
    {
        image: "/reviewer.png",
        name: "Ivande Othawa",
        date: "Jan 20, 2025",
        details: "Very nice and comfortable hotel, thank you for accompanying my vacation!"
    },
    {
        image: "/reviewer.png",
        name: "Ivande Othawa",
        date: "Jan 20, 2025",
        details: "Very nice and comfortable hotel, thank you for accompanying my vacation!"
    },
    {
        image: "/reviewer.png",
        name: "Ivande Othawa",
        date: "Jan 20, 2025",
        details: "Very nice and comfortable hotel, thank you for accompanying my vacation!"
    },
    {
        image: "/reviewer.png",
        name: "Ivande Othawa",
        date: "Jan 20, 2025",
        details: "Very nice and comfortable hotel, thank you for accompanying my vacation!"
    },
    {
        image: "/reviewer.png",
        name: "Ivande Othawa",
        date: "Jan 20, 2025",
        details: "Very nice and comfortable hotel, thank you for accompanying my vacation!"
    },
    {
        image: "/reviewer.png",
        name: "Ivande Othawa",
        date: "Jan 20, 2025",
        details: "Very nice and comfortable hotel, thank you for accompanying my vacation!"
    },
    {
        image: "/reviewer.png",
        name: "Ivande Othawa",
        date: "Jan 20, 2025",
        details: "Very nice and comfortable hotel, thank you for accompanying my vacation!"
    },
    {
        image: "/reviewer.png",
        name: "Ivande Othawa",
        date: "Jan 20, 2025",
        details: "Very nice and comfortable hotel, thank you for accompanying my vacation!"
    },
    {
        image: "/reviewer.png",
        name: "Ivande Othawa",
        date: "Jan 20, 2025",
        details: "Very nice and comfortable hotel, thank you for accompanying my vacation!"
    },
]

const Reviews = () => {
    const router = useRouter()
    const { setModalView, openModal } = useUI()
    const handleReviewPage = () => {
        openModal()
        setModalView("REVIEW_ALERT")
    }

    return (
        <Container className='relative'>
            <div className='max-w-3xl mx-auto'>
                <div className=''>
                    <span className='absolute -top-2 left-1 sm:left-10 sm:-top-4 cursor-pointer' onClick={() => router.back()}>
                        <PageBackButton className="w-10 h-10 sm:w-auto sm:h-auto" />
                    </span>
                    <Text variant="pageHeading" className='mt-10 sm:mt-16 md:mt-24 text-center'>All Reviews</Text>
                </div>
                <div className='flex justify-center mt-8 sm:mt-12 md:mt-16 gap-5'>
                    <div className='flex flex-col gap-2 w-full '>
                        <div className='flex items-center gap-2 mx-auto w-full'>
                            <div className='text-xl font-medium'>5</div>
                            <div className='w-full h-2 rounded-[3px] bg-slate-200'>
                                <div className='h-full w-[100%] bg-[#FCCF12] rounded-[3px]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mx-auto w-full'>
                            <div className='text-xl font-medium'>4</div>
                            <div className='w-full h-2 rounded-[3px] bg-slate-200'>
                                <div className='h-full w-[80%] bg-[#FCCF12] rounded-[3px]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mx-auto w-full'>
                            <div className='text-xl font-medium'>3</div>
                            <div className='w-full h-2 rounded-[3px] bg-slate-200'>
                                <div className='h-full w-[60%] bg-[#FCCF12] rounded-[3px]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mx-auto w-full'>
                            <div className='text-xl font-medium'>2</div>
                            <div className='w-full h-2 rounded-[3px] bg-slate-200'>
                                <div className='h-full w-[40%] bg-[#FCCF12] rounded-[3px]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mx-auto w-full'>
                            <div className='text-xl font-medium'>1</div>
                            <div className='w-full h-2 rounded-[3px] bg-slate-200'>
                                <div className='h-full w-[20%] bg-[#FCCF12] rounded-[3px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-1'>
                            <Text className='flex items-center text-2xl leading-5'>5.0</Text>
                            <Star className="mt-1" />
                        </div>
                        <Text className='w-24 mt-2'>22 Reviews</Text>
                    </div>
                </div>
                <div className=' mx-auto mt-10'>
                    <Button onClick={handleReviewPage} className="w-full">Write a Review</Button>
                </div>
                <div className='my-10 md:my-20 flex flex-col gap-10'>
                    {
                        reviews?.map((review, i) => {
                            return (
                                <ReviewCard review={review} i={i} />
                            )
                        })
                    }
                </div>
            </div>

        </Container>
    );
};

export default Reviews;