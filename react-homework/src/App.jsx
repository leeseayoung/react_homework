// import React, { useState } from "react";
// import Fragment from "./Fragment";

// import "./Count.css";

// const App = () => {
//   const [count, setCount] = useState(0);

//   //더하기
//   const addCount = () => {
//     setCount(count + 1);
//   };
//   //빼기
//   const minusCount = () => {
//     setCount(count - 1);
//   };

//   const resetCount = () => {
//     setCount(0);
//   };

//   return (
//     <div>
//       <Fragment />
//       {count}
//       <br />
//       <button className="btn1" onClick={addCount}></button>
//       <button className="btn3" onClick={resetCount}>
//         reset
//       </button>
//       <button className="btn2" onClick={minusCount}>
//         -
//       </button>
//     </div>
//   );
// };

// export default App;

// // 1. 숫자(초기값: 0)와 +, -, reset 버튼을 만든다. 완료!
// // 2. + 버튼 클릭 시 숫자를 1 증가시킨다. 완료!
// // 3. - 버튼 클릭 시 숫자를 1 감소시킨다. 완료!
// // 4.  reset 버튼 클릭 시 숫자를 다시 0으로 변경한다. 완료!
// // 5. className과 css 파일을 생성하고, 원하는 css 를 추가한다. (화려 X)
// // 6. 태그 최상단에 Fragment를 추가해본다.
// import { useState } from "react";

// function App() {
//   //이메일
//   const [email, setEmail] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   // 비번
//   const [password, setPassword] = useState("");

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const [passwordConfirm, setPasswordConfirm] = useState("");

//   const handlePasswordConfirmChange = (event) => {
//     setPasswordConfirm(event.target.value);
//   };

//   const onSubmit = (event) => {
//     //새로고침 막아줌
//     event.preventDefault();
//     alert(`이메일은${email}, 비밀번호는${password}`);
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <label htmlFor="email">이메일:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={handleEmailChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">비밀번호:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="passwordConfirm">비밀번호 확인:</label>
//         <input
//           type="password"
//           id="passwordConfirm"
//           value={passwordConfirm}
//           onChange={handlePasswordConfirmChange}
//         />
//       </div>
//       <button type="submit">회원가입</button>
//     </form>
//   );
// }

// export default App;

//------------------------------------------------------------------------------------------- 2주차 과제

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   // 이메일
//   const [email, setEmail] = useState("");
//   const emailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   // 비밀번호
//   const [password, setPassword] = useState("");
//   const passwordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   // 비밀번호 확인
//   const [passWordCheck, setPassWordCheck] = useState("");
//   const passWordChecked = (e) => {
//     setPassWordCheck(e.target.value);
//   };

//   //제출하기
//   const handleSubmit = (event) => {
//     //초기화 X
//     event.preventDefault();

//     if (!email) {
//       alert(`이메일 채우셈`);
//       return;
//     }
//     if (!password) {
//       alert(`비번 채우셈`);
//       return;
//     }

//     if (!passWordCheck) {
//       alert(`비번확인 채우셈`);
//       return;
//     }

//     if (password !== passWordCheck) {
//       alert(`비번이 틀림!`);
//       return;
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>이메일 : </label>
//         <input type="email" value={email} onChange={emailChange} />
//       </div>

//       <div>
//         <label>비밀번호 : </label>
//         <input type="password" value={password} onChange={passwordChange} />
//       </div>
//       <div>
//         <label>비밀번호 확인 : </label>
//         <input
//           type="password"
//           value={passWordCheck}
//           onChange={passWordChecked}
//         />
//       </div>
//       <button>회원가입</button>
//     </form>
//   );
// };

// export default App;
// 아직 미완료!
import { useState } from "react";

function App() {
  //인풋
  const [text, setText] = useState("");
  const textChange = (e) => {
    setText(e.target.value);
  };
  //유효성
  const textBtn = (e) => {
    e.preventDefault();
    if (!text) {
      alert("채우셈");
      return;
    }
  };

  //추가하기
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "잠자기",
      completed: true,
    },
    {
      id: 2,
      text: "일찍 일어나기",
      completed: false,
    },
  ]);

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  setTodos([...todos, newTodo]);
  setText("");
  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={textBtn}>
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={text}
          onChange={textChange}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button>{todo.completed ? "취소" : "완료"}</button>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
