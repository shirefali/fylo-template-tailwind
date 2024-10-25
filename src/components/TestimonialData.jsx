const TestimonialData = ({ item }) => {
    const { id, desc, image, position, name } = item;
    return (
        <div className="p-[30px] bg-[#21293c] rounded shadow">
            <p className="text-sm font-normal tracking-[0.9] text-white leading-[1.6]">
                {desc}
            </p>
            <div className="text-white flex items-center gap-[20px] mt-8">
                <img
                    src={image}
                    alt="profile image"
                    className="w-[50px] h-[50px] rounded-full object-contain"
                />
                <div>
                    <h4 className="mb-1 font-bold">{name}</h4>
                    <p className="font-normal text-sm">{position}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialData;
