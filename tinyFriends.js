function tinyfriends(friends){
    var largest = friends[0];
    for (i=0; i<friends.length; i++){
        var next = friends[i];
        if(next > largest){
            largest = next;
        }
    }
    return largest;
}
var bestfriends = tinyfriends(['shawon', 'lovely', 'shahinur', 'amir');
console.log(bestfriends);