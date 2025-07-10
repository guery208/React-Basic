import { useState } from "react";

function App() {
  //useState => Hooks (코드를 재활용 할 수 있는 것을 담당하는 것을 알 수 있음)
  // useState는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  // => 이 함수가 호출되면 배열을 반환한다. => 첫 번째 요소는 상태 값 두 번째 요소는 상태를 설정하는 함수
  const [value, setValue] = useState(1);
  const [name, setName] = useState<string>("스마이퍼팩토리");
  const [nickname, setNickname] = useState<string>("");

  const onChaangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChaangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  // useState 함수의 파라미터에는 상태의 기본값을 넣어 줍니다.

  return (
    <div>
      <p>
        현재 카운터 값은: <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1증가</button>
      <button onClick={() => setValue(value - 1)}>1감소</button>

      <div>
        <input type="type" value={name} onChange={onChaangeName}></input>
        <input
          type="type"
          value={nickname}
          onChange={onChaangeNickName}
        ></input>
      </div>

      <div>
        <b>이름: {name}</b>
        <b>닉네임: {nickname}</b>
      </div>
    </div>
  );
}

export default App;
