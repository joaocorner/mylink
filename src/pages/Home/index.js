import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

export default function Home() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);


    function handleShortLink() {
        setShowModal(true);
    }

    return (
        <div className="container-home">

            <div className="logo">
                <img src="/logo-link2.png" alt="logo" />
                <h1>My Links</h1>
                <span>Paste your link to shorten 👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#fff" />
                    <input
                        placeholder="Paste your link here..."
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={handleShortLink}>Shorten</button>
            </div>
            <Menu />

            {showModal && (<LinkItem
            closeModal={() => setShowModal(false)}
            />)}
        </div>
    )
}