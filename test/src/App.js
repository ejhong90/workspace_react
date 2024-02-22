import logo from './logo.svg';
import './App.css';
import Footer from './footer';

// App() 함수의 리턴 문 안에 html(JSX) 태그 작성하면
// 해당 내용이 화면에 출력됨
// return 안의 내용은 반드시 하나의 태그에 감싸여 있어야 함
// 의미없는 태그로 모든 내용을 감싸는 건 불편하기에 하나의 기능 제공함 <></>


function App() {
  const name = '홍길동';
  const age = 20;

  return (
    <>
      <div>
        헤더 {name}
      </div>
      <MainContent name={name} age={age}/>
      <Footer />
    </>
  );
}

// 본문 영역을 나타내는 컴포넌트 만들기
function MainContent(props){
  return (
    <>
      <div>
        본문 영역 {props.name} {props.age}살
      </div>
    </>
  );
}


// class는 자바스크립트 자체에 기능이 존재함
// 그래서 html의 class = 으로 안 하고 className 으로 씀


export default App;
