import s from "./Paginator.module.css";

type PropsType = {
    onClickHandlerChangePage: (page: number) => void,
    currentPage: number
}

export const Paginagor: React.FC<PropsType> = ({ onClickHandlerChangePage, currentPage }) => {
    // let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 30; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(el => <span
                key={el}
                onClick={() => onClickHandlerChangePage(el)}
                className={currentPage === el ? s.selected : ""}
            >
                {` ${el} `}
            </span>
            )}
        </div>
    )
}