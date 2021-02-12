import React from 'react';
class Form extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            phone:'',
            error:{

            }
            
        };
    }
    handleChange=e=>{
        // console.log("hello");
        // console.log(e);
        this.setState({[e.target.name]:e.target.value});

    };
    handleSubmit=e=>{
        e.preventDefault();
        // console.log("submittted");
        const{name,phone,email}=this.state
      
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
        
        this.props.formData(this.state);
        this.setState({error:{},name:'',email:'',phone:''});

    };
   
    
    render(){
        const{error}=this.state;
        return(
         
                 <div className="card w-50 mx-auto mt-5">
                    <div className="card-header"
                    style={{
                        color:"white",
                        backgroundColor:"blue",
                        fontWeight:"bold"
                    }}
                    >
                        <h1>Contact Form</h1>
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
                            
                            <button type="submit" style={{backgroundColor:"blue",color:'white'}} className="btn-block">Submit</button>
                         
                        </form>
                    </div>
                </div>
            
        );
    }
}
export default Form;