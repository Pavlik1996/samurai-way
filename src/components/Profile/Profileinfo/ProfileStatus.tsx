import React, { ChangeEvent } from "react";

type ProfileStatusType = {
  status: string;
  updateStatus: (status: string) => void;
};

type stateType = {
  editMode: boolean;
  status: string;
};

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state: stateType = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  diActivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps: ProfileStatusType, prevState: stateType) {
    console.log("componentDidUpdate");

    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onChange}
              value={this.state.status}
              autoFocus
              onBlur={this.diActivateEditMode}
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
