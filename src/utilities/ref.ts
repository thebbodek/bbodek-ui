import React, { Ref } from 'react';

export const mergeRefs = <T>(
  ...refs: Array<Ref<T> | null>
): React.RefCallback<T> => {
  return (element: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        (ref as React.MutableRefObject<T | null>).current = element;
      }
    });
  };
};
