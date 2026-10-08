import './App.css'
import { Title } from './components/title'
import { BlurayCard } from './components/bluray'
import { Button } from './components/button'
import { blurays } from './data/movie'
import { useState } from 'react'
import { AjoutBluray } from './components/addBluray'
import { Slide } from './components/slide'
import type { Movie } from './data/movie'

function App() {

  const [movies, setMovies] = useState<Movie[]>(blurays)
  const [filter, setFilter] = useState<'Tous' | Movie['format']>('Tous')
  const [search, setSearch] = useState('')

  const totalMovies = movies.length
  const total4K = movies.filter((movie) => movie.format === 'Ultra 4k').length
  const filteredMovies = movies.filter((movie) => {
    const goodFormat = filter === 'Tous' || movie.format === filter
    const goodTitle = movie.title.toLowerCase().includes(search.toLowerCase())
    return goodFormat && goodTitle
  })

  const deleteMovie = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  function addMovie(film: Omit<Movie, 'id'>) {
    setMovies([...movies, { ...film, id: Date.now() }])
  }

  return (
    <main>
      <Title title={`Dashboard - ${totalMovies} films dont ${total4K} en 4K`} />
      <Slide movies={movies} />


      {filteredMovies.length === 0 && <p>Aucun film trouvé.</p>}
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un titre" />
      <AjoutBluray onAdd={addMovie} />
      <div>
        <Button title="Tous" onClick={() => setFilter('Tous')} />
        <Button title="Blu-ray" onClick={() => setFilter('Blu-ray')} />
        <Button title="Ultra 4k" onClick={() => setFilter('Ultra 4k')} />
        <Button title="Blu-ray 3D" onClick={() => setFilter('Blu-ray 3D')} />
      </div>
      <section className="cards">
        {filteredMovies.map((movie) => (
          <div key={movie.id}>
            <BlurayCard
              title={movie.title}
              year={movie.year}
              format={movie.format}
            />
            <Button onClick={() => deleteMovie(movie.id)} title="Supprimer" />
          </div>
        ))}
      </section>
    </main>
  )
}

export default App
