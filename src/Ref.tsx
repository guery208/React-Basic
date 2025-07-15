import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균 값을 계산 중입니다.");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

// useRef 훅(Hook)은 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줍니다.
// Ref 컴포넌트에서 등록 버튼을 눌렀을 때, 포커스가 인풋 태그 쪽으로 넘어가도록 코드를 작성해 보겠습니다.

function Ref() {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>("");
  const inputElement = useRef<HTMLInputElement>(null);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    // useRef 동작
    inputElement.current?.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={onChange}
        ref={inputElement}
      />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value: number, index: number) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>

      <div>
        <b>평균 값: {avg}</b>
      </div>
    </div>
  );
}

export default Ref;
