// lexicographic sort O(MNlogN)
//   uses standard javascript sort O(NlogN)
//   and a custom comparator O(M)
//
//   where N is the size of the array of strings
//   and M is the length of the biggest string
function lexicographic_sort(tosort, order) {
  var orderMap = {};
  for (var i in order) orderMap[order[i]] = i;
  function comparator(a, b) {
    var max = Math.max(a.length, b.length);
    var i = 0;
    var aVal, bVal;
    while (i < max) {
      if (a[i] !== b[i]) {
        aVal = orderMap[a[i]];
        bVal = orderMap[b[i]];
        if (aVal === undefined) return -1;
        if (bVal === undefined) return 1;
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
      }
      i++;
    }
    return 0;
  }
  return tosort.sort(comparator);
}

console.log(lexicographic_sort(["acb", "abc", "bca"], "abc"));
console.log(lexicographic_sort(["acb", "abc", "bca"], "cba"));
console.log(lexicographic_sort(["aaa","aa",""], "a"));
