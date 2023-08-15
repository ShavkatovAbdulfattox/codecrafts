/** @format */

const javaDefaultCode = `
class Solution {
     public int main(int target, int[] nums) {
         
     }
}
`;

const pythonDefaultCode = `
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
`;

const kotlinDefaultCode = `
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
`;

const files = {
  java: {
    name: "java",
    language: "java",
    value: javaDefaultCode,
  },
  python: {
    name: "python",
    language: "python",
    value: kotlinDefaultCode,
  },
  kotlin: {
    name: "kotlin",
    language: "kotlin",
    value: pythonDefaultCode,
  },
};

export default files;
