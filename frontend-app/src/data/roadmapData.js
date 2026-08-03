// Helper to generate LeetCode URL
const lc = (name) =>
  `https://leetcode.com/problems/${name.toLowerCase().replace(/ /g, "-").replace(/[()]/g, "")}/`;

export const roadmapData = [
  // 1. Arrays & Hashing
  {
    id: "arrays_hashing",
    title: "Arrays & Hashing",
    questions: [
      { id: "1", title: "Two Sum", difficulty: "Easy", url: lc("Two Sum") },
      {
        id: "2",
        title: "Contains Duplicate",
        difficulty: "Easy",
        url: lc("Contains Duplicate"),
      },
      {
        id: "4",
        title: "Group Anagrams",
        difficulty: "Medium",
        url: lc("Group Anagrams"),
      },
      {
        id: "5",
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        url: lc("Top K Frequent Elements"),
      },
      {
        id: "6",
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        url: lc("Longest Consecutive Sequence"),
      },
      {
        id: "7",
        title: "Product of Array Except Self",
        difficulty: "Medium",
        url: lc("Product of Array Except Self"),
      },
    ],
  },
  // 2. Two Pointers
  {
    id: "two_pointers",
    title: "Two Pointers",
    questions: [
      {
        id: "14",
        title: "Valid Palindrome",
        difficulty: "Easy",
        url: lc("Valid Palindrome"),
      },
      { id: "15", title: "3Sum", difficulty: "Medium", url: lc("3Sum") },
      {
        id: "17",
        title: "Trapping Rain Water",
        difficulty: "Hard",
        url: lc("Trapping Rain Water"),
      },
      {
        id: "18",
        title: "Container With Most Water",
        difficulty: "Medium",
        url: lc("Container With Most Water"),
      },
    ],
  },
  // 3. Stacks & Monotonic
  {
    id: "stacks_monotonic",
    title: "Stacks & Monotonic",
    questions: [
      {
        id: "9",
        title: "Valid Parentheses",
        difficulty: "Easy",
        url: lc("Valid Parentheses"),
      },
      {
        id: "10",
        title: "Min Stack",
        difficulty: "Medium",
        url: lc("Min Stack"),
      },
      {
        id: "11",
        title: "Daily Temperatures",
        difficulty: "Medium",
        url: lc("Daily Temperatures"),
      },
    ],
  },
  // 4. Binary Search & Quickselect
  {
    id: "binary_search_quickselect",
    title: "Binary Search & Quickselect",
    questions: [
      {
        id: "26",
        title: "Binary Search",
        difficulty: "Easy",
        url: lc("Binary Search"),
      },
      {
        id: "27",
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        url: lc("Search in Rotated Sorted Array"),
      },
      {
        id: "29",
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        url: lc("Kth Largest Element in an Array"),
      },
    ],
  },
  // 5. Sliding Window
  {
    id: "sliding_window",
    title: "Sliding Window",
    questions: [
      {
        id: "20",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        url: lc("Longest Substring Without Repeating Characters"),
      },
      {
        id: "21",
        title: "Minimum Window Substring",
        difficulty: "Hard",
        url: lc("Minimum Window Substring"),
      },
      {
        id: "22",
        title: "Longest Repeating Character Replacement",
        difficulty: "Medium",
        url: lc("Longest Repeating Character Replacement"),
      },
      {
        id: "24",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        url: lc("Best Time to Buy and Sell Stock"),
      },
    ],
  },
  // 6. Linked List
  {
    id: "linked_list",
    title: "Linked List",
    questions: [
      {
        id: "31",
        title: "Reverse Linked List",
        difficulty: "Easy",
        url: lc("Reverse Linked List"),
      },
      {
        id: "33",
        title: "Linked List Cycle",
        difficulty: "Easy",
        url: lc("Linked List Cycle"),
      },
      {
        id: "34",
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        url: lc("Remove Nth Node From End of List"),
      },
      {
        id: "36",
        title: "Reorder List",
        difficulty: "Medium",
        url: lc("Reorder List"),
      },
    ],
  },
  // 7. Trees
  {
    id: "trees",
    title: "Trees",
    questions: [
      {
        id: "37",
        title: "Invert Binary Tree",
        difficulty: "Easy",
        url: lc("Invert Binary Tree"),
      },
      {
        id: "39",
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        url: lc("Validate Binary Search Tree"),
      },
      {
        id: "40",
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        url: lc("Binary Tree Level Order Traversal"),
      },
      {
        id: "41",
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        url: lc("Construct Binary Tree from Preorder and Inorder Traversal"),
      },
      {
        id: "44",
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        url: lc("Lowest Common Ancestor of a Binary Tree"),
      },
    ],
  },
  // 8. Trie
  {
    id: "trie",
    title: "Trie",
    questions: [
      {
        id: "45",
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        url: lc("Implement Trie (Prefix Tree)"),
      },
    ],
  },
  // 9. Heap / Priority Queue
  {
    id: "heap_priority_queue",
    title: "Heap / Priority Queue",
    questions: [
      {
        id: "48",
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        url: lc("Merge k Sorted Lists"),
      },
      {
        id: "49",
        title: "Task Scheduler",
        difficulty: "Medium",
        url: lc("Task Scheduler"),
      },
    ],
  },
  // 10. Backtracking
  {
    id: "backtracking",
    title: "Backtracking",
    questions: [
      { id: "52", title: "Subsets", difficulty: "Medium", url: lc("Subsets") },
      {
        id: "53",
        title: "Permutations",
        difficulty: "Medium",
        url: lc("Permutations"),
      },
      {
        id: "54",
        title: "Combination Sum",
        difficulty: "Medium",
        url: lc("Combination Sum"),
      },
      {
        id: "55",
        title: "Word Search",
        difficulty: "Medium",
        url: lc("Word Search"),
      },
      {
        id: "56",
        title: "Generate Parentheses",
        difficulty: "Medium",
        url: lc("Generate Parentheses"),
      },
    ],
  },
  // 11. Graphs
  {
    id: "graphs",
    title: "Graphs",
    questions: [
      {
        id: "58",
        title: "Number of Islands",
        difficulty: "Medium",
        url: lc("Number of Islands"),
      },
      {
        id: "59",
        title: "Clone Graph",
        difficulty: "Medium",
        url: lc("Clone Graph"),
      },
      {
        id: "60",
        title: "Course Schedule",
        difficulty: "Medium",
        url: lc("Course Schedule"),
      },
      {
        id: "62",
        title: "Rotting Oranges",
        difficulty: "Medium",
        url: lc("Rotting Oranges"),
      },
      {
        id: "684",
        title: "Redundant Connection",
        difficulty: "Medium",
        url: lc("Redundant Connection"),
      },
      {
        id: "67",
        title: "Network Delay Time",
        difficulty: "Medium",
        url: lc("Network Delay Time"),
      },
    ],
  },
  // 12. Greedy
  {
    id: "greedy",
    title: "Greedy",
    questions: [
      {
        id: "83",
        title: "Maximum Subarray",
        difficulty: "Medium",
        url: lc("Maximum Subarray"),
      },
      {
        id: "84",
        title: "Jump Game",
        difficulty: "Medium",
        url: lc("Jump Game"),
      },
    ],
  },
  // 13. Intervals
  {
    id: "intervals",
    title: "Intervals",
    questions: [
      {
        id: "57",
        title: "Insert Interval",
        difficulty: "Medium",
        url: lc("Insert Interval"),
      },
      {
        id: "86",
        title: "Merge Intervals",
        difficulty: "Medium",
        url: lc("Merge Intervals"),
      },
    ],
  },
  // 14. Dynamic Programming — 1D
  {
    id: "dp_1d",
    title: "Dynamic Programming — 1D",
    questions: [
      {
        id: "69",
        title: "Climbing Stairs",
        difficulty: "Easy",
        url: lc("Climbing Stairs"),
      },
      {
        id: "70",
        title: "House Robber",
        difficulty: "Medium",
        url: lc("House Robber"),
      },
      {
        id: "71",
        title: "Coin Change",
        difficulty: "Medium",
        url: lc("Coin Change"),
      },
      {
        id: "72",
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        url: lc("Longest Increasing Subsequence"),
      },
      {
        id: "73",
        title: "Word Break",
        difficulty: "Medium",
        url: lc("Word Break"),
      },
    ],
  },
  // 15. Dynamic Programming — 2D
  {
    id: "dp_2d",
    title: "Dynamic Programming — 2D",
    questions: [
      {
        id: "78",
        title: "Unique Paths",
        difficulty: "Medium",
        url: lc("Unique Paths"),
      },
      {
        id: "79",
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        url: lc("Longest Common Subsequence"),
      },
    ],
  },
  // 16. Bit Manipulation
  {
    id: "bit_manipulation",
    title: "Bit Manipulation",
    questions: [
      {
        id: "89",
        title: "Single Number",
        difficulty: "Easy",
        url: lc("Single Number"),
      },
      {
        id: "90",
        title: "Number of 1 Bits",
        difficulty: "Easy",
        url: lc("Number of 1 Bits"),
      },
      {
        id: "92",
        title: "Counting Bits",
        difficulty: "Easy",
        url: lc("Counting Bits"),
      },
    ],
  },
  // 17. Math & Geometry
  {
    id: "math_geometry",
    title: "Math & Geometry",
    questions: [
      {
        id: "95",
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        url: lc("Set Matrix Zeroes"),
      },
    ],
  },
];

// Get all questions as a flat array
export const getAllQuestions = () => {
  return roadmapData.flatMap((category) =>
    category.questions.map((q) => ({
      ...q,
      category: category.title,
      categoryId: category.id,
    })),
  );
};

