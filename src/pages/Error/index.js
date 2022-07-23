import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className='container-error'>
            <img src="notfound.png" alt="Page not found" />
            <h1>Page not found! 404</h1>
            <Link to="/">
                Back to Home
            </Link>
        </div>
    )
}