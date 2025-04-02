function problem(x){
    if (typeof x !== 'number') {
      return 'Error';
    } else {
      let result = (x * 50) + 6;
      return result;
    }
  }
  
  console.log(problem('hello'));
  console.log(problem(1));
  console.log(problem(5));
  console.log(problem(0));
  console.log(problem(1.2));
  console.log(problem(3));
  console.log(problem('RyanIsCool'));
  console.log(problem(-3));
  console.log(problem(0.03));

console.log('-------------------');

  function sayHello(name) {
    return 'Hello,' + ' ' + name;
  }
  
  console.log(sayHello('Mr. Spock'));
  console.log(sayHello('Captain Kirk'));
  console.log(sayHello('Liutenant Uhura'));
  console.log(sayHello('Dr. McCoy'));
  
  console.log('-------------------');

  function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
    }
  }
  
  console.log(greet("Jim"));
  console.log(greet("Jane"));
  console.log(greet("Simon"));
  console.log(greet("Johnny"));


  console.log('-------------------');


  function solution(a, b){
    if (a.length > b.length) {
      return b + a + b;
    } else {
      return a + b + a;
    }
  }
  
  console.log(solution('45', '1'));
  console.log(solution('13', '200'));
  console.log(solution('Soon', 'Me'));
  console.log(solution('U', 'False'));

console.log('-------------------');

  function paperwork(n, m) {
    if (n < 0 || m < 0){
      return 0
    } else {
      return n * m;
    }
  }
  
  console.log(paperwork(5, 5));
  console.log(paperwork(5, -5));
  console.log(paperwork(-5, -5));
  console.log(paperwork(-5, 5));
  console.log(paperwork(5, 0));

console.log('-------------------');

  function cookie(x){
    if (typeof x === 'string') {
      return "Who ate the last cookie? It was Zach!";
    } if (typeof x === 'number') {
      return "Who ate the last cookie? It was Monica!";
    } else {
      return "Who ate the last cookie? It was the dog!";
    }
  }
  
  console.log(cookie('Ryan'));
  console.log(cookie(26));
  console.log(cookie(2.3));
  console.log(cookie(true));

console.log('-------------------');

  function areYouPlayingBanjo(name) {
    if (name[0] === 'R' || name[0] === 'r'){
      return `${name} plays banjo`;
    } else {
    return `${name} does not play banjo`;
      }
  }
  
  console.log(areYouPlayingBanjo('Adam'));
  console.log(areYouPlayingBanjo('Paul'));
  console.log(areYouPlayingBanjo('Ringo'));
  console.log(areYouPlayingBanjo('bravo'));
  console.log(areYouPlayingBanjo('rolf'));

  console.log('-------------------');

  function disemvowel(str) {
    let sentence = str.replaceAll('a', '').replaceAll('A', '').replaceAll('e', '').replaceAll('E', '').replaceAll('o', '').replaceAll('O', '').replaceAll('u', '').replaceAll('U', '').replaceAll('i', '').replaceAll('I', '');
    return sentence;
  }
  
  console.log(disemvowel("This website is for losers LOL!"));
  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
  console.log(disemvowel("What are you, a communist?"));
  