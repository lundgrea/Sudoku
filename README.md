# Sudoku Code Challenge

[Prompt](https://files.slack.com/files-pri/T029P2S9M-FPXK5BG23/screen_shot_2019-10-28_at_8.29.15_am.png)

## Planning

1. I began my process by reading the provided [Sudoku rules](https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/) as I am not very familiar with the game.

2. Next I want a strong understanding of what I have and what I need at the end.
 - What I have: an input array matrix with 9 rows and 9 columns
 - What I need: boolean return value checking if the input array matrix is a successful Sudoku gameboard.

3. Clearly define, in plain english, a winning game board:
 - Each row should not contain any duplicates
 - Each column should not contain any duplicates

 4.Understand the structure of the data/draw it out/find patterns
 - I wonder if I am able to shrink the problem? Perhaps start with a smaller input array matrix with 3 columns and 3 rows... Seems like 9x9 is pretty standard based on google search.

 COLUMN COMPARISION: 
 - The first three column includes arrays indeces: 0, 3, 6, 9, 12, 15, 18, 21, 24 - We would want to compare indeces 0, 1, and 2 of these columns
 - The second three column includes array indeces: 1, 4, 7, 10, 13, 16, 19, 22, 25 - We would want to compare indeces 0, 1, and 2 of these columns
 - The third three columns include array indeces: 2, 5, 8, 11, 14, 17.20, 23, 26 - We would want to compare indeces 0, 1, and 2 of these columns.

 ROW COMPARISION:
  - We would want to compare array indeces:
     - 0,1,2
     - 3,4,5
     - 6,7,8
     - 9,10,11
     - 12,13,14
     - 15,16,17
     - etc... thru 24,25,26

     




