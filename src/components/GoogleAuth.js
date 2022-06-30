import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "17444296180-8j3j5ebuffpo323l6j0h96bu9tkn2m01.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(status => this.onAuthChange(status));
          console.log()
        });
    });
  }

  onAuthChange(isSignedIn) {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  signIn() {
    this.auth.signIn();
  }
  signOut() {
    this.auth.signOut();
  }

  render() {
    return (
      <button
        onClick={() => (this.props.isSignedIn ? this.signOut() : this.signIn())}
      >{`${this.props.isSignedIn ? "log out" : "login"}`}</button>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
