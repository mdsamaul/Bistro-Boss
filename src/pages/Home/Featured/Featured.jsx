import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle.jsx";
import './Featured.css';
const Featured = () => {
    return (
        <div className='featured-item bg-fixed   text-white'>
            <div className='bg-slate-700 bg-opacity-80 pt-10 py-10'>
                <SectionTitle heading={'Featured Item'} subHeading={'Check it out'}></SectionTitle>
                <div className='md:flex justify-center items-center py-20 px-36 '>
                    <div>
                        <img src={featuredImg} className='rounded-md' alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where ca i get some?</p>
                        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla architecto expedita a quam odit nesciunt veniam enim animi. Vitae, odio vero necessitatibus sint a consectetur doloribus totam magnam similique, amet minima quae, ipsa dolorum? Dolorem nihil aspernatur modi dicta numquam.</p>
                        <button className="btn btn-outline border-0 border-b-2 mt-4">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;