import landingImg from '../assets/images/illustration-intro.png';
import curveImage from '../assets/images/bg-curvy-desktop.svg';

const Landing = () => {
    return (
        <section className="bg-[#1c2230] pt-[200px]">
            <div className="container">
                <div className="element-center flex-col">
                    <div className="w-[750px] max-w-full">
                        <img
                            src={landingImg}
                            alt="landing image "
                            className="mb-8 w-full h-fit"
                        />
                    </div>
                    <div className="text-white text-center">
                        <h1 className="text-3xl font-semibold mb-8">
                            All your files in one secure location,
                            <br /> accessible anywhere.
                        </h1>
                        <p className="text-lg font-normal mb-4 max-w-full md:w-[600px] md:mx-auto px-8">
                            Fylo stories your most important files in one secure
                            location Access them whereever you need, share and
                            collaborate with friends family, and co-workers
                        </p>
                    </div>
                    <a
                        href="#"
                        className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-md mt-[15px]"
                    >
                        Get Started
                    </a>
                </div>
            </div>
            <div className="w-full h-[200px]">
                <img
                    className="w-full h-full"
                    src={curveImage}
                    alt="curve image"
                />
            </div>
        </section>
    );
};

export default Landing;
