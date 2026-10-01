import type { Film } from './../data/film'


export function BlurayCard({ title, year, format }: Film) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{format}</p>
            {format === 'Ultra 4k' && <span>4K</span>}
        </div>
    )
}