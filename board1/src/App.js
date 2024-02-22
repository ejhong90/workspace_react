import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [isShow, setIsShow] = useState(false);
  let [idx, setIdx] = useState(0);
  // let [boardNo, setBoardNo] = useState(0);
  // let selectedBoard;

  const board_list = [
    {
      'boardNo' : 1,
      'title' : '1번 글',
      'content' : '1번 글 내용',
      'writer' : '김자바',
      'regDate' : '2024-02-01'
    }, 
    {
      'boardNo' : 2,
      'title' : '2번 글',
      'content' : '2번 글 내용',
      'writer' : '홍길동',
      'regDate' : '2024-02-02'
    }, 
    {
      'boardNo' : 3,
      'title' : '3번 글',
      'content' : '3번 글 내용',
      'writer' : '유하민',
      'regDate' : '2024-02-03'
    }, 
    {
      'boardNo' : 4,
      'title' : '4번 글',
      'content' : '4번 글 내용',
      'writer' : '고은호',
      'regDate' : '2024-02-04'
    }, 
    {
      'boardNo' : 5,
      'title' : '5번 글',
      'content' : '5번 글 내용',
      'writer' : '남예준',
      'regDate' : '2024-02-05'
    }
  ]


  return (
      <div className="App">
        <div>헤더</div>
        <div>
          <table>
            <thead>
              <tr>
                <td>글번호</td>
                <td>제목</td>
                <td>작성자</td>
                <td>작성일</td>
              </tr>
            </thead>
            <tbody>
              {
                board_list.map((e, i) => {
                  return(
                    <tr key={i}>
                      <td>{e.boardNo}</td>
                      <td><span onClick={() => {
                        setIsShow(true);
                        setIdx(i);
                        // selectedBoard = board_list[i];
                        // setBoardNo(e.boardNo);
                      }}>{e.title}</span></td>
                      <td>{e.writer}</td>
                      <td>{e.regDate}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="detail-div">    
          {
            isShow ? <Detail idx={idx} board={board_list}/> : ''
          }
        </div>  

      </div>
  );
}
// board={board_list[boardNo-1]} boardNo={boardNo}

// 상세 정보 컴포넌트
function Detail(props){
  console.log(props);
  return(
    <div>
      <div>
        글번호 : {props.board[props.idx].boardNo}
      </div>
      <div>
        제목 : {props.board[props.idx].title}
      </div>
      <div>
        내용 : {props.board[props.idx].content}
      </div>
      <div>
        작성자 : {props.board[props.idx].writer}
      </div>
      <div>
        작성일 : {props.board[props.idx].regDate}
      </div>
    </div>
  )
}
export default App;
