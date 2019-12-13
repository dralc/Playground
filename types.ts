function types () {

    //------- objects --------------------------
    const ob = { a: 1 };
    Object.prototype.toString.call(ob) /*?*/
    // bad
    typeof ob /*?*/
    
    //------- strings --------------------------
    const st = 'a';
    typeof st /*?*/
    new String(st) instanceof String /*?*/
    
    //------- arrays --------------------------
    const ar = ['a'];
    Array.isArray(ar) /*?*/
    Object.prototype.toString.call(ar) /*?*/
    // bad
    typeof ar /*?*/ 
    
    // MORE details : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Examples
}

types();