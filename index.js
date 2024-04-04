
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]// Define the function
function superbowlWin(record) {
  // Use the find() method to search for a win
  const winningRecord = record.find(game => game.result === "W");

  
  if (winningRecord) {
    return winningRecord.year;
  } else {
    // If no win is found, return undefined
    return undefined;
  }
}
 