// import { useState } from "react";

// function App() {
//   const [names, setNames] = useState(["김철수", "이시현"]);
//   const [input, setInput] = useState("");
//   const handleInputChange =(e)=>setInput(e.target.value);
//   const handleInput = ()=> setNames([...names,input])
//   return (
//     <div>
//       <input 
//         type="text" 
//         value={input} 
//         onChange={(e)=>handleInputChange(e)} 
//       />

//       <button onClick={() => {
//         handleInput()
//       }}>
//         입력
//       </button>

//       {names.map((name, index) => {
//         return <p key={index}>{name}</p>;
//       })}
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const basicWork = ()=>{
//     console.log("기본작업");
//     return ['홍길동','김철수'];
//   }
//   const [names, setNames] = useState(()=>{
//     return basicWork();
//   });
//   const [input, setInput] = useState("");
//   const handleInputChange =(e)=>setInput(e.target.value);
//   const handleInput = ()=> setNames((preState)=>{
//     console.log(preState);
//     return [...preState, input]
//     setInput("");
//   })
//   return (
//     <div>
//       <input 
//         type="text" 
//         value={input} 
//         onChange={(e)=>handleInputChange(e)} 
//       />

//       <button onClick={() => {
//         handleInput()
//       }}>
//         입력
//       </button>

//       {names.map((name, index) => {
//         return <p key={index}>{name}</p>;
//       })}
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {
//   const [names, setNames] = useState(["김철수", "이시현"]);
//   const [input, setInput] = useState("");
//   const handleInputChange =(e)=>setInput(e.target.value);
//   const handleInput = ()=> setNames([...names,input])
//   return (
//     <div>
//       <input 
//         type="text" 
//         value={input} 
//         onChange={(e)=>handleInputChange(e)} 
//       />

//       <button onClick={() => {
//         handleInput()
//       }}>
//         입력
//       </button>

//       {names.map((name, index) => {
//         return <p key={index}>{name}</p>;
//       })}
//     </div>
//   );
// }

// export default App;


// import react,{ useState, useEffect } from "react";

// function App() {
//   const [count,setCount] = useState(1);
//   const [name,setName] = useState("");
//   const handleCountUpdate = ()=>{
//     setCount(count + 1);
//   };
//     //렌더링 될때마다 실행됨
//   // useEffect(()=>{
//   //   console.log("엔더링 됨");
//   // })

//   //카운트 될때마다 실행됨
//   // useEffect(()=>{
//   //   console.log("count 변경 됨");
//   // },[count])

//   //name 될때마다 실행
//   useEffect(()=>{
//     console.log("name 변경 됨");
//   },[name])
//   //마운팅 될떄마다 실행됨  
//   useEffect(()=>{
//     console.log("마운팅 됨");
//   },[])

//   const handleInputChange=(e)=>{
//     setName(e.target.value)
//   }
//   return (
//     <div>
//       <p>count : {count} 번</p>
//       <button onClick={handleCountUpdate}>업데이트</button>
//       <input type="text" value={name} onChange={handleInputChange} /><br></br>
//       name : {name}
//     </div>
//   );
// }

// export default App;


import React,{ useState, useEffect } from "react";
import Timer from "./component/timer";
function App() {
  const [showTimer,setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      
      <button onClick={()=>setShowTimer(!showTimer)} >Toggle Timer</button>
    </div>
  );
}

export default App;
