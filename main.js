window.onload = function(){
  var list = ["うんち","ウンチ","糞","くそ","💩","クソ"];
  var colors = ["赤","青","白","紫","臙脂色","桃"];
  var btn = document.getElementById("btn");
  var output = document.getElementById("output");
  var color = document.getElementById("color");
  var message,random_unch,randdom_color;

  btn.onclick = function(){
    randdom_color = colors[Math.floor(Math.random() * colors.length)];
    random_unch = list[Math.floor(Math.random() * list.length)];

    message = "<h2>" + random_unch + "</h2>";
    output.innerHTML = message;
    color.innerHTML = randdom_color;
  }
}
