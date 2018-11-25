export function
FindStringInString(
  stringLook: string,
  stringToFind: string): boolean {
    if (stringLook.toLowerCase()
          .indexOf(stringToFind.toLowerCase()) !== -1) {
      return true;
    }
    return false;
}
