import {MutableRefObject, useEffect, useRef} from "react";

interface IFWindowMessage<payload = any> {
  action: string;
  payload: payload;
}

type NuiHandlerSignature<payload> = (data: payload) => void;

export const useNui = <payload = any>(action: string,handler: (data: payload) => void) => {

  const MutablePayload: MutableRefObject<NuiHandlerSignature<payload>> = useRef(() => {});
  
  useEffect(() => {
    MutablePayload.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: MessageEvent<IFWindowMessage<payload>>) => {
      const { action: nuiaction, payload } = event.data;
      
      if (nuiaction === action && MutablePayload.current) {
          MutablePayload.current(payload);
        }
    };

    window.addEventListener("message", eventListener);

    return () => window.removeEventListener("message", eventListener);
  }, [action]);
};
