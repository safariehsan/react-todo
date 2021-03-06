import React, { Component } from "react";
import Modall from "./modal";
import { Link } from "react-router-dom";

class Card extends Component {
  state = {
    modal: false,
    taskId: 0,
    removeMode: false,
    addMode: false,
    editMode: false,
    readMode: false
  };
  constructor(props) {
    super(props);
  }
  onEdit = (task) => {
    this.props.handleEdit(task);
    this.setState({
      modal: false,
    });
  };
  onDelete = (taskId) => {
    this.props.handleDelete(taskId);
    this.setState({
      modal: false,
    });
  };
  onDetail = (taskId) => {
    //window.location = `/todo/detail/${taskId}`;
    this.props.history.push(`/todo/detail/${taskId}`);
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-2 justify-content-center">
          {this.props.tasks.map((task, index) => (
            <div className="col-sm-4 taskcard" key={index}>
              <div
                className={
                  task.done === true ? "card m-2 bg-light" : "card m-2 bg-light"
                }
              >
                <div className="card-header d-flex">
                  <h5>
                    {task.featured ? (
                      <i
                        className="fa fa-star ml-auto p-2"
                        style={{ color: "orange" }}
                      ></i>
                    ) : (
                      <i className="fa fa-star-o ml-auto p-2"></i>
                    )}
                    {task.name}
                  </h5>
                  <span className="badge badge-secondary ml-auto tskcat">
                    {task.category}
                  </span>
                </div>
                <div className="card-body">
                  <p className="card-text">{task.desc}</p>
                </div>

                <div className="card-footer d-flex">
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => {
                      this.setState({
                        taskId: task.id,
                        modal: true,
                        removeMode: false,
                        editMode: true,
                        addMode: false,
                        readMode: false
                      });
                    }}
                  >
                    <i className="fa fa-pencil" />
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm ml-2"
                    onClick={() => {
                      this.setState({
                        taskId: task.id,
                        modal: true,
                        removeMode: true,
                        editMode: false,
                        addMode: false,
                        readMode: false
                      });
                    }}
                  >
                    <i className="fa fa-trash" />
                  </button>
                  <button
                    className="btn btn-outline-info btn-sm ml-2"
                    onClick={() => {
                      this.setState({
                        taskId: task.id,
                        modal: true,
                        removeMode: false,
                        editMode: false,
                        addMode: false,
                        readMode: true
                      });
                    }}
                  >
                    <i className="fa fa-eye" />
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-sm ml-2" disabled>
                    {task.done === true ? <i className="fa fa-check" /> : <i className="fa fa-close" />}
                  </button>
                  {/* <Link
                    to={{
                      pathname: `/todo/detail/${task.id}`,
                    }}
                    params={{ tasks: this.props.tasks }}
                    className="btn btn-outline-info btn-sm ml-2"
                  >
                    <i className="fa fa-eye" />
                  </Link> */}
                  <small className="text-muted ml-auto">
                    <i className="fa fa-calendar"></i> {task.date}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
        {this.state.modal === true ? (
          <Modall
            show={true}
            editMode={this.state.editMode}
            addMode={this.state.addMode}
            removeMode={this.state.removeMode}
            readMode={this.state.readMode}
            taskId={this.state.taskId}
            tasks={this.props.tasks}
            handleRemove={this.onDelete}
            handleEdit={this.onEdit}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Card;
