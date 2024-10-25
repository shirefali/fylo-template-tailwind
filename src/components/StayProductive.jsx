import productiveImage from '../assets/images/illustration-stay-productive.png';
import arrowIconImage from '../assets/images/icon-arrow.svg';

const StayProductive = () => {
    return (
        <section className="py-[100px] bg-[#1c2230]">
            <div className="container flex items-center flex-col lg:flex-row text-center lg:text-left gap-[30px]">
                <div className=" w-[850px] max-w-full">
                    <img
                        src={productiveImage}
                        alt="productive image"
                        className="w-full"
                    />
                </div>
                <div className="text-white">
                    <h3 className="text-[35px] font-medium leading-50px">
                        Stay productive,
                        <br /> where you are
                    </h3>
                    <p className="opacity-[0.9] my-[20px] text-md font-normal tracking-[0.8px]">
                        Never let location an issue when accessing your files.
                        fylo has you covered for all of your file storage needs
                    </p>
                    <p className="opacity-[0.9] mb-[20px] font-normal tracking-[0.8px]">
                        Securely share files and folders with friends, family
                        and collegues for live collaboration. No email
                        attachments required.
                    </p>
                    <a
                        href="#"
                        className="mx-auto lg:mx-0 flex gap-[20px] text-primary hover:text-[#42b0d1] transition-colors duration-300 border-b-2 border-primary border-solid w-fit "
                    >
                        See how Fylo works
                        <img
                            src={arrowIconImage}
                            alt="arrow icon image "
                            className="w-[20px] h-[20px] object-contain animate-[moveLeft_1s_ease-in-out_infinite]"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StayProductive;
