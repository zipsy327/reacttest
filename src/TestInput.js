import React,{Component} from 'react';

export default class TestInput extends Component{
    //이벤트 핸들러
    handleClick=()=>{
        /*ref 특성은 컴포넌트가 마운팅될때 컴포넌트에 대한 참조를
        this.refs 에 추가한다*/

        this.refs.txtInput1.value="React Study Ref!!!";
        this.refs.txtInput1.focus();
    }
    render(){
        return (
            <div>
                <h1>Test Input Tag!!!</h1>
                <input type="text" className="form-control"
                  style={{width:'200px'}}
                  ref="txtInput1"/>

                  <button  type="button"
                  className="btn btn-success btn-md"
                  onClick={this.handleClick.bind(this)}>Focus Test Input</button>
            </div>
        )
    }
}