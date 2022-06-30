import React from "react";
import StreamForm from "../StreamForm";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { editStream } from "../../actions";

const StreamEdit = ({ editStream }) => {
    const location = useLocation()
    return <div>
        StreamEdit
        <StreamForm submitAction={editStream} initialValues={location.state} />
    </div>
}
export default connect(null, { editStream })(StreamEdit)