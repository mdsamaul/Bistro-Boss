import imgBistro from '../../../assets/home/chef-service.jpg';
import ChefService from '../../../components/ChefService/ChefService.jsx';

const BistroBoos = () => {
    return (

        <div >
            <ChefService
                img={imgBistro}
                heading={'Bistro Boss'}
                details={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'}
            ></ChefService>
        </div>
    );
};

export default BistroBoos;