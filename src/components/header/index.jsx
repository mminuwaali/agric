import './style.sass';
import { FaBlog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import { BsCart4 } from 'react-icons/bs';
import { url } from '../../router/routes';
import { GrContactInfo } from 'react-icons/gr';
import { logoWhite, logoGreen } from '../../config';
import { useState, useEffect, useRef, useMemo } from "react";
import { AiFillHeart, AiOutlineHome, AiOutlineShop } from 'react-icons/ai';

export default function ({ opague = false }) {
    const { auth } = useStore();
    const root = useRef(document.querySelector('#root'));

    const [status, setStatus] = useState(opague);
    const common = useMemo(() => status ? 'text-black' : 'text-white', [status]);

    useEffect(() => {
        root.current?.addEventListener('scroll', handleScroll);
        return () => root.current?.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (ev) => {
        setStatus(ev.target.scrollTop > 50 || opague);
    };

    return <header className={`${opague ? 'bg-white sticky' : 'fixed'} ${status == true && 'bg-white'}`}>
        <Link className={common} to={url('index')} id="logo">
            <img src={status ? logoGreen : logoWhite} alt="" />
        </Link>

        <nav>
            <Link className={common} to={url('index')}>
                <AiOutlineHome />
                <span>home</span>
            </Link>

            <Link className={common} to={url("shop")}>
                <AiOutlineShop />
                <span>shop</span>
            </Link>

            <Link className={common} to={url("blog")}>
                <FaBlog />
                <span>blog</span>
            </Link>

            <Link className={common} to={url("contact")}>
                <GrContactInfo />
                <span>contact</span>
            </Link>
        </nav>

        <nav className='buttons'>
            {auth.user
                ? <>
                    <Link className={`icon ${common}`} to={url("signin")}>
                        <BsCart4 />
                        <span>10</span>
                    </Link>
                    <Link className={`icon ${common}`} to={url("signup")}>
                        <AiFillHeart />
                        <span>10</span>
                    </Link>
                </> :
                <>
                    <Link className={common} to={url("signin")}>sign in</Link>
                    <Link className={`btn ${common}`} to={url("signup")}>sign up</Link>
                </>

            }
        </nav>
    </header>;
};
