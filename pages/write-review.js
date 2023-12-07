import StarRating from '@components/common/StarRating/StarRating';
import { PageBackButton } from '@components/icons';
import { Button, Container, Text, useUI } from '@components/ui';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const WriteReview = () => {
    const router = useRouter()
    const { setModalView, openModal } = useUI()
    const handleReviewSubmit = () => {
        openModal()
        setModalView("REVIEW_SUCCESS_VIEW")
    }

    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <Container className='relative'>
            <div className='max-w-3xl mx-auto'>
                <div className=''>
                    <span className='absolute -top-2 left-1 sm:left-10 sm:-top-4 cursor-pointer' onClick={() => router.back()}>
                        <PageBackButton className="w-10 h-10 sm:w-auto sm:h-auto" />
                    </span>
                    <Text variant="pageHeading" className='mt-10 sm:mt-16 md:mt-24 text-center'>Write a Review</Text>
                </div>
                <div className='flex flex-col gap-6 mt-16'>
                    <div>
                        <Text className='text-lg font-semibold'>Score</Text>
                        <StarRating onRatingSelected={handleRatingChange} />
                    </div>
                    <div>
                        <Text className='text-lg font-semibold'>Review</Text>
                        <textarea className='w-full bg-white border-2 outline-none border-accent-2 rounded-md py-2 px-3' placeholder='Write review' name="" id="" cols="30" rows="8"></textarea>
                    </div>
                    <Button onClick={handleReviewSubmit} className="w-[80%] mx-auto">Submit</Button>
                </div>
            </div>

        </Container>
    );
};

export default WriteReview;