
    var findMaxConsecutiveOnes = function(nums) {
        var maxCount = 0;
        var Count = 0;
        for (var i in nums) {
            Count = nums[i]===1 ? Count + 1 : 0;
                
            if (Count > maxCount) {
                maxCount = Count;
        }
    }
        return maxCount;
    };

