import Card from './Card';
import fileImage from '../assets/images/icon-any-file.svg';
import collaborationImage from '../assets/images/icon-collaboration.svg';
import securityImage from '../assets/images/icon-security.svg';
import computerImage from '../assets/images/icon-access-anywhere.svg';
import { useState } from 'react';

const Features = () => {
    const [items, setItems] = useState([
        {
            icon: computerImage,
            title: 'Access your files, anywhere',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe ratione aspernatur itaque ipsum animi iste repudiandae accusantium laudantium et.',
        },
        {
            icon: securityImage,
            title: 'Security you can trust',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe ratione aspernatur itaque ipsum animi iste repudiandae accusantium laudantium et.',
        },
        {
            icon: collaborationImage,
            title: 'Real time collaboration',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe ratione aspernatur itaque ipsum animi iste repudiandae accusantium laudantium et.',
        },

        {
            icon: fileImage,
            title: 'Store any type of file',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe ratione aspernatur itaque ipsum animi iste repudiandae accusantium laudantium et.',
        },
    ]);
    return (
        <section className="pb-[50px]">
            <div className="container">
                <Card items={items} />
            </div>
        </section>
    );
};

export default Features;
