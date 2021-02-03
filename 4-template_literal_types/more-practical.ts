

type PropEventSource<T> = {
    on(eventName: `${string & keyof T}Changed`, callback: () => void): void;
};

declare function listen<T>(obj: T): PropEventSource<T>;


let listener = listen({
  firstName: "Homer",
  age: 42,
  location: "Springfield",
});

listener.on("firstNameChanged", () => {
  console.log(`firstName was changed!`);
});

