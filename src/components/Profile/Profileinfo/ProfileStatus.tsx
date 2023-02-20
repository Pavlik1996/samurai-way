import React from 'react';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
    }

    activateEditMode() {
        this.setState({editMode: !this.state.editMode})
    }


    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div><input value={this.props.status} autoFocus onBlur={this.activateEditMode.bind(this)}/>
                        </div>
                        : <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span></div>
                }
            </div>

        )
    }
}

