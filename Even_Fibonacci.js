function solution(){
  var fibno = [ 1, 2 ], sum = 0;

  function cal(arr ){
    return arr[ arr.length - 1 ] + arr[ arr.length - 2 ];
  }

  while ( fibno[ fibno.length - 1 ] < 4e+6 ){
    fibno.push( cal(fibno) );
  }

  fibno.forEach( function(n){
                    if ( (n & 1) === 0 ){
                      sum += n;
                    }
                  });
  return sum;
}

console.time("Time_needed")
console.log(solution(4e6))
console.timeEnd("Time_needed")
