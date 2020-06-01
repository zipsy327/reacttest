import React,{Component} from 'react';
import './My.css';

export default class Person extends Component{
  
    state={
        name:"강호동",
        age:30,
        addr:"서울"
    }

    buttonClick=()=>{
        this.setState({
            name:this.refs.name.value,
            age:this.refs.age.value,
            addr:this.refs.addr.value
        });
        this.refs.name.value='';
        this.refs.age.value='';
        this.refs.addr.value='';
        this.refs.name.focus();        
    }
    render(){
        return (
            <div>
               <h3 className="alert alert-danger" style={{width:'400px'}}>개인 정보 사항</h3>
               <div className="personstyle">
               이름 : {this.state.name}<br/>
               나이 : {this.state.age}<br/>
               주소 : {this.state.addr}                    
               </div>
               <hr/>
               <div className="form-inline">
                 <b className="title">이름 변경 :</b>
                <input type="text" className="form-control"
                style={{width:'100px'}} ref="name"/><br/>

               <b className="title">나이 변경 :</b>
               <input type="text" className="form-control"
                style={{width:'60px'}} ref="age"/><br/>

               <b className="title">주소 변경 :</b>
               <input type="text" className="form-control"
                style={{width:'120px'}} ref="addr"/><br/>
                </div>
                <br/>
               <button type="button"
               className="btn btn-danger btn-lg"
               onClick={this.buttonClick.bind(this)}>개인 정보 변경</button>
           
            </div>
        )
    }
}