import { useState } from 'react'
import type { Movie } from '../data/movie'

type SlideProps = {
    movies: Movie[]
}

export function Slide({ movies }: SlideProps) {
    const [index, setIndex] = useState(0)
    const position = index % movies.length
    const movie = movies[position]

    if (movies.length === 0) {
        return <p>Aucun film à afficher.</p>
    }


    return (
        <div>
            <h2>{movie.title}</h2>
            <button onClick={() => setIndex((i) => (i - 1 + movies.length) % movies.length)}>◀</button>
            <p>{position + 1} / {movies.length}</p>
            <button onClick={() => setIndex((i) => (i + 1) % movies.length)}>▶</button>
        </div >

    )
}