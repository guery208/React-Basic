import { useState } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균 값을 계산 중입니다.");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

function Memo() {
  // useMemo
  // useMemo를 사용하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있습니다.
  // 먼저, 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여 주는 함수 컴포넌트를 작성해 봅시다.

  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const onInsert = (event: React.MouseEvent<HTMLButtonElement>) => {
    // concat: Array 인스턴스의 concat() 메서드는 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환합니다.
    // parseInt: parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
    console.log(event);

    const nextList = list.concat(parseInt(number));
    setList(nextList); // number[]
    setNumber(""); // number 상태 값 초기화
  };

  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value: number, index: number) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>

      <div>
        <b>평균 값: {getAverage(list)}</b>
      </div>
    </div>
  );
}

export default Memo;
