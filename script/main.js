let anotherHeading = document.querySelector('h2');
anotherHeading.textContent = '把h2的内容替换为这段话';
document.querySelector('p').onclick = function() {
    alert('喊你莫挨老子！');
}

let email = document.getElementById('Mailing_address');

document.getElementById('Mailing_address').onclick = function() {
    alert('这是一个邮箱地址');
}

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/car1.jpg')
    {
        myImage.setAttribute('src', 'image/bronia.png');
    }
    if(mySrc === 'image/bronia.png') 
    {
      myImage.setAttribute('src', 'image/car0.jpg');
    } /*else 
        {
        myImage.setAttribute('src', 'image/选择器.png');
        }*/
    if(mySrc === 'image/car0.jpg')
    {
        myImage.setAttribute('src', 'image/car1.jpg');
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
        myHeading.textContent = '用这段话替换h1的内容，再加上用户名：' + myName;
          }
      }
      if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = '用这段话替换h1的内容，再加上用户名：' + storedName;
      }
      myButton.onclick = function() {
        setUserName();
     }