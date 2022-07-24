import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../services/api';

export default function Home() {
    const [link, setLink] = useState('');//link is the state and setLink is the function to update the state
    const [data, setData] = useState({});//data is the state and setData is the function to update the state
    const [showModal, setShowModal] = useState(false);//showModal is the state and setShowModal is the function to update the state


    async function handleShortLink() { //
        try {
            const response = await api.post('/shorten', {
                long_url: link

            })

            setData(response.data);
            setShowModal(true); // show modal
            setLink(''); // reset input field

        } catch {
            alert('Erro ao gerar o link');
            setLink(''); //reset link
        }
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
                content={data} //data is the data to be displayed
            />)}
        </div>
    )
}