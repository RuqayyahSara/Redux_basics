import React from "react";
import {connect} from "react-redux";
class App extends React.Component{
    render(){
      console.log(this.props);  
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
    }
 }

 export default connect(null,null)(App);