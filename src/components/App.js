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
const mapStateToProps =(state)=>{
    return{
        data: "Ruqayyah"
    }
}
 export default connect(mapStateToProps)(App);