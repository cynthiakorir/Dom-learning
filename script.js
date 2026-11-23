let heading=document.getElementById("heading");
heading.style.color="blue";
heading.style.fontSize="20px";


let message=document.getElementById("message");
message.style.color="red";
message.style.fontSize="18px";

let anotherparagraph=document.querySelector("#another-paragraph");
anotherparagraph.style.color="green";
anotherparagraph.style.fontSize="16px";

let students=["Erick", "Mercy", "Cynthia", "Gitau" ];

let studentList= document.getElementById("studentlist");
for (let name of students){
    let listItem= document.createElement("li");
    listItem.textContent=name;
    studentList.appendChild(listItem);
}

function handleClick(){
    document.getElementById("heading1").textContent ="This is javascript";
}

let button= document.getElementById("myButton");
button.addEventListener("click",
    function(){
        alert("Button Clicked!");

    }
);


