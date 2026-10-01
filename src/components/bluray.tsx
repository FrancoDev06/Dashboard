export type BlurayCardProps = {
    title: string;
    year: number;
    format: 'Blu-ray' | 'Ultra 4k' | 'Blu-ray 3D';
}


export function BlurayCard({ title, year, format }: BlurayCardProps) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{format}</p>
            {format === 'Ultra 4k' && <span>4K</span>}
        </div>
    )
}