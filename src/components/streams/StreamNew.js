import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../StreamForm";

const StreamNew = ({ createStream }) => {
  return (
    <div>
      StreamNew
      <StreamForm submitAction={createStream} />
    </div>
  );
};
export default connect(null, { createStream })(StreamNew);
