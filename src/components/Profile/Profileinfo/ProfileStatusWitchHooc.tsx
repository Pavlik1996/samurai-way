import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

type ProfileStatusType = {
    status: string;
    updateStatus: (status: string) => void;
};


export const ProfileStatusWitchHooc = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setTatus] = useState(props.status)


    const editModeHandler = () => {
        setEditMode(!editMode)
        props.updateStatus(status)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input
                        onChange={onChangeHandler}
                        value={status}
                        autoFocus
                        onBlur={editModeHandler}
                    />
                </div>
                : <div>
                    <span onDoubleClick={editModeHandler}>
                        {props.status || "No status"}
                    </span>
                </div>
            }
        </div>
    );
}

