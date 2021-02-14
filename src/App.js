import React from 'react';
import Contact from './Components/Contact';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
//import sweetalert
import swal from 'sweetalert';
// code got from reacttostify 
import { ToastContainer, toast } from 'react-toastify';
import uuid from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends React.Component{
  state={
    contact:[
      {id:1,name:'Ram',phone:98432355,email:"ram@gmail.com"},
      {id:2,name:"Shayam",phone:797826,email:"shayam@gmail.com"},
      {id:3,name:"Hari",phone:9739447, email:"hari@gmail.com"},
      {id:4,name:"Sonam",phone:937384,email:"sonam@gamil.com"},
      {id:5,name:"Pratima",phone:83753893,email:"pratima@gmail.com"}
    ] 
    // showHide:false

  };
  handleClick=()=>{
    this.setState({showHide:!this.state.showHide});
    // console.log("called");

  };
  handleDelete=id=>{
    console.log(id);
    let filterData=this.state.contact.filter(function(contact){
      return contact.id !==id;
    });
    // yo line le delete garni kam garcha
    // this.setState({contact:filterData});

    //below code take form the sweetalert
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this contact?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        this.setState({contact:filterData});
        swal("Deleted!", "Contact file has been deleted!", "success");
        toast.success("Successsfully Delelted!!!!");

      }
    });
  };
  handleSubmittedData=formData=>{
    // console.log(formData);
    // console.log("parent called");
    let id=this.state.contact.length+1;
    let insertData={id,...formData};
    console.log(insertData);
    this.setState({contact:[insertData,...this.state.contact]});
    toast.success("Data Inserted Successfully!!!");


  };
  handleEditData=(editData)=>{
    // console.log(editData);
    let editContact=this.state.contact.map(function(contact){
      if(editData.id===contact.id){
        return editData;
      }
      
        return contact;
      
    });
    // console.log("edit contact ")
    this.setState({contact:editContact});
    toast.success("Contact Edited Sucessfully");

  };
  render(){
    // console.log(this.state.showHide);
   
   
    console.log(this.state.contact);
    for(let i=0;i<this.state.contact;i++){
      console.log(this.state.contact[i]);
    }
    return(
      // <h1>this is appjs compoent</h1>
      <div>
                
{/* <button type="button" onClick={this.handleClick}>Show</button> */}
        <Navbar title="Contact Management System"/>
        <Form formData={this.handleSubmittedData}/>
        {this.state.contact.map((contact)=>(
        <Contact contact={contact} delete={this.handleDelete} key={contact.id} edit={this.handleEditData}/>))}
        
        
        <ToastContainer />
      </div>
    );
  }
}
export default App;