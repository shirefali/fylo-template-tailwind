const GetStarted = () => {
    return (
        <section>
            <div className="container">
                <div className="text-white relative shadow-lg">
                    <div className="absolute element-center flex-col rounded bg-[#1c2230] p-[30px] top-[-150px] left-[50%] translate-x-[-50%] text-center w-[850px] max-w-full min-height-[275px]">
                        <h3 className="font-semibold text-[25px] md:text-[35px] mb-[15px]">
                            Get early access today
                        </h3>
                        <p className="font-normal leading-[1.6] w-[620px] mb-[30px] mx-auto max-w-full">
                            It only takes a minutes to sign up and our free
                            starter tier is extremely generous. If you have any
                            questions, our support team would be happy to hrlp
                            you.
                        </p>
                        <form className="w-full flex flex-wrap justify-between items-center md:px-[60px] gap-[30px]">
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="w-full h-[50px] outline-none text-sm text-black caret-[#1c2230] rounded-full md:flex-1 p-[20px]"
                            />
                            <button
                                type="submit"
                                className="w-full md:w-[200px] h-[50px] rounded-full bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-300"
                            >
                                Get Started For Free
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
