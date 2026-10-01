export type Film = {
    id: number;
    title: string;
    year: number;
    format: 'Blu-ray' | 'Ultra 4k' | 'Blu-ray 3D';
}


export const blurays: Film[] = [
    {
        id: 1,
        title: "Retour vers le futur",
        year: 1985,
        format: "Blu-ray"
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        format: "Blu-ray"
    },
    {
        id: 3,
        title: "Interstellar",
        year: 2014,
        format: "Ultra 4k"
    },
    {
        id: 4,
        title: "Jurassic Park",
        year: 1993,
        format: "Blu-ray 3D"
    },
    {
        id: 5,
        title: "The Dark Knight",
        year: 2008,
        format: "Blu-ray"
    },
    {
        id: 6,
        title: "Avatar",
        year: 2009,
        format: "Blu-ray 3D"
    }
]
