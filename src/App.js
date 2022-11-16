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
      <Card>
        <Items>
          <p>List:</p>
          <p>[{objectList.map((item) => `${item.name + item.value}, `)}]</p>
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
        <Delete type='button'></Delete>
      </Card>
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

const Card = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
`
const Delete = styled.button`
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
`
export default App
