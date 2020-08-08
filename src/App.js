import React from "react";
import "./styles.css";
import User from "./User.js";

class App extends React.Component {
  state = {
    user: {
      username: 'jioke',
      firstName: 'Kingsley',
      lastName: 'Silas'
    }
  }

  render() {
    return(
      <div>
        <User user={this.state.user} />
      </div>
    )
  }
}

export default App;
