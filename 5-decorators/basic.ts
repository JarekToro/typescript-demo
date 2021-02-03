
class TestClass {
  @LogAccess()
  public getAllTheData(input: number) {
    // do some expensive operation to get data
    return "data" + input;
  }
}


export function LogAccess() {
  return (
    target: Object,
    propertyKey: string,
    propertyDescriptor: TypedPropertyDescriptor<any>
  ) => {

    if (propertyDescriptor && propertyDescriptor.value) {

    const oldMethod = propertyDescriptor.value;

      /* use function instead of an arrow function to keep context of invocation */
      propertyDescriptor.value = function(..._parameters: Array<any>) {
       console.log("Function Called");
       console.log("Parameters Used: ", _parameters);
       return oldMethod.call(this, ..._parameters);
      };
    }

    return propertyDescriptor;
  };
}
const testClass = new TestClass();

testClass.getAllTheData(0);
testClass.getAllTheData(1);
