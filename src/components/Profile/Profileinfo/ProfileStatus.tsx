import React, { ChangeEvent } from "react";

type ProfileStatusType = {
  status: string;
  updateStatus: (status: string) => void;
};

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  diactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onChange}
              value={this.state.status}
              autoFocus
              onBlur={this.diactivateEditMode}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "No status"}
            </span>
          </div>
        )}
      </div>
    );
  }
}
