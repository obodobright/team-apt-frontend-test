import { useSpring } from "react-spring";

export const useCountingNumber = (n, isReset = false) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 5000,
    reset: isReset,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return { number };
};
