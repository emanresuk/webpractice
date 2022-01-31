let anotherHeading = document.querySelector('h2');
anotherHeading.textContent = 'Hello world!';
document.querySelector('p').onclick = function() {
    alert('莫挨老子！');
}
document.querySelector('p1').onclick = function() {
    alert('喊你莫挨老子！');
}
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/选择器.png') 
    {
      myImage.setAttribute('src', 'image/bronia.png');
    } /*else 
        {
        myImage.setAttribute('src', 'image/选择器.png');
        }*/
    if(mySrc === 'image/bronia.png')
    {
        myImage.setAttribute('src', 'image/选择器.png');
    }
    }
    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');
    function setUserName() {
        let myName = prompt('请输入你的名字。');
        if(!myName || myName === null) {
            setUserName();
          } else
          {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
          }
      }
      if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
      }
      myButton.onclick = function() {
        setUserName();
     }