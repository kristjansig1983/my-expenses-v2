import { useState, useRef } from 'react'
import './App.css'
import styled, { css } from 'styled-components'

const App = () => {
  const [objectList, setObjectList] = useState([])

  const nameValue = useRef('')
  const valueValue = useRef('')

  const handleClick = () => {
    setObjectList((list) => [
      ...list,
      { name: nameValue.current, value: valueValue.current },
    ])
  }

  return (
    <Page>
      <Form>
        <Input>
          <p>Name: </p>
          <Field
            onChange={(event) => {
              nameValue.current = event.target.value
            }}
          />
        </Input>
        <Input>
          <p>Value: </p>
          <Field
            onChange={(event) => {
              valueValue.current = event.target.value
            }}
          />
        </Input>
        <Button type='button' onClick={handleClick}>
          Submit!
        </Button>
      </Form>
      <List>
        <Items>
          <p>List:</p>
          <p>[{objectList.map((item) => `${item.name}, `)}]</p>
        </Items>
        <Items>
          <p>Sum:</p>
          <p>
            {objectList.reduce(
              (previousValue, currentValue) =>
                previousValue + Number(currentValue.value),
              0
            )}
          </p>
        </Items>
      </List>
    </Page>
  )
}

const Page = styled.div`
  text-align: center;
  background-color: #282c34;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  height: 100vh;
`

const Field = styled.input`
  height: 20px;
  width: 200px;
  display: flex;
  justify-items: right;
`
const Form = styled.div`
  flex-direction: column;
  font-size: 18px;
  color: azure;
  margin-left: 20px;
  margin-right: 100px;
`
const Button = styled.button`
  height: 30px;
  width: 200px;
  margin-top: 8px;
  background-color: blue;
  align-content: right;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`
const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-content: right;
`
const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export default App
