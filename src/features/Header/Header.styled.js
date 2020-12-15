import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15), 0 1px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  min-height: 46px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;

  textarea {
    resize: none;
    outline: none;
    border: none;
    padding: 20px 0 0 0;
    overflow: auto;

    &:hover {
      outline: none;
    }

    &:focus {
      outline: 0;
      -webkit-appearance: none;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
    }

    &:active {
      outline: none;
    }
  }
`

export const InputField = styled.input`
  margin: 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  padding: 10px 0;

  &:hover {
    border: none;
    outline: none;
    border-bottom: 1px solid #e0e0e0;
    -webkit-appearance: none;
  }

  &:focus {
    border: none;
    border-bottom: 1px solid #4c8bf5;
    outline: 0;
    -webkit-appearance: none;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
`

// export const ContentEditable = styled.div`
//   width: 100%;
//   min-height: 46px;
//   max-height: 400px;
//   overflow-y: scroll;
//   outline: none;
//   padding-top: 10px;
// `

export const InputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  .add {
    font-size: 2.2rem;
    color: rgb(255, 204, 0);
    cursor: pointer;
  }

  .close {
    text-transform: uppercase;
    color: #4c8bf5;
    cursor: pointer;
  }
`
