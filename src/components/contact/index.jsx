import './style.sass';
import React from 'react';
import { api } from '../../utils';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function () {
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const handleChange = ({ currentTarget: t }) => {
        console.log(t.name, t.value);
        setData(prev => ({ ...prev, [t.name]: t.value }));
    }

    const onSubmit = async (e) => {
        e.preventDefault(); setLoading(true);
        try {
            await api.post('/contact-us/', data);
            setData(() => ({}));
        } catch (error) {
            let message = error;
            console.log(message, 'getting error');
        }; setLoading(false);
    };

    return <section id="contact">
        <div className="grid">
            <h2>Contact us</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quod autem quam laudantium quibusdam. Inventore error totam,
                reprehenderit mollitia molestiae minus?
            </p>
        </div>
        <form className="grid" onSubmit={onSubmit}>
            <div className="inputs">
                <div className="group">
                    <input name='name' value={data?.name || ''} type="text" required onChange={handleChange} placeholder='.' />
                    <label>Name</label>
                </div>
                <div className="group">
                    <input name='email' value={data?.email || ''} type="email" required onChange={handleChange} placeholder='.' />
                    <label>Email</label>
                </div>
                <div className="group">
                    <input name='phone_number' value={data?.phone_number || ''} type="number" required onChange={handleChange} placeholder='.' />
                    <label>Phone Number</label>
                </div>
                <div className="group full">
                    <textarea name='message' value={data?.message || ''} rows="3" required onChange={handleChange} placeholder='.' />
                    <label>Message</label>
                </div>
            </div>
            <button disabled={loading}>
                {loading ? <AiOutlineLoading3Quarters /> : 'send message'}
            </button>
        </form>
    </section>;
};
