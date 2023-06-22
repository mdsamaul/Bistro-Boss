import './ChefService.css';
import { Parallax, } from 'react-parallax';

const ChefService = ({ img, heading, details }) => {
    return (
        <Parallax
            bgImage={img}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',

                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <div className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='p-10 mx-10 bg-opacity-70 bg-slate-600 text-center text-white'>
                        <h3 className='text-3xl font-semibold'>{heading}</h3>
                        <p className='lg:px-52 mt-5'>{details}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default ChefService;