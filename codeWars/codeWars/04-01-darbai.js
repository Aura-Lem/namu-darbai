function whoIsPaying(name){
    if (name.length > 2) {
      return [name, name[0] + name[1]];
    } if (name.length <= 2){
      return [name];
    } if (name === 0) {
      return [''];
    }
  }
  
  console.log(whoIsPaying('Mexico'));
  console.log(whoIsPaying('Melania'));
  console.log(whoIsPaying('Me'));
  console.log(whoIsPaying(''));
  console.log(whoIsPaying('I'));

  console.clear();

  function sixToast(num) {
    if (num === 6) {
      return 0;
    } if (num > 6) {
      return num - 6;
    } if (num < 6) {
      return 6 - num;
    }
  }
  
  console.log(sixToast(6));
  console.log(sixToast(17));
  console.log(sixToast(3));