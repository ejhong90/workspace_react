import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let title = '첫번째 글';

  let arr = [1,2];
  let num1 = arr[0]; // 1

  let arr1 = [1,2];
  let [a, b] = [1, 2];
  // console.log(b);

  // state 변수
  let [title, setTitle] = useState(['리액트 학습', '울산 맛집', '겨울 코트 추천']); // 중간에 변수의 값이 바뀔때 사용
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);
  let [isShow, setIsShow] = useState(false); 

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button type='button' onClick={() =>{
        let title2 = [...title]; // 배열을 완전 복사
        title2[0] = '남자 옷 추천';
        setTitle(title2);
      }}>글 변경</button>

      {/* 반복문 */}
      {
        title.map((e, i) => {
        return(
          <List key={i} title={e} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt} isShow={setIsShow}/>
          
        );
        
      })
      }

      {/* if 문 */}
    {
      isShow ? <Detail /> : ''
    }
    
    </div>
  );
}

// 블로그 글 하나하나를 표현하는 컴포넌트
function List(props){

  return(
    <>
      <div className="list">
        <h4><span onClick={() => {
          props.isShow(true);
        }}>{props.title}</span>
          <span onClick={() => {
            let likeArr = [...props.likeCnt];
            likeArr[props.idx]++;
            props.setLikeCnt(likeArr);          
        }}>❤</span> {props.likeCnt[props.idx]} </h4>
        <p>2월 19일 작성</p>
      </div>
    </>
  );
}

// 상세 정보를 표현하는 컴퐅넌트
function Detail(){

  return(
    <div className="detail">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}





export default App;
