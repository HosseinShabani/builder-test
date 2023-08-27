import { useRef } from "react";

const useUniqueId = () => {
  const uid = useRef(
    Date.now().toString(36) + Math.random().toString(36).substring(2)
  ).current;
  return uid;
};

export { useUniqueId };
