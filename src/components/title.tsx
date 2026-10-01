type TitleProps = {
    title: string
}

export function Title(title: TitleProps) {
    return (
        <h1>{title.title}</h1>
    )
}