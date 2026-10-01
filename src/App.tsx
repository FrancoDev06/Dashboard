import './App.css'
import { Title } from './components/title'
import { BlurayCard } from './components/bluray'
import { blurays } from './data/film'

function App() {

  const totalFilms = blurays.length
  const total4K = blurays.filter((film) => film.format === 'Ultra 4k').length
  return (
    <main>
      <Title title={`Dashboard - ${totalFilms} films dont ${total4K} en 4K`} />

      <article>
        <BlurayCard title="Retour vers le futur" year={1986} format="Blu-ray" />
        <BlurayCard title="Retour vers le futur 2" year={1988} format="Blu-ray" />
        <BlurayCard title="Retour vers le futur 3" year={1989} format="Blu-ray" />
      </article>
      <section className="cards">
        {blurays.map((bluray) => (

          <BlurayCard key={bluray.id} title={bluray.title} year={bluray.year} format={bluray.format} />
        ))}
      </section>
    </main>
  )
}

export default App
