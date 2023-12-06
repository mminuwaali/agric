import './style.sass';
import React from "react";
import { api } from '../../utils';
import $social from '../social-icon';
import { $newletter } from '../forms';
import { Link } from 'react-router-dom';
import { logoGreen } from '../../config';
import { url } from '../../router/routes';

export default function () {
    const [links, setLinks] = React.useState([]);

    React.useEffect(() => {
        if (links.length === 0) fetchSocialLinks();
    }, []);

    const fetchSocialLinks = async () => {
        console.log('fetching links');
        try {
            let res = await api.get('social-media/');
            setLinks(res);
        } catch (error) {
            console.error('Failed to fetch social links', error);
        };
    };

    return <footer>
        <div className="column">
            <Link to={url("index")}>
                <img src={logoGreen} alt="" className="logo" />
            </Link>
            <nav>
                <div>
                    <Link to={url("index")}>Home</Link>
                    <Link to={url("shop")}>Shop</Link>
                    <Link to={url("about")}>About</Link>
                    <Link to={url("contact")}>Contact Us</Link>
                </div>
                <div>
                    <Link to="#">FAQs</Link>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Terms of Service</Link>
                </div>
            </nav>
        </div>
        <div className="column">
            <$newletter />
            <div className="social-links">
                {links.map(link => <a key={link.id} href={link.link} target='_blank'>
                    <$social platform={link.name} />
                </a>)}
            </div>
        </div>
    </footer>;
};