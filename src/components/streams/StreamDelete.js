import React, { useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { useParams, Link } from "react-router-dom";
import { connect, useSelector } from "react-redux/es/exports";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = ({ fetchStream, deleteStream }) => {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    fetchStream(id);
  }, []);

  const actions = (
    <React.Fragment>
      <button onClick={() => deleteStream(id)} className="ui button negative">
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want delete to this stream with title: ${stream.title}`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

export default connect(null, { fetchStream, deleteStream })(StreamDelete);
