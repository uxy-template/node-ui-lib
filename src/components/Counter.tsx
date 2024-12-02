import { createSignal } from "solid-js";

export interface CounterProps {
  initialValue?: number;
}
export const Counter = (props: CounterProps) => {
  const [count, setCount] = createSignal<number>(props.initialValue || 0);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount((prevent) => prevent + 1)}>
        Count: {count()}
      </button>
    </div>
  );
};
