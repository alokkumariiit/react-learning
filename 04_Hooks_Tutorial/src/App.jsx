import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let [name, setname] = useState("Alok")
  // let [age, setage] = useState(20)
  // let [branch, setbranch] = useState("ETC")


  // let [count1, setCount1] = useState(0);
  // let [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount1(++count1);
  //     console.log("count1 incresed due to render of count2")
  //   }, 2000)
  // },[count2])

  let [count, setCount] = useState(0);
  let num = useRef(0);
  useEffect(() => {
    num.current = num.current + 1;
  })

  let inputValue = useRef("")
  console.log(inputValue);
  return (
    <>

      <input
        type="text"
        ref={inputValue}
        placeholder="Name"
        value="Alok"
      />

      {/* <h1>My name is {name}</h1>
      <h1>I am {age} years old</h1>
      <h1>My Branch is {branch}</h1>
      <button
        onClick={() => {
          setname("Ajit");
          setage(22);
          setbranch("IT");
        }}
      >Set</button> */}

      {/* <h1>{count}</h1>

      <button onClick={()=>setCount(--count)} >Increse</button> */}
      {/* <h1>{count1}</h1>
        <h1>{count2}</h1>
         <button onClick={()=>setCount1(++count1)} >Increse1</button> 
        <button onClick={()=>setCount2(++count2)} >Increse2</button>  */}
    </>
  )
}

export default App
