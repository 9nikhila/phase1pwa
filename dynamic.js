function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("appilication/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
}

loadJson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
profile(data.profile);
career(data.career);
education(data.education);
skills(data.skills);
})

var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);

var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);
var h3=document.createElement("h3");
h3.textContent=p.designation;
left.append(h3);
var h4=document.createElement("h4");
h4.textContent=p.mobile;
left.append(h4);
var h5=document.createElement("h5");
h5.textContent=p.email;
left.append(h5);

}
var right=document.querySelector(".right");
function career(ca){
  var h1=document.createElement("h1");
  h1.textContent="career Objectives";
  right.append(h1);


  var hr=document.createElement("hr");
  right.append(hr);


  var p=document.createElement("p");
  p.textContent=ca.info;
  right.append(p);
}
var right=document.querySelector(".right");
function education(edu){
  var h1=document.createElement("h1");
  h1.textContent="Education Details";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  right.append(table);
  var table=document.createElement("table");
//  table.border="2";
  right.append(table);
  var tr1="<tr><th>sno</th><th>qualification</th><th>Institute</th<th>percen</th><th>yop</th></tr>";
  var tr2="";
for(i=0;i<edu.length;i++)
{
  tr2=tr2+"<tr><td>"+edu[i].sno+"</td><td>"+edu[i].qualification+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].yop+"</td><tr>";
}


  table.innerHTML=tr1+tr2;
  right.append(table);

}
var right=document.querySelector(".right");
function skills(s){
  var rr=document.createElement("h2");
  rr.textContent="skill set";
  right.append(rr);
  var hr=document.createElement("hr");
  right.append(hr);
  var u1=document.createElement("u1");
  for(var i in s){
var li=document.createElement("li");
li.innerHTML=s[i].name+":"+s[i].info;
u1.append(li);
  }
  right.append(u1);
}
