var students = [
    {
        name:"Bamigboye Christiana Temitope",
        age: 25,
        address:"Village Hostel",
        tribe:"Yoruba",
        gender:"female",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [54,63,80,96,96]
    },
    {
        name:"Duada Yohanna Awari",
        age: 23,
        address:"Angwa Rukuba",
        tribe:"Afizare",
        gender:"male",
        Height:1.69,
        department:"CSC",
        level:300,
        grade: [67,87,69,80,96]
    },
    {
        name:"Elizabeth John",
        age: 27,
        address:"Salama Hostel",
        tribe:"Ibibo",
        gender:"female",
        Height:"1.68",
        department:"CSC",
        level:400,
        grade: [56,67,80,99,87]
    },
    {
        name:"Ifeoma Ibedu",
        age: 24,
        address:"Angwa Rukuba",
        tribe:"Igbo",
        gender:"female",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [69,70,80,90,100]
    },
    {
        name:"Job Gift Elejo",
        age: 22,
        address:"Village Hostel",
        tribe:"Igala",
        gender:"female",
        Height:1.68,
        department:"CSC",
        level:300,
        grade: [78,56,60,80,89]
    },
    {
        name:"Joy Ohue Osedebamen",
        age: 21,
        address:"Odus",
        tribe:"Idoma",
        gender:"female",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [67,89,67,90,94]
    },
    {
        name:"Josephine Sunday",
        age: 22,
        address:"Odus",
        tribe:"Eggon",
        gender:"female",
        Height:1.60,
        department:"CSC",
        level:300,
        grade: [67,67,80,90,95]
    },
    {
        name:"kaslong Kevin Shitnan",
        age: 23,
        address:"Twad",
        tribe:"Yoruba",
        gender:"male",
        Height:1.69,
        department:"CSC",
        level:300,
        grade: [60,70,87,93,91]
    },
    {
        name:"Mabas Maryam",
        age: 24,
        address:"PTS, Jos",
        tribe:"Challa",
        gender:"female",
        Height:1.67,
        department:"CSC",
        level:400,
        grade: [56,67,85,96,98]
    },
    {
        name:"Mark Adams",
        age: 24,
        address:"Rukuba Road",
        tribe:"Idoma",
        gender:"male",
        Height:1.69,
        department:"CSC",
        level:300,
        grade: [69,70,83,94,97]
    },
    {
        name:"Musa Deborah Kibba",
        age: 23,
        address:"Odus",
        tribe:"Berom",
        gender:"female",
        Height:1.67,
        department:"CSC",
        level:300,
        grade: [50,60,87,89,92]
    },
    {
        name:"Nanbal Moses Kumdam",
        age: 23,
        address:"Federal locust",
        tribe:"Mupun",
        gender:"male",
        Height:1.68,
        department:"CSC",
        level:300,
        grade: [30,40,60,70,84]
    },
    {
        name: "Oyekale Tosin",
        age: 25,
        address: "Farin-gada",
        tribe: "Yoruba",
        gender: "female",
        Height: 1.66,
        department:"CSC",
        level: 400,
        grade: [78,70,80,90,97]
    },
    {
        name:"Peter Temitope Asalu",
        age: 20,
        address:"Celebridge",
        tribe:"Yagba",
        gender:"male",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [70,76,89,96,93]
    },
    {
        name:"Ponfa Micheal",
        age: 22,
        address:"Odus",
        tribe:"Berom",
        gender:"male",
        Height:1.66,
        department:"CSC",
        level:300,
        grade: [50,57,80,86,90]
    },
    {
        name:"Susan Owoicho",
        age: 26,
        address:"Salama Hostel",
        tribe:"Idoma",
        gender:"female",
        Height:1.69,
        department:"CSC",
        level:300,
        grade: [58,67,60,80,95]
    },

    {
        name:"Uzaifat Ibrahim",
        age: 24,
        address:"Dodo street Jos",
        tribe:"Magwavul",
        gender:"female",
        Height:1.68,
        department:"CSC",
        level:300,
        grade: [67,54,80,98,70]
    },
    {
        name:"Victoria Bok",
        age: 22,
        address:"Odus",
        tribe:"Berom",
        gender:"female",
        Height:1.60,
        department:"CSC",
        level:300,
        grade: [50,52,80,90,96]
    },
    {
        name:"Yada Martins",
        age: 24,
        address:"Village Hostel",
        tribe:"Kagoro",
        gender:"male",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [65,55,67,80,89]
    },
    {
        name:"Yusuf Osanga Paul ",
        age: 25,
        address:"Rayfield",
        tribe:"Berom",
        gender:"male",
        Height:1.69,
        department:"CSC",
        level:400,
        grade: [50,70,84,89,93]
    }
];

var table=document.getElementById("table");

students.forEach((student)=>{

var tr=document.createElement("tr");


var td1 = document.createElement("td");
td1.style.backgroundColor="#91dcc5";
td1.style.textAlign="center";
td1.innerHTML = student.name;
var td2 = document.createElement("td");
td2.style.backgroundColor="#91dcc5";
td2.style.textAlign="center";
td2.innerHTML = student.age;
var td3 = document.createElement("td");
td3.style.backgroundColor="#91dcc5";
td3.style.textAlign="center";
td3.innerHTML = student.address;
var td4 = document.createElement("td");
td4.style.backgroundColor="#91dcc5";
td4.style.textAlign="center";
td4.innerHTML = student.tribe;
var td5 = document.createElement("td");
td5.style.backgroundColor="#91dcc5";
td5.style.textAlign="center";
td5.innerHTML = student.gender;
var td6 = document.createElement("td");
td6.style.backgroundColor="#91dcc5";
td6.style.textAlign="center";
td6.innerHTML = student.Height;
var td7 = document.createElement("td");
td7.style.backgroundColor="#91dcc5";
td7.style.textAlign="center";
td7.innerHTML = student.department;
var td8 = document.createElement("td");
td8.style.backgroundColor="#91dcc5";
td8.style.textAlign="center";
td8.innerHTML = student.level;
var td9 = document.createElement("td");
td9.style.backgroundColor="#91dcc5";
td9.style.textAlign="center";
td9.innerHTML = student.grade;

tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);

table.appendChild(tr);
})

var Name=document.getElementById("name");
var Level=document.getElementById("level");
var Grade=document.getElementById("grade");
var age=document.getElementById("age");
var gender=document.getElementById("gender");

document.getElementById("btn").addEventListener("click",()=>{
    console.log(Name.value, level.value,grade.value,age.value,gender.value);
});


