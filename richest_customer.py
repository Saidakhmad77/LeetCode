from typing import List

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        return max([sum(account) for account in accounts])

accounts = [
    [2, 5, 7],
    [3, 7, 9],
    [6, 8, 10]
]

solution = Solution()

result = solution.maximumWealth(accounts)
print(f"Result: {result}")