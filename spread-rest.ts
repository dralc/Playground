function spread() {
    //-------- Objects -------------
    const ob1 = { a: 1, b: 2 };
    const ob2 = { c: 3, d: 4 };

    // Merged objects
    const obMerge = {...ob1, ...ob2}; /*?*/

    // 🚫 Can't spread objects into an array.
    // Only iterators can be spread and objects don't implement the iterable protocol !
    // const objsToAr = [ ...ob1, ...ob2 ]; /*?*/

    //--------- Arrays --------------
    const ar1 = ['a', 'b'];
    const ar2 = ['c', 'd'];

    // Clone one level deep
    const arClone = [...ar1]; /*?*/  

    // Concatenated arrays
    const arConcat = [...ar1, ...ar2]; /*?*/

}

spread();