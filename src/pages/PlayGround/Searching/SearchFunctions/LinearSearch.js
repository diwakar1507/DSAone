export async function* LinearSearch(
  array,
  element,
  check,
  markVisited,
  markFound
) {
  var i = 0;
  for (i; i < array.length; i++) {
    yield await check(i);

    if (array[i] === element) {
      yield await markFound(i);
      return;
    } else {
      yield await markVisited(i);
    }
  }
  markFound(-1);
  yield;
}
