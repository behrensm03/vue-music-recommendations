
export function once<T> (f: () => T | undefined): () => T | undefined {
  let result : T | undefined = undefined;

  return () => {
    if (result === undefined) {
      result = f();
    }

    return result;
  }
}
