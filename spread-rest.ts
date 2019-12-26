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

    // Clone ONE level deep ---------
    const arClone = [...ar1]; /*?*/  
    
    // Clone array of objects -------
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 3, b: 4 };
    const ar3 = [ obj1, obj2 ];
    const ar3clone = cloneArrayOfObj(ar3);
    
    // Modify original objects
    obj1.a = 0;
    obj2.b = 5;

    //-- Original array has the modified objects
    ar3
    //-- The array clone wasn't modified
    ar3clone

    // Concatenated arrays --------
    const arConcat = [...ar1, ...ar2]; /*?*/
}

function cloneArrayOfObj(ar:Object[]) {
    return ar.reduce( (p:Object[], c) => p.push({ ...c }) && p, [] );
}

spread();