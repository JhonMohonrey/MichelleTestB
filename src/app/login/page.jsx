'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

function page(props) {
    const router = useRouter();

    return (
        <div className='flex items-center justify-center border-2 border-black'>
            <div className='border-2 w-full border-red-500 max-w-7xl flex flex-col items-center justify-center'>
                <p className='font-bold text-2xl text-center'>This is Login Page</p>

                <div className='border-2 border-red-500 flex'>
                    <div className='border border-blue-600'>
                        {/* Image Section */}
                        <p>This is Image Section</p>
                    </div>
                    <div className='border border-blue-600'>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default page;