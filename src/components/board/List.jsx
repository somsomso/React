import React from 'react'
import {Link} from 'react-router-dom'

const List = ({ boardList, isLodaing }) => {
  console.log(boardList);
  return (
    <div className='container'>
      <h1>게시글 목록</h1>
      <Link to="/boards/insert">글쓰기</Link>

      {
        isLodaing &&
        <div>
          <img src="/img/loading.webp" alt="loading" width="100%" />
        </div>
      }
      {
        !isLodaing && boardList && (
          <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일자</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board) => 
            (
              <tr key={board.no}>
                <td>{board.no}</td>
                <td>
                  <Link to={`/boards/${board.no}`}>
                    {board.title}
                  </Link>
                </td>
                <td>{board.writer}</td>
                <td>{board.regDate}</td>
              </tr>
            )
          )}
        </tbody>
          </table>
        )
      }
    </div>
  )
}

export default List