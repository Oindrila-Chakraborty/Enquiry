const enquiryNames=[
    {
        serial:50,
        name:"Ashish Tiwari",
        date:"06-06-2020",
        data:{
            source:"Indiamart",
            phone:"9876543210",
            email:"ashisht@gmail.com",
            location:"Salt Lake"
        },
        status:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea doloremque beatae eveniet assumenda aliquam, saepe delectus ex minima harum."
    },
    {
        serial:49,
        name:"Bhaskar Maitra",
        date:"05-06-2020",
        data:{
            source:"Indiamart",
            phone:"897132456",
            email:"bhaskarr@gmail.com",
            location:"Kankurgachi"
        },
        status:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea doloremque beatae eveniet assumenda aliquam, saepe delectus ex minima harum."
    },
    {
        serial:48,
        name:"Shreya Mallick",
        date:"04-06-2020",
        data:{
            source:"Indiamart",
            phone:"9761230981",
            email:"shreyam@gmail.com",
            location:"Lake Town"
        },
        status:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea doloremque beatae eveniet assumenda aliquam, saepe delectus ex minima harum."
    },
    {
        serial:47,
        name:"Arunima Ghosh",
        date:"03-06-2020",
        data:{
            source:"Indiamart",
            phone:"9987655434",
            email:"arunimag@gmail.com",
            location:"Golf Green"
        },
        status:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea doloremque beatae eveniet assumenda aliquam, saepe delectus ex minima harum."
    },
    {
        serial:46,
        name:"Kaustav Basu",
        date:"02-06-2020",
        data:{
            source:"Indiamart",
            phone:"9653451231",
            email:"kaustavb@gmail.com",
            location:"Tollygaunge"
        },
        status:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea doloremque beatae eveniet assumenda aliquam, saepe delectus ex minima harum."
    },
]
const burger=document.querySelector(".burger");
const ul=document.querySelector(".navlinks");
const Name=document.querySelector(".names");
const table=document.querySelector(".table");
const cross=document.querySelectorAll(".fa-times");
const flex=document.querySelectorAll(".data");
const names=document.querySelectorAll(".name");
const serialNo=document.querySelectorAll(".serial");
const date=document.querySelectorAll(".date");
const h3=document.querySelectorAll(".h3");
const Source=document.querySelectorAll(".source");
const Phone=document.querySelectorAll(".phone");
const Email=document.querySelectorAll(".email");
const Location=document.querySelectorAll(".location");
const Status=document.querySelectorAll(".stats");
const enqName=document.querySelectorAll(".enq-name");
const tableName=document.querySelectorAll(".table-name");
const tableSerial=document.querySelectorAll(".table-serial");
const tableDate=document.querySelectorAll(".table-date");
const tableSource=document.querySelectorAll(".table-source");
const tablePhone=document.querySelectorAll(".table-phone");
const tableEmail=document.querySelectorAll(".table-email");
const tableLocation=document.querySelectorAll(".table-location");
const tableStats=document.querySelectorAll(".table-stats");
const tables=document.querySelectorAll(".tables");
const tabeleOne=document.querySelector(".table-one")
const tabeleTwo=document.querySelector(".table-two")
const tabeleThree=document.querySelector(".table-three")
const tabeleFour=document.querySelector(".table-four")
const tabeleFive=document.querySelector(".table-five")
burger.addEventListener("click",function(e){
    e.preventDefault();
    ul.classList.toggle("navlinks-active");
})

Name.addEventListener("click",function(e){
    e.preventDefault();
    table.classList.add("table-visible");
    for(var i=0;i<flex.length;i++){
        flex[i].classList.add("data-flex");
    }
})
for(var j=0;j<cross.length;j++){
    cross[j].addEventListener("click",function(e){
        e.preventDefault();
        table.classList.remove("table-visible");
        for(var i=0;i<flex.length;i++){
            flex[i].classList.remove("data-flex");
        }
    })
}
tableFill();
enquiryFill();
tableSelect();
function tableFill(){
    for(i=0;i<tables.length;i++){
        enqName[i].textContent=enquiryNames[i].name;
        tableName[i].textContent=enquiryNames[i].name;
        tableSerial[i].textContent=enquiryNames[i].serial;
        tableDate[i].textContent=enquiryNames[i].date;
        tableSource[i].textContent=enquiryNames[i].data.source;
        tablePhone[i].textContent=enquiryNames[i].data.phone;
        tableEmail[i].textContent=enquiryNames[i].data.email;
        tableLocation[i].textContent=enquiryNames[i].data.location;
        tableStats[i].textContent=enquiryNames[i].status;
        tables[i].style.display="none";
    }
}
function enquiryFill(){
    for(var i=0;i<names.length;i++){
        serialNo[i].textContent=enquiryNames[i].serial;
        h3[i].textContent=enquiryNames[i].name;
        console.log(enquiryNames[i].name);
        date[i].textContent=enquiryNames[i].date;
        Source[i].textContent=enquiryNames[i].data.source;
        Phone[i].textContent=enquiryNames[i].data.phone;
        Email[i].textContent=enquiryNames[i].data.email;
        Location[i].textContent=enquiryNames[i].data.location;
        Status[i].textContent=enquiryNames[i].status;
        
    }
}
function tableSelect(){
    for(var i=0;i<names.length;i++){
        names[i].addEventListener("click",function(e){
            if(e.target.parentNode.classList.contains("one")){
                tabeleOne.style.display="block";
                tabeleTwo.style.display="none";
                tabeleThree.style.display="none";
                tabeleFour.style.display="none";
                tabeleFive.style.display="none";
            }
            else if(e.target.parentNode.classList.contains("two")){
                tabeleOne.style.display="none";
                tabeleTwo.style.display="block";
                tabeleThree.style.display="none";
                tabeleFour.style.display="none";
                tabeleFive.style.display="none";
            }
            if(e.target.parentNode.classList.contains("three")){
                tabeleOne.style.display="none";
                tabeleTwo.style.display="none";
                tabeleThree.style.display="block";
                tabeleFour.style.display="none";
                tabeleFive.style.display="none";
            }
            if(e.target.parentNode.classList.contains("four")){
                tabeleOne.style.display="none";
                tabeleTwo.style.display="none";
                tabeleThree.style.display="none";
                tabeleFour.style.display="block";
                tabeleFive.style.display="none";
            }
            if(e.target.parentNode.classList.contains("five")){
                tabeleOne.style.display="none";
                tabeleTwo.style.display="none";
                tabeleThree.style.display="none";
                tabeleFour.style.display="none";
                tabeleFive.style.display="block";
            }
        })
    }
}