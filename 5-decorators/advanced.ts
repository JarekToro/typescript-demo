
class TestClass {
  @Memoize()
  public getAllTheData(input: number) {
    // do some expensive operation to get data
    return "data" + input;
  }
}



// make consolelog version

//simulate localstorage
const memory = new Map();

export function Memoize() {
  return (
    target: Object,
    propertyKey: string,
    propertyDescriptor: TypedPropertyDescriptor<any>
  ) => {
    const cacheKey = target.constructor.name + "#" + propertyKey;

    if (propertyDescriptor && propertyDescriptor.value) {

    const oldMethod = propertyDescriptor.value;

      /* use function instead of an arrow function to keep context of invocation */
      propertyDescriptor.value = function(..._parameters: Array<any>) {
        const cache = memory.get(
          cacheKey + JSON.stringify(_parameters)
        );
        if (cache != null) {
          console.log("From Cache")
          return cache;
        } else {
          console.log("Not From Cache")
          // @ts-ignore
          const originalFunctionResult = oldMethod.call(this, ..._parameters);
          memory.set(
            cacheKey + JSON.stringify(_parameters),
            originalFunctionResult
          );
          return originalFunctionResult;
        }
      };
    }

    return propertyDescriptor;
  };
}
const testClass = new TestClass();

testClass.getAllTheData(0); // call original function
testClass.getAllTheData(0); // load from cache
testClass.getAllTheData(0); // load from cache
testClass.getAllTheData(1); // call original function
