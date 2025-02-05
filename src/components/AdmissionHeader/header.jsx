import React from 'react'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6'
import { HiArrowSmallRight, HiMiniArrowSmallRight } from 'react-icons/hi2'

const AdmissionHeader = ({ title }) => {
    return (
        <div className='border-b p-2 px-14 border-[#D7D7D7] w-[100%]'>
            <div className='flex items-center gap-2'>
                <p className='text-[#101828] text-[16px]'>Admission</p>
                <HiArrowSmallRight className='text-[16px] text-[#101828]' />
                <p className='text-[#09B451] text-[16px]'>{title}</p>
            </div>
        </div>
    )
}

export default AdmissionHeader