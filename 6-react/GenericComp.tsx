import * as React from "react";
import {ReactNode} from "react";

interface ColumnDef<T, K extends keyof T> {
  render: (value: T[K]) => ReactNode;
}

interface GenericProps<T> {
  columns: ColumnDef<T, any>[];
}
function GenericComp<T>(props: GenericProps<T>) {
  return null;
}

interface Person {
  firstName: string;
  userId: number;
}

interface NonPerson {
  beak: string;
  tail: string
}

function test() {

  const idColumn: ColumnDef<Person, "userId"> = {
    render: (userId) => (
      <div>
        <b>{userId}</b>
      </div>
    ),
  };
    const nameColumn: ColumnDef<Person, "firstName"> = {
    render: (firstName) => <div>{firstName}</div>,
  };

   const beakColumn: ColumnDef<NonPerson, "beak"> = {
    render: (beak) => (
      <div>
        <b>{beak}</b>
      </div>
    ),
  };

  return <GenericComp<Person> columns={[nameColumn, idColumn]} />;
}
