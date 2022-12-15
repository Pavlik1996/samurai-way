
type NewsType = {
    title: string
}

export const News = (props: NewsType) => {
    return (
        <div>
            {props.title}
        </div>
    )
}