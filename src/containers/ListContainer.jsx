import React, { useEffect, useState } from 'react'
import List from '../components/board/List'
import * as boards from '../apis/boards'

const ListContainer = () => {
  // 🧊 state
  const [boardList, setBoardList] = useState([])
  const [isLodaing, setLodaing] = useState(false)

  // 🌞 함수
  const getBoardList = async () => {
    // ⏱ 로딩 시작
    setLodaing(true)
    const response = await boards.list()
    const data = await response.data      // ⭐boardList
    setBoardList(data)
    setLodaing(false)
    // ⏱ 로딩 끝
  }

  // ❓ hook
  useEffect( ()=> {
    getBoardList()
  }, [])

  return (
    <>
      {/* 게시글 목록 */}
      <List boardList={boardList} isLodaing={isLodaing} />
    </>
  )
}

export default ListContainer