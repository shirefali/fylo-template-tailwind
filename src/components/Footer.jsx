// import logoImage from '../assets/images/logo.svg';
// import locationImage from '../assets/images/icon-location.svg';
// import telImage from '../assets/images/icon-phone.svg';
// import emailImage from '../assets/images/icon-email.svg';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { useState } from 'react';

// const Footer = () => {
//     const [contact, setContact] = useState([
//         { icon: telImage, text: '+20123456789' },
//         { icon: emailImage, text: '+example@fylo.com' },
//     ]);
//     const [links, setLinks] = useState([
//         'About Us',
//         'Contact Us',
//         'Jobs',
//         'Terms',
//         'Press',
//         'Privacy',
//         'Blog',
//     ]);
//     const [social, setSocial] = useState(['facebook', 'twitter', 'linkedin']);
//     return (
//         <section className="bg-[#0c1524] pt-[250px] md:pt-[150px] pb-[100px]">
//             <div className="container text-white">
//                 <a href="#">
//                     <img
//                         src={logoImage}
//                         alt="logo image"
//                         className="w-[175px] h-[66px] object-contain"
//                     />
//                 </a>
//                 <div className="flex justify-between items-start flex-wrap flex-col md:flex-row gap-[30px] mt-[30px]">
//                     <div className="flex items-start gap-[15px] w-[340px] max-w-full">
//                         <img
//                             src={locationImage}
//                             alt="location image"
//                             className="w-[18px] h-[18px] object-contain"
//                         />
//                         <p className="font-normal text-sm tracking-[0.9]">
//                             Lorem ipsum dolor sit amet, consectetur adipisicing
//                             elit. Fugiat praesentium corrupti nam enim rem totam
//                             accusantium sunt quia et excepturi.
//                         </p>
//                     </div>
//                     <div>
//                         {contact.map((item) => {
//                             const { icon, text } = item;
//                             return (
//                                 <div
//                                     key={text}
//                                     className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
//                                 >
//                                     <img src={icon} alt={text} />
//                                     <p>{text}</p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
//                         {links.map((link) => {
//                             return (
//                                 <li>
//                                     <a
//                                         href={`${link.toLowerCase()}`}
//                                         className="hover:text-primary hover:underline transition-colors duration-300 text-base"
//                                     >
//                                         {link}
//                                     </a>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                     <ul className="flex gap-[20px] w-full justify-center md:w-auto">
//                         {social.map((socialLink) => {
//                             return (
//                                 <li key={socialLink}>
//                                     <a href="#" className="group">
//                                         <div className="w-[40px] h-[40px] element-center border rounded-full ">
//                                             {socialLink === 'facebook' ? (
//                                                 <FaFacebookF className="group-hover:text-primary transition-all duration-300" />
//                                             ) : socialLink === 'twitter' ? (
//                                                 <FaTwitter className="group-hover:text-primary transition-all duration-300" />
//                                             ) : (
//                                                 <FaInstagram className="group-hover:text-primary transition-all duration-300" />
//                                             )}
//                                         </div>
//                                     </a>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Footer;

import logoImage from '../assets/images/logo.svg';
import locationImage from '../assets/images/icon-location.svg';
import telImage from '../assets/images/icon-phone.svg';
import emailImage from '../assets/images/icon-email.svg';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    const [contact, setContact] = useState([
        { icon: telImage, text: '+20121212121' },
        { icon: emailImage, text: 'example@fylo.com' },
    ]);
    const [links, setLinks] = useState([
        'About Us',
        'Contact Us',
        'Jobs',
        'Terms',
        'Press',
        'Privacy',
        'Blog',
    ]);
    const [socialIcons, setSocialIcons] = useState([
        'facebook',
        'twitter',
        'instagram',
    ]);
    return (
        <section
            className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white"
            id="signin"
        >
            <div className="container mx-auto text-center md:m-0 md:text-left">
                <a href="#">
                    <img
                        src={logoImage}
                        alt="logo-img"
                        className="w-[175px] h-[66px] object-contain mx-auto md:m-0"
                    />
                </a>
                <div className="flex justify-between flex-wrap flex-col md:flex-row gap-[30px] mt-[30px]">
                    <div className="flex items-start gap-[15px] w-[340px] max-w-full mx-auto md:m-0">
                        <img
                            src={locationImage}
                            alt="location-img"
                            className="w-[18px] h-[18px] object-contain"
                        />
                        <p className=" font-normal text-sm tracking-[0.8px] ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum nisi dignissimos unde ipsam modi facilis
                            nam magni, assumenda ad fuga.
                        </p>
                    </div>
                    <div className="mx-auto md:m-0">
                        {contact.map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
                            >
                                <img
                                    src={item.icon}
                                    alt="icon"
                                    className="w-[18px] h-[18px] object-contain"
                                />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                        {links.map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className=" hover:text-primary transition-all duration-200 text-base"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex gap-[15px] w-full justify-center md:w-auto">
                        {socialIcons.map((item) => (
                            <li key={item}>
                                <a href="#" className="group">
                                    <div className="w-[40px] h-[40px] element-center border border-white rounded-[50%]">
                                        {item === 'facebook' ? (
                                            <FaFacebookF className="  group-hover:text-primary transition-all duration-200" />
                                        ) : item === 'twitter' ? (
                                            <FaTwitter className="  group-hover:text-primary transition-all duration-200" />
                                        ) : (
                                            <FaInstagram className="  group-hover:text-primary transition-all duration-200" />
                                        )}
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
