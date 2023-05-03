import {MutableRefObject, useEffect, useRef} from "react";

interface NuiMessageData<T = unknown> {
  action: string;
  payload: T;
}

type NuiHandlerSignature<T> = (data: T) => void;

export const useNui = <T = any>(action: string,handler: (data: T) => void) => {
  const savedHandler: MutableRefObject<NuiHandlerSignature<T>> = useRef(() => {});

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: MessageEvent<NuiMessageData<T>>) => {
      const { action: eventAction, payload } = event.data;
      
      if (savedHandler.current) {
        if (eventAction === action) {
          savedHandler.current(payload);
        }
      }
    };

    window.addEventListener("message", eventListener);

    return () => window.removeEventListener("message", eventListener);
  }, [action]);
};
