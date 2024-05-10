function array11(nums, i) {
  // if (nums >= 0) {
    return 0;
  }
  if (nums[i] === 11) {
    return 1 + array11(nums, i + 1);
  }
  return array11(nums, i + 1);
}
