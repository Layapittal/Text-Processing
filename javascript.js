function clear_data(){
  document.getElementById("txt_input").value = ""
  
}
function cal_length() {
  var str = document.getElementById("txt_input").value
  document.getElementById("txt_input").value = str.length;
}
function reverse() {
  let res = "";
  var str = document.getElementById("txt_input").value

  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];

  }
  document.getElementById("txt_input").value = res;
}

function palindrome() {
  let res = "";
  var str = document.getElementById("txt_input").value

  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];

  }
  if (str == res) {
    document.getElementById("txt_input").value = "String " + str + " is palindorme ";
  }
  else {
    document.getElementById("txt_input").value = "String " + str + " is not palindorme ";
  }
}

function word_count() {
  var str = document.getElementById("txt_input").value
  let flag = 0;
  let count = 0, i = 0;

  while (i < str.length) {
    if (str.charAt(i) == " " || str.charAt(i) == ' ') {
      flag = 0
    }
    else if (flag == 0) {
      flag = 1;

      count++;
    }
    i++;
  }
  document.getElementById("txt_input").value = "Wodr count = " + count
}

function char_count() {
  var str = document.getElementById("txt_input").value
  var arr=new Array()
  if (str.length == 0) {
    document.getElementById("txt_input").value = "Enter String to perform operation"
  }
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j] && i > j) {
        break;
      }
      if (str[i] == str[j]) {
        count++
      }

    }
  
    if (count > 0) {
   
        console.log(`${str[i]} occures ${count} times`);
      
      }
      
}
}




// Operation on number
function no_length(){
  var txt=document.getElementById("txt_input").value
  var str = document.getElementById("txt_input").value
  let count=0
while(str>0){
  str=Math.floor(str/10)
count++
}
document.getElementById("txt_input").value="No of Digits in " + txt+ " = "+count
}

function no_reverse(){
  var txt=document.getElementById("txt_input").value
  var str = document.getElementById("txt_input").value
  let rev=0
  let rem;
while(str>0){
   rem=str%10
  rev=rev*10+rem
str=Math.floor(str/10)
}
document.getElementById("txt_input").value="Reverse of  " + txt+ " = "+rev
}
function no_palindrome(){
  var txt=document.getElementById("txt_input").value
  var str = document.getElementById("txt_input").value
  let rev=0
  let rem;
while(str>0){
   rem=str%10
  rev=rev*10+rem
str=Math.floor(str/10)
}
if(txt==rev){
  document.getElementById("txt_input").value="Number " + txt+ " is  "+"Palindrome"
}
else{
  document.getElementById("txt_input").value="Number " + txt+ " is not  "+"Palindrome"
}

}



function prime(){
  var no = document.getElementById("txt_input").value
  let flag = 1, i, m;
  m = no / 2;
  for (i = 2; i <= m; i++) {
      if (no % i == 0) {
        document.getElementById("txt_input").value="Number  " + no+ " is not Prime number" 
          flag = 0;
          break;
      }
  }
  if (flag == 1) {
    document.getElementById("txt_input").value="Number  " + no+ " is Prime number " 
  }
}

function leap(){
  var year = document.getElementById("txt_input").value
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    document.getElementById("txt_input").value="Year  " + year+ " is Leap year" 
}
else {
  document.getElementById("txt_input").value="Year  " + year+ " is not Leap year" 
}
}
function factorial(){
  var no=parseInt(document.getElementById("txt_input").value) 
  let f=1;
  for(let i=1;i<=no;i++)
  {
    f=f*i;

  }

document.getElementById("txt_input").value="Factorial of  " + no+ " = "+f 
}


