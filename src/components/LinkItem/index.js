import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function LinkItem({ closeModal, content }) {//closeModal is the function to close the modal and content is the data to be displayed
    
    async function copyLink() {
        await navigator.clipboard.writeText(content.link);//write the link to the clipboard
    }

    return (
        <div className='modal-container'>

            <div className='modal-header'>
                <h2>Shorter Link</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='#000' />
                </button>
            </div>

            <span>
                {content.long_url}{/*content.long_url is the data to be displayed*/}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}{/*content.link is the data to be displayed*/}
                <FiClipboard size={20} color='#fff' />
            </button>

        </div>
    )
}