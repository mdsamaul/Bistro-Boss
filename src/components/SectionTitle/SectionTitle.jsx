
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-1/4 my-8 text-center mx-auto">
            <p className="text-yellow-500 pb-2 ">--- {subHeading} ---</p>
            <h3 className="border-y-4 uppercase text-3xl py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;