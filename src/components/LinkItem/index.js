import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function LinkItem() {
    return (
        <div className='modal-container'>

            <div className='modal-header'>
                <h2>Shorter Link</h2>
                <button>
                    <FiX size={28} color='#000' />
                </button>
            </div>

            <span>
                http://youtube.com
            </span>

            <button className='modal-link'>
                https://bit.ly/2ZqZqZq
                <FiClipboard size={20} color='#fff' />
            </button>

        </div>
    )
}