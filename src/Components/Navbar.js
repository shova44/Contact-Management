import React from 'react';
class Navbar extends React.Component{
    render(){
        console.log(this.props);
        return(
            // <h1>this is Navbar</h1>

            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'blue',color:'white'}}>
             
                <a className="navbar-brand" href="#" style={{color:'white',textAlign:"center",fontSize:"bold",marginLeft:550,fontSize:40}}>{this.props.title}</a>
                
            </nav>
        );
    }
}
export default Navbar;