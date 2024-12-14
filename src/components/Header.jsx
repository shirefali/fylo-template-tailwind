import { useEffect, useRef, useState } from 'react';
import logoImage from '../assets/images/logo.svg';

const Header = () => {
    const headerRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                headerRef.current.style.background = '#0c1524';
                headerRef.current.style.padding = '20px 0';
            } else {
                headerRef.current.style.background = 'transparent';
                headerRef.current.style.padding = '60px 0';
            }
        });

        return () => {
            window.removeEventListener('scroll', null);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [links] = useState(['Features', 'Team', 'Signin']);

    return (
        <header
            ref={headerRef}
            className="pt-[60px] fixed top-0 w-full left-0 z-50 transition-all duration-300"
        >
            <div className="container flex items-center flex-col gap-[30px] sm:flex-row justify-between">
                <a href="#">
                    <img src={logoImage} alt="logo-img" />
                </a>
                <nav>
                    <ul className="flex gap-16 items-center">
                        {links.map((link) => (
                            <li key={link}>
                                <button
                                    onClick={() =>
                                        scrollToSection(link.toLowerCase())
                                    }
                                    className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                                >
                                    {link}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
