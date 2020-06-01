import React,{Component} from 'react';
import './App.css';
import img1 from './s3.JPG';
import img2 from './c1.png';

// function App() {
//   return (
//     <div className="App">
//       <h2>React Start!!!</h2>
//     </div>   
//   );
// }

//클래스 형태로 구현하기
//함수형과 같으나 this 가 존재한다
class App extends Component{
   render(){
     //주석1
     /* 주석2 */
     return (
       <div>
         {/* 주석3*/}
        <h1 className="test1">React Study!!!</h1>
        <h2 className="test2">재미있는 리액트 수업!!</h2>
        <h3>이미지 나타내기</h3>
        <img src={img1} className="imgstyle1 imgstyle2"
           alt=""/>
        <img src={img2} className="imgstyle1 imgstyle2"
          alt=""/>
        <h3>스타일쉬트 직접 주는 방법</h3>
        <img src={img1} alt=""
        style={{width:'100px',height:'100px',border:'3px solid green'}}></img>
       </div>
     )
   }
}

export default App;
