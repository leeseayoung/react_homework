import React, { useState } from "react";
import Fragment from "./Fragment";

import "./Count.css";

const App = () => {
  const [count, setCount] = useState(0);

  //더하기
  const addCount = () => {
    setCount(count + 1);
  };
  //빼기
  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <Fragment />
      {count}
      <br />
      <button className="btn1" onClick={addCount}>
        +
      </button>
      <button className="btn3" onClick={resetCount}>
        reset
      </button>
      <button className="btn2" onClick={minusCount}>
        -
      </button>
    </div>
  );
};

export default App;

// 1. 숫자(초기값: 0)와 +, -, reset 버튼을 만든다. 완료!
// 2. + 버튼 클릭 시 숫자를 1 증가시킨다. 완료!
// 3. - 버튼 클릭 시 숫자를 1 감소시킨다. 완료!
// 4.  reset 버튼 클릭 시 숫자를 다시 0으로 변경한다. 완료!
// 5. className과 css 파일을 생성하고, 원하는 css 를 추가한다. (화려 X)
// 6. 태그 최상단에 Fragment를 추가해본다.
