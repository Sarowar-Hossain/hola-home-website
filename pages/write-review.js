import StarRating from '@components/common/StarRating/StarRating';
import { PageBackButton } from '@components/icons';
import { Button, Container, Text, useUI } from '@components/ui';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const WriteReview = () => {
    const router = useRouter()
    const { setModalView, openModal } = useUI()
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleReviewSubmit = () => {
        if (review?.trim()?.length < 30) {
            toast.error("Review must be at least 30 characters.");
            return;
        } else {
            openModal()
            setModalView("REVIEW_SUCCESS_VIEW")
            setReview('')
        }
    }

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
                        <textarea onChange={handleReviewChange} value={review} className='w-full bg-white border-2 outline-none border-accent-2 rounded-md py-2 px-3' placeholder='Write review' name="" id="" cols="30" rows="8"></textarea>
                    </div>
                    <Button onClick={handleReviewSubmit} className="w-[80%] mx-auto">Submit</Button>
                </div>
            </div>

        </Container>
    );
};

export default WriteReview;