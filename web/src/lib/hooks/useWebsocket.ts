import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const socket = io(import.meta.env.VITE_WS_BASE_URL, {
  autoConnect: false,
});

type EventHandlers = Record<string, () => any>;

export function useWebsocket(handlers: EventHandlers) {
  socket.connect();
  console.log('Attempting connection');

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const onAny = (event: string, ...args: any[]) => {
      console.log(event);

      console.log(arguments);

      console.log('hi');

      if (handlers[event] != undefined) {
        handlers[event]();
      }
    };

    socket.onAny(onAny);

    return () => {
      socket.offAny(onAny);
    };
  });

  return {
    isConnected,
  };
}
