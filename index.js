
function findWin(record){
    return record.result === "W"
}
console.log(record.find(findWin))

function superbowlWin(record){
   return record.find(findWin) ? record.find(findWin).year : undefined}
//record.find(findWin) ? record.find(findWin).year : undefined