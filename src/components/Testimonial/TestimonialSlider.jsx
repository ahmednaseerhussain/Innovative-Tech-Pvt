import React from 'react'
import Quotation from '../../assets/Quotation.png'


const TestimonialSlider = (props) => {
    return (
        <div>
            <div className='text-center'>
                <img className='mx-auto' src={Quotation} />
                <p className='text-center font-medium w-1/2 mx-auto mt-6'>{props.title}</p>
                <div className='py-10 flex flex-col gap-1'>
                    <img className='mx-auto' src={props.Testimonialimg} alt="" />
                    <h6 className='font-medium'>{props.name}</h6>
                    <p>{props.qualification}</p>
                </div>

            </div>
        </div>
    )
}

export default TestimonialSlider