import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
import Modal from "../../Modal";

const StreamList = ({ streams, fetchStreams, isSignedIn, currentUserId }) => {
  const [selectedDelete, setSelectedDelete] = useState(null);

  useEffect(() => {
    fetchStreams();
  }, []);

  const renderCreateButton = () => <Link to="/streams/new">Create Stream</Link>;

  const renderAdminButtons = stream => (
    <>
      <Link to="/streams/edit" state={stream}>
        edit
      </Link>
      <button onClick={() => setSelectedDelete(stream)}>delete</button>
    </>
  );

  const renderedList = Object.values(streams).map(stream => (
    <div style={{ borderBottom: "1px solid black" }} key={stream.id}>
      <div>
        <h3>{stream.name}</h3>
        <p>{stream.description}</p>
      </div>
      {stream.userId === currentUserId ? renderAdminButtons(stream) : null}
    </div>
  ));

  const renderModal = stream => stream ? <Modal setSelectedDelete={setSelectedDelete} stream={stream} /> : stream;

  return (
    <div>
      {renderedList}
      <div>{isSignedIn ? renderCreateButton() : null}</div>
      {renderModal(selectedDelete)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    streams: state.streams,
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
