import _ from "lodash";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ editStream, fetchStream }) => {
  // Important
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    fetchStream(id);
  }, []);

  const onSubmit = (formValues) => {
    editStream(id, formValues);
  };

  if (!stream) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(stream, "title", "description")}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
};

export default connect(null, { fetchStream, editStream })(StreamEdit);
