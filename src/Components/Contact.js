import React from 'react';
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShowing:false,
            isEditing:false,  
            name:this.props.contact.name,
            email:this.props.contact.email,
            phone:this.props.contact.phone,
            error:{}
        };
    }
    handleShowHide=()=>{
        // console.log("clicked");
        this.setState({isShowing: ! this.state.isShowing});

    };
    handleDelete=()=>{
        this.props.delete(this.props.contact.id);
    }
    handleEditing=()=>{
        this.setState({isEditing:true});
    }
    handleChange=e=>{
        // console.log("hello");
        // console.log(e);
        this.setState({[e.target.name]:e.target.value});

    };
    handleSubmit=e=>{
        e.preventDefault();
        // console.log("submittted");
        const{name,phone,email}=this.state;
      
        if(name===''){
            return this.setState({error:{name:'Please Enter Your Name'}});

        }
        else if(email===''){
            return this.setState({error:{email:"Please Enter Email Address"}});
        } 
        else if(phone==='')
        {
            return this.setState({error:{phone:"Please Enter Your Phone Number"}});
        }
        
        // this.props.formData(this.state);
        let editedData={
            name,email,phone,id:this.props.contact.id
        }
        this.props.edit(editedData);
        this.setState({error:{},isEditing:false});
        

    };

    
    render(){
        let cls=this.state.isShowing ? "fa fa-chevron-up mr-3" : "fa fa-chevron-down mr-3";
        // console.log(this)
        const{error}=this.state;
        if(this.state.isEditing){
            
            return(
                <div className="card w-50 mx-auto mt-5">
                    <div className="card-header"
                    style={{
                        color:"white",
                        backgroundColor:"blue",
                        fontWeight:"bold"
                    }}
                    >
                        <h1>Form Editing</h1>
                    </div>
                    <div className="card-body">
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <label htmlFor="name" style={{fontWeight:"bold"}}>Name</label>
                            <input type="text" placeholder="Name" className="form-control" onChange={this.handleChange} value={this.state.name} name="name"/>
                            <span style={{color:'red'}}>{error.name}</span>
                            </div>

                            <div className="form-group">
                            <label htmlFor="email" style={{fontWeight:"bold"}}>Email</label>
                            <input type="text" placeholder="Email" className="form-control" onChange={this.handleChange} value={this.state.email} name="email"/>
                            <span style={{color:"red"}}>{error.email}</span>
                            </div>

                            <div className="form-group">
                            <label htmlFor="phone" style={{fontWeight:"bold"}}>Phone</label>
                            <input type="number" placeholder="Phone" className="form-control" onChange={this.handleChange} value={this.state.phone} name="phone"/>
                            {/* name="phone chai mati state ma je cha tei deko ho" */}
                            <span style={{color:"red"}}>{error.phone}</span>
                            </div>
                            
                            <button type="submit" style={{backgroundColor:"blue",color:'white'}} className="btn-block">Edit</button>
                         
                        </form>
                    </div>
                </div>

            );
        }
        else{
            return(
                // <h1>this is contact section</h1>
                <div>
                    <div className="card w-50 mt-5 mx-auto">
                        <div className="card-header" style={{backgroundColor:"blue",color:"white",fontWeight:"bold"}}>
                           <h1>
                             <i className={cls} onClick={this.handleShowHide}></i>
                                {this.props.contact.name }
                                <div className='float-right'>
                                <i className="fas fa-pencil-alt mr-3" onClick={this.handleEditing}></i>
                                <i className="fas fa-trash-alt mr-4" onClick={this.handleDelete}></i>
                                </div>
                            </h1>
                        </div>
                        {this.state.isShowing ? ( <div className="card-body w-50 mt-5 mx-auto">
                            <ul className="lst-group">
                                <li className="list-group-item">{this.props.contact.phone}</li>
                                <li className="list-group-item">{this.props.contact.email}</li>
    
                            </ul>
                        </div>) : null}
                       
    
                    </div>
                </div>
            );
            
        }

        
    }
}
export default Contact; 