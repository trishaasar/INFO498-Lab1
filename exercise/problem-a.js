// Given an array of ints a and an int k, return if there exists a pair (x, y) in a such that x + y = k.
// This can be solved in O(nlog(n)) time trivially, or even in O(n) if you use another data structure
function hasPairSumToK(a, k) {
    var x;
    var y;
    var sortedArray = a.sort(function (n1, n2) { return n1 - n2; });
    x = 0;
    y = sortedArray.length - 1;
    while (x < y) {
        if (sortedArray[x] + sortedArray[y] == k)
            return true;
        else if (sortedArray[x] + sortedArray[y] < k)
            x++;
        else //array[x] + array[y] > sum
            y--;
    }
    return false;
}
// TESTS don't touch them
function test(actual, expected) {
    if (hasPairSumToK(actual[0], actual[1]) != expected) {
        console.log('ERROR: hasPairSumToK(', actual[0], ',', actual[1], ') should be', expected);
    }
    else {
        console.log('All tests passed!');
    }
}
test([[], 2], false);
test([[-1, -2, -3], -5], true);
test([[1, 2, 3, 4, 5, 7], 8], true);
test([[1, 2, 3, 4, 96, -5], -4], true);
test([[-1, -2, -3], 2], false);
test([[1, 2, 3], 9], false);
test([[7, 8, 9], 6], false);
