import { useState, useEffect } from 'react';
import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { getLinksSave } from '../services/storeLinks';

import Menu from '../../components/Menu';

export default function Links() {

  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('@shortLinks');

      if (result.length === 0) {//if there are no links saved, return
        console.log('No links stored');
      }

      setMyLinks(result);
    }

    getLinks();

  }, []);

  return (
    <div className='links-container'>
      <div className='links-header'>
        <Link to="/">
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>My Links</h1>
      </div>

      {myLinks.map(link => (
        <div
          key={link.id}
          className='links-item'>
          <button className='link'>
            <FiLink size={18} color='#fff' />
            {link.long_url}
          </button>
          <button className='link-delete'>
            <FiTrash size={24} color='#ff5454' />
          </button>
        </div>
      ))}
    </div>
  )
}