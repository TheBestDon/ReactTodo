import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';


export var LoginPage = React.createClass({
  onLogin() {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },
  render: function () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with Github bellow
              </p>
              <button className="button" onClick={this.onLogin}>Login With Github</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(LoginPage);
