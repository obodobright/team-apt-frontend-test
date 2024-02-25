import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export const useIncrement = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 131, { duration: 10 });

    return animation.stop;
  }, [rounded]);

  return { rounded };
};
