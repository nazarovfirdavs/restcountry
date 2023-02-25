// 1 masala //
function spelling(str) {
    var str1 = [];
    let n = 0;
    for (c in str)
      str1.push(str.slice(0, ++n));
    return str1;
  }
  
  console.log(spelling('bee'), spelling("happy"), spelling("eagerl"));

  // 2 masala //
function testJackpot(e1, e2, e3, e4) {
    let elArray = [e1, e2, e3, e4];
    for (let i = 1; i < elArray.length; i++) {
        if (elArray[0] !== elArray[i]) return false;
    }
    return true;
}
let result = testJackpot("&&", "&", "&&&", "&&&&");
console.log(result);

// 3 masala //
const obj = {"a":1,"b":2,"shrimp":15,"tots":12};
console.log(Object.entries(obj));

// 5 masala //
function volumeOfBox(sizes) {
  return console.log(sizes.width * sizes.length * sizes.height);
}

volumeOfBox({ width: 2, length: 5, height: 1 });

volumeOfBox({ width: 4, length: 2, height: 2 });

volumeOfBox({ width: 2, length: 3, height: 5 });