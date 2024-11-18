import { RefObject } from 'react';

export const getPortalPosition = <T extends HTMLElement>({
  targetRef,
}: {
  targetRef: RefObject<T>;
}) => {
  if (!targetRef.current) return;

  const { left, bottom, width } = targetRef.current.getBoundingClientRect();

  return {
    left,
    top: bottom,
    minWidth: width,
  };
};
