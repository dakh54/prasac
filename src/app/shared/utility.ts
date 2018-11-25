export function isObject(value: any): boolean {
  if (value instanceof Object) {
    return true;
  }
  return false;
}

export function filteredObjects(
  objectArray: any[],
  propertyName: string,
  filteredTerm: string
): any[] {
  return objectArray.filter(
    s => s[propertyName].toLowerCase() !== filteredTerm.toLowerCase()
  );
}

export function filteredObjectsByOtherObject(
  objectArray: any[],
  propertyName: string,
  filteredObject: any[]
): any[] {
  // let returnREsult: any [];

  return objectArray.map(obj => {
    if (obj[propertyName]) {
      return objectArray.filter(
        s =>
          s[propertyName].toLowerCase() !==
          filteredObject[propertyName].toLowerCase()
      );
    }
  });
}

export function existDuplication(checkArray: string[]): boolean {
  const arrayLength = checkArray.length;
  if (arrayLength <= 1) {
    return false;
  }

  const resultArray: string[] = [];
  checkArray.forEach((f: string) => {
    if (resultArray.indexOf(f) === -1) {
      resultArray.push(f);
    }
  });

  if (arrayLength > resultArray.length) {
    return true;
  }
  return false;
}

// check if a number over max number allowed
export function isOverMax(
  numberToCheck: number,
  maxNumberTocheckAgainst: number
) {
  if (numberToCheck > maxNumberTocheckAgainst) {
    return true;
  }

  return false;
}

export function getUniqueString(stringArray: string []) {
  const result: string [] = [];
  stringArray.forEach(element => {
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  });
  return result;
}
