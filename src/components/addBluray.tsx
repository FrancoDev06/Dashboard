import { useState } from 'react'
import type { Movie } from '../data/movie'
import type { SubmitEvent } from "react";


type AjoutBlurayProps = {
    onAdd: (film: Omit<Movie, 'id'>) => void
}

export function AjoutBluray({ onAdd }: AjoutBlurayProps) {
    const [titre, setTitre] = useState('')
    const [year, setYear] = useState(2024)
    const [format, setFormat] = useState<Movie['format']>('Blu-ray')


    function valider(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        if (titre.trim() === '') return
        onAdd({ title: titre, year: year, format: format })
        setTitre('')
        setYear(2024)
        setFormat('Blu-ray')
    }


    return (

        <form onSubmit={valider}>
            <input value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre" />
            <input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} placeholder="Year" />
            <select value={format} onChange={(e) => setFormat(e.target.value as Movie['format'])}>
                <option value="Blu-ray">Blu-ray</option>
                <option value="Ultra 4k">Ultra 4k</option>
                <option value="Blu-ray 3D">Blu-ray 3D</option>
            </select>
            <button type="submit">Ajouter</button>
        </form>
    )
}