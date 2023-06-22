
import useMenu from '../../../hooks/useMenu.jsx';
import MenuItems from '../../Shared/MenuItems/MenuItems.jsx';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
const PopularMenu = () => {

    const [menu] = useMenu([]);
    // console.log('samaul');

    const populer = menu.filter(item => item.category === 'popular');

    return (
        <section className='mb-12'>
            <SectionTitle
                heading={'Popular Items'}
                subHeading={'From our Menu'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    populer.map(item => <MenuItems key={item._id}
                        item={item}
                    ></MenuItems>)
                }

            </div>
            <div className='w-full mx-auto text-center'>
                <button className="btn duration-1000 btn-outline border-0 border-b-2 mt-4">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;