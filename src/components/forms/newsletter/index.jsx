import './style.sass';
import React from 'react';
import { api } from '../../../utils';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function () {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const $icon = React.useMemo(() => loading ? AiOutlineLoading3Quarters : FaLongArrowAltRight, [loading]);

    const handleSubmit = async (e) => {
        e.preventDefault(); setLoading(true);
        try {
            await api.post('/newsletter/', { email });
            setEmail('');
        } catch (error) {
            let message = error;
            console.log(message, 'getting error');
        }; setLoading(false);
    };

    return <form onSubmit={handleSubmit} id='newsletter'>
        <h3>Subscribe to our Newsletter</h3>
        <div>
            <input disabled={loading} type="email" required value={email} onChange={({ currentTarget }) => setEmail(currentTarget.value)} />
            <button type='submit' disabled={loading}>
                <$icon size={25} />
            </button>
        </div>
    </form>;
}