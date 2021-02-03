// Mapped Types

//Basic

interface UserProfile {
  email: string;
  name: string;
  id: number;
}

const roProfile: Readonly<UserProfile> = { email: "", name: "", id: 0 };
// roProfile.email = ""; //Errors out because it is readonly



type _Readonly<T> = {
    readonly [P in keyof T]: T[P];
};



// Looks like this

// More advanced

type LazyProps<T> = {
  [K in keyof T]: () => T[K];
};

const lazyUserProfile: LazyProps<UserProfile> = {
  email: () => "",
  name: () => "",
  id: () => 0,
};

lazyUserProfile.email();







// New in 4.1

type APIArgs = "useAuth" | "ignoreCache" | "shouldThrow";

type APIOptions = {
  [K in APIArgs]?: boolean;
};

const options: APIOptions = {
  useAuth: false,
  ignoreCache: true
};


// Same thing with enums
enum APIArgsEnum {
  useAuth = "useAuth",
  ignoreCache = "ignoreCache",
  shouldThrow = "shouldThrow",
}

type APIEnumOptions = {
  [K in APIArgsEnum]?: boolean;
};

const optionsEnum: APIEnumOptions = {
  useAuth: false,
};
