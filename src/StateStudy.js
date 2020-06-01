import React,{Component} from 'react';
import './My.css';

export default class StateStudy extends Component{
    /*
    react 는 변수 설정을 state로 줘야만 나중에 변경이 가능하다
    변경하는 방법은 setState 안에서만 가능하다
    */
    state={
        number:0
    }
    render(){
        return (
            <div>
               <h3 className="alert alert-danger">Number Count</h3>
               <div className="numstyle">
                   {this.state.number}
               </div>
               <br/>
               <button type="button"
               className="btn btn-danger btn-lg"
               onClick={
                    ()=>{
                        // 10까지만 증가되도록 하려고 한다
                        if(this.state.number<10){
                          this.setState(
                              {
                                  number:this.state.number+1
                              }
                          )  
                        }
                    }
               }>증가</button>

     <button type="button"
               className="btn btn-success btn-lg"
               onClick={
                    ()=>{
                        // 0까지만 감소되도록 하려고 한다
                        if(this.state.number>0){
                          this.setState(
                              {
                                  number:this.state.number-1
                              }
                          )  
                        }
                    }
               }>감소</button>              
            </div>
        )
    }
}