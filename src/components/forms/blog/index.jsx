import './style.sass';
import { BiSearchAlt } from 'react-icons/bi';

export default function ({ children }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return <>
        <form onSubmit={handleSubmit} id='blog'>
            <BiSearchAlt />
            <input type="search" name="search" placeholder='Search' />
        </form>
        {children}
    </>;
}