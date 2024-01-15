// Helper function to determine if the collection is an object
function isObject(collection) {
  return collection && typeof collection === 'object' && !Array.isArray(collection);
}

// Helper function to convert an object to an array of its values
function objectValues(obj) {
  return Object.keys(obj).map(key => obj[key]);
}

// Array Functions

function myEach(collection, callback) {
  if (isObject(collection)) collection = objectValues(collection);

  for (let i = 0; i < collection.length; i++) {
    callback(collection[i]);
  }

  return collection;
}

function myMap(collection, callback) {
  if (isObject(collection)) collection = objectValues(collection);

  const result = [];
  for (let i = 0; i < collection.length; i++) {
    result.push(callback(collection[i], i, collection));
  }

  return result;
}

function myReduce(collection, callback, acc) {
  let startIdx = 0;

  if (acc === undefined) {
    const keys = Object.keys(collection);
    acc = collection[keys[0]];
    startIdx = 1;
  }

  if (Array.isArray(collection)) {
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else {
    for (const key in collection) {
      acc = callback(acc, collection[key], collection);
    }
  }
  return acc;
}

function myFind(collection, predicate) {
  if (isObject(collection)) collection = objectValues(collection);

  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }

  return undefined;
}

function myFilter(collection, predicate) {
  if (isObject(collection)) collection = objectValues(collection);

  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      result.push(collection[i]);
    }
  }

  return result;
}

function mySize(collection) {
  if (isObject(collection)) collection = objectValues(collection);

  return collection.length;
}

// Array Functions

function myFirst(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) return array[array.length - 1];
  return array.slice(-n);
}

// Bonus Functions

function mySortBy(array, callback) {
  return array.slice().sort((a, b) => callback(a) - callback(b));
}

function myFlatten(array, shallow, newArr = []) {
  if (!Array.isArray(array)) {
    newArr.push(array);
  } else {
    for (let i = 0; i < array.length; i++) {
      if (!shallow) {
        myFlatten(array[i], false, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
  }
  return newArr;
}

// Object Functions

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return objectValues(object);
}

module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  mySortBy,
  myFlatten,
  myKeys,
  myValues,
};
