/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function closest(nums, target) {
  let closest = 0;
  let variance = null;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] === nums[i + 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let temp = nums[i] + nums[l] + nums[r];

      if (Math.abs(temp - target) < variance || variance === null) {
        variance = Math.abs(temp - target);
        closest = temp;
      }
      if (temp > target) {
        r--;
      } else {
        l++;
      }
    }
  }

  return closest;
}

nums = [-4, -1, 1, 2];
target = 1; // return 2

console.log(closest(nums, target));
