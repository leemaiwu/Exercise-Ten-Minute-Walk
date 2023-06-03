const isValidWalk = walk => {
    let n = 0
    let w = 0
    let s = 0
    let e = 0
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') {
            n++
        } else if (walk[i] === 'w') {
            w++
        } else if (walk[i] === 's') {
            s++
        } else if (walk[i] === 'e') {
            e++
        } else {
            return false
        }
    }
    let count = [n, s, w, e]
    console.log(count)
    if (walk.length === 10 && ((count[0] === count[1] && count[1] > 0) || (count[2] === count[3] && count[3] > 0 ))) {
        return true
    } else {
        return false
    }
}

console.log(isValidWalk(['w'])) // false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // false
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n'])) // false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // false
