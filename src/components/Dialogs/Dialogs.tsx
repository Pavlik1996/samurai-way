import s from "./Dialogs.module.css"

type DialogsType = {
    title: string
}

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Pasha
                </div>
                <div className={s.dialog}>
                    Masha
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Zhenya
                </div>
                <div className={s.dialog}>
                    Kot
                </div>
                <div className={s.dialog}>
                    Svin'ya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>How are you?</div>
            </div>
        </div>
    )
}