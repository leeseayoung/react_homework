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
