const Card = ({ items }) => {
    return (
        <div className="text-white grid md:grid-cols-2 gap-[100px] text-center w-[865px] mx-auto max-w-full">
            {items.map((item) => {
                const { icon, title, desc } = item;
                return (
                    <div key={title}>
                        <img
                            src={icon}
                            alt={title}
                            className="w-[80px] h-[80px] object-contain mx-auto"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold my-[15px]">
                                {title}
                            </h2>
                            <p className="font-normal text-sm opacity-[0.9]">
                                {desc}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
