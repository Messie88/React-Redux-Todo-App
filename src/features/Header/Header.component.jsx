import React, { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import * as S from './Header.styled'

const Header = () => {
  const [text, setText] = useState({
    title: '',
    content: '',
  })
  const [show, setShow] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setText((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <S.Container>
      <h2>Hello Messie!</h2>
      <S.Input>
        {show && (
          <S.InputField
            placeholder="Title"
            type="text"
            name="title"
            value={text.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          onClick={() => setShow(true)}
          value={text.content}
          placeholder="Click to create note ..."
          onChange={handleChange}
        ></textarea>
        {/* <S.ContentEditable
          contentEditable={true}
          onClick={() => setShowTitle(true)}
        >
          {showTitle ? '' : 'Create note ...'}
        </S.ContentEditable> */}

        {show && (
          <S.InputFooter>
            <div className="close" onClick={() => setShow(false)}>
              close
            </div>
            <AddCircleIcon className="add" />
          </S.InputFooter>
        )}
      </S.Input>
    </S.Container>
  )
}

export default Header
