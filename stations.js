const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(stations) {
  let viableStations = [];
  for(const element of stations) {
    console.log(element);
    if(element[1] > 19) {
      if(element[2] === 'school' || element[2] === 'community centre')
      viableStations.push(element[0]);
    }
  }
  return viableStations;
}

console.log(chooseStations(stations));