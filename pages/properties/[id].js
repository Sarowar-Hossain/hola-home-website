import { Layout } from '@components/common';
import { PageBackButton, Save, Share, Star } from '@components/icons';
import { Container, Text } from '@components/ui';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

const swipeThreshold = 50;
const DetailsPage = () => {
    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        if (offset > swipeThreshold) {
            showPrev();
        } else if (offset < -swipeThreshold) {
            showNext();
        }
    };
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const images = [
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const showNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const showPrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

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
                        <Text className='text-accent-2'>Private Host</Text>
                        <Text className='text-accent-0 text-lg font-medium text-right'>Charles</Text>
                    </div>
                </div>
            </div>
            <div className='mt-8 flex justify-between items-end'>
                <div>
                    <Text variant='pageHeading' className='text-accent-0'>The Astin Villa Hotel</Text>
                    <div className='flex items-center gap-2'>
                        <Star className="text-yellow-400" />
                        <span className='text-accent-0 text-[18px]'>
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
            <div className='h-[55vh] mt-5 rounded-lg overflow-hidden hidden md:block'>
                <div className='grid grid-cols-2 gap-4'>
                    {images.slice(0, 1).map((img, index) => (
                        <div key={index} className='col-span-1 cursor-pointer' onClick={() => openModal(index)}>
                            <img src={img} alt={`Image ${index}`} className='h-full w-full object-cover' />
                        </div>
                    ))}
                    <div className='col-span-1 grid grid-cols-2 grid-rows-2 gap-4'>
                        {images.slice(1).map((img, index) => (
                            <div key={index} className='cursor-pointer' onClick={() => openModal(index + 1)}>
                                <img src={img} alt={`Image ${index + 1}`} className='w-full h-full object-cover' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>-
            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center z-50'>
                    <AnimatePresence initial={false}>
                        <motion.img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            alt={`Image ${currentImageIndex}`}
                            className='w-[95vw] md:w-[70vw] h-[60vh] md:h-[85vh] object-cover rounded-md'
                            drag="x"
                            dragElastic={0.8}
                            onDragEnd={handleDragEnd}
                        />
                    </AnimatePresence>
                    <button onClick={showPrev} className='absolute bottom-5 mr-10 md:left-5 md:top-1/2 transform -translate-y-1/2 hover:text-yellow-400 transition-all duration-200 max-h-10'><ChevronLeftCircle className='w-8 md:w-10 h-8 md:h-10' /></button>
                    <button onClick={showNext} className='absolute bottom-5 ml-10 md:right-5 md:top-1/2 transform -translate-y-1/2 hover:text-yellow-400 transition-all duration-200 max-h-10'><ChevronRightCircle className='w-8 md:w-10 h-8 md:h-10' /></button>
                    <button onClick={closeModal} className='absolute left-5 top-5 hover:text-yellow-400 transition-all duration-200'>X Close</button>
                    <p className='top-5 absolute text-accent-9 text-lg'>{currentImageIndex + 1}/{images?.length}</p>
                </div>
            )}

        </Container>
    );
};

export default DetailsPage;
Layout.DetailsPage = Layout;
