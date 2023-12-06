import './style.sass'
import { portfolio } from '../../data'

export default function () {
    return <section id="summary">
        {portfolio.map(item => <div className="flex" key={item.title}>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>
                {item.content}
            </p>
        </div>)}
    </section>
}