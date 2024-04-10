function longestSubstring(s, k) {
    for (let c of new Set(s)) {
        if (s.split(c).length - 1 < k) {
            return Math.max(...s.split(c).map((t) => longestSubstring(t, k)))
        }
    }
    return s.length;
}


console.log(longestSubstring('aacabb', 3))


