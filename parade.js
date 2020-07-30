
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
 const final = [0,0];
 for (const direction of moves) {
   if (direction === "north") {
     final[1]++;
   } else if (direction === "south") {
     final[1]--; 
   } else if (direction === 'east') {
     final[0]++;
   } else if (direction === 'west') {
     final[0]--; 
   }
 }
 return final;
}

console.log(finalPosition(moves));