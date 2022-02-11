import { useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
    const history = useHistory();
    let testClass = 'test'
    function toggleClass() {
        testClass = 'test2'
    }
    return (
        <>
            <h1 className={testClass} onMouseOver={toggleClass} onClick={() => history.push('/')}>Home</h1>
            <h1 onClick={() => history.push('/searchPage')}>Search</h1>
            <h1 onClick={() => history.push('/favoritesPage')}>Favorites</h1>
        </>
    )
}

export default Header;