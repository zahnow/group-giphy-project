import { useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
    const history = useHistory();    
    return (
        <div className='headerContainer'>
            <div className='formBody'>
                <h2 className='routes' onClick={() => history.push('/')}>Home</h2> &nbsp; &nbsp;
                <h2 className='routes' onClick={() => history.push('/searchPage')}>Search</h2> &nbsp; &nbsp;
                <h2 className='routes' onClick={() => history.push('/favoritesPage')}>Favorites</h2>
            </div>
            <h1 className='title'>Giphy Project</h1>
        </div>
    )
}

export default Header;