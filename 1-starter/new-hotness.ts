function test(values: string[] | undefined) {
  values ??= [];
  values.push("hello");
}

function _old(values: string[] | undefined) {
  if (values === undefined) {
    values = [];
  }
  values.push("hello");
}
