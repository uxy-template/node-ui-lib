import {
  createContext,
  createSignal,
  JSXElement,
  onCleanup,
  onMount,
  useContext,
} from "solid-js";

export interface KeyboardContextProps {
  registerShortcut: (
    keyCombination: string,
    callback: (event: KeyboardEvent) => any,
  ) => any;
  unregisterShortcut: (keyCombination: string) => any;
}
export const KeyboardContext = createContext<KeyboardContextProps>({
  registerShortcut: () => {},
  unregisterShortcut: () => {},
});
export const useKeyboard = () => useContext(KeyboardContext);
export interface KeyboardProviderProps {
  children: JSXElement;
}
export const KeyboardProvider = (props: KeyboardProviderProps) => {
  const [shortcut, setShortcut] = createSignal<
    Record<string, (event: KeyboardEvent) => any>
  >({});

  const registerShortcut = (
    keyCombination: string,
    callback: (event: KeyboardEvent) => any,
  ) => {
    setShortcut((prev) => {
      return {
        ...prev,
        [keyCombination]: callback,
      };
    });
  };
  const unregisterShortcut = (keyCombination: string) => {
    setShortcut((prev) => {
      const newShortcut = { ...prev };
      delete newShortcut[keyCombination];
      return newShortcut;
    });
  };

  const keyDownHandler = (event: KeyboardEvent) => {
    const keyCombination = `${event.key.toLowerCase()}${event.altKey ? "+alt" : ""}${event.ctrlKey ? "+ctrl" : ""}${event.shiftKey ? "+shift" : ""}`;

    console.log(keyCombination);
    if (shortcut()[keyCombination]) {
      shortcut()[keyCombination](event);
    }
  };

  onMount(() => {
    document.addEventListener("keydown", keyDownHandler);
  });
  onCleanup(() => document.removeEventListener("keydown", keyDownHandler));
  return (
    <KeyboardContext.Provider
      value={{
        registerShortcut,
        unregisterShortcut,
      }}
    >
      {props.children}
    </KeyboardContext.Provider>
  );
};
