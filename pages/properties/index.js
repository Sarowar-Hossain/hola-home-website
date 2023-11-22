import { Layout } from '@components/common';
import Link from 'next/link';
import React from 'react';

const Properties = () => {
    const id = '654d6a4d6ad4a6d74'
    return (
        <div>
            <p className='text-accent-0'>Hello there</p>
            <Link className='text-accent-0' href={`/properties/${id}`}>Navigate</Link>
        </div>
    );
};

export default Properties;
Layout.Properties = Layout