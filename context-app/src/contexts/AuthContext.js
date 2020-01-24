import React, { createContext, Component } from "react";

export const AuthContext = createContext();

export class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  };

  toggleAuth = () => {
    this.setState((prevState, props) => {
      return { isAuthenticated: !prevState.isAuthenticated };
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
