type TitleProps = {
    title: string
}

export function Title(titleProps: TitleProps) {
    return (
        <h1>{titleProps.title}</h1>
    )
}