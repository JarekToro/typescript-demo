// Cool Enum Type Testing
enum ErrorKind {
  Validation,
  Authentication
}

interface ValidationError {
  kind: ErrorKind.Validation;
  message: number;
  validationMessages: string[];
}

interface AuthenticationError {
  kind: ErrorKind.Authentication;
  message: string;
  isExpired: boolean;
}

type MyError = ValidationError | AuthenticationError;

function handleError(x: MyError) {
  console.log(x.message); // This property is on both so is always available
  if (x.kind === ErrorKind.Validation) {
    x.validationMessages; // This works
  } else {
    x.isExpired; // It now knows that it is an Authentication Error
  }
}

// Type Guards
function isValidationError(e: MyError): e is ValidationError {
  return e.kind === ErrorKind.Validation;
}

function alsoHandleError(x: MyError) {
  if (isValidationError(x)) {
    x.validationMessages; // This works
  } else {
    x.isExpired; // It now knows that it is an Authentication Error
  }
}


// Switch Statements

function alsoAlsoHandleError(x: MyError) {
    switch (x.kind){ // Modern IDEs will auto populate this for you
      case ErrorKind.Validation:
        x.validationMessages
        break;
      case ErrorKind.Authentication:
        x.isExpired
        break;
    }
}
