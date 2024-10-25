import profile1 from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';
import profile3 from '../assets/images/profile-3.jpg';
import qouteImage from '../assets/images/bg-quotes.png';
import { useState } from 'react';
import TestimonialData from './TestimonialData';

const Testimonials = () => {
    const [testData, setTestData] = useState([
        {
            id: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!',
            image: profile1,
            position: 'Founder & CEO, Huddle',
            name: 'Ahmed',
        },
        {
            id: 2,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!',
            image: profile2,
            position: 'Founder & CEO, Huddle',
            name: 'Mohamed',
        },
        {
            id: 3,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!',
            image: profile3,
            position: 'Founder & CEO, Huddle',
            name: 'Eman',
        },
    ]);
    return (
        <section className="pb-[350px] pt-[100px] bg-[bg-[#1c2230]">
            <div className="container relative">
                <div className="absolute top-[-40px] left-[15px] z-[-1]">
                    <img src={qouteImage} alt="qoute image" />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {testData.map((item) => {
                        return <TestimonialData key={item.id} item={item} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
