type MusicType = {
    title: string
}

export const Music = (props: MusicType) => {
    return (
        <div>
            {props.title}
        </div>
    )
}