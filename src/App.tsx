import './App.css'
import { Title } from './components/title'
import { BlurayCard } from './components/bluray'
import { Button } from './components/button'
import { blurays } from './data/film'
import { useState } from 'react'
import { AjoutBluray } from './components/ajoutBluray'
import type { Film } from './data/film'

function App() {

  const [films, setFilms] = useState<Film[]>(blurays)

  const totalFilms = films.length
  const total4K = films.filter((film) => film.format === 'Ultra 4k').length
  const deleteFilm = (id: number) => {
    setFilms(films.filter((film) => film.id !== id))
  }

  function ajouter(film: Omit<Film, 'id'>) {
  setFilms([...films, { ...film, id: Date.now() }])
}

  return (
    <main>
      <Title title={`Dashboard - ${totalFilms} films dont ${total4K} en 4K`} />
      <AjoutBluray onAdd={ajouter} />
      <section className="cards">
        {films.map((film) => (
          <div key={film.id}>
            <BlurayCard
              title={film.title}
              year={film.year}
              format={film.format}
            />
            <Button onClick={() => deleteFilm(film.id)} title="Supprimer" />
          </div>
        ))}
      </section>
    </main>
  )
}

export default App
