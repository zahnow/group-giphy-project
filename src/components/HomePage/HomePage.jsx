import { useHistory } from 'react-router-dom';

function HomePage(){
    const history = useHistory();
    return(
        <>
        <h2 className='routes' onClick={() => history.push('/searchPage')}>Click To Begin Giphy Search!</h2>
        </>
    );
}
export default HomePage;