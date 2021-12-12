// Plus btn for opening diaolog box
let openDialog = document.querySelector(".plus");

let openDia = () => {
    document.querySelector(".dialog").style.display = "flex";
    console.log("12345");
};

openDialog.addEventListener("click", openDia);
// Plus btn for opening diaolog box

//btn for closing dialog box
let closeDialog = document.querySelector(".dialog .dialog-box .icons button");

let closeDia = () => {
    document.querySelector(".dialog").style.display = "none";
    console.log("6789");
};

closeDialog.addEventListener("click", closeDia);
//btn for closing dialog box


//closing/deleting a ticket
// let clstck = document.querySelectorAll(".wrapper .icon-3");
// let clstckfn = () => {
//     closeDia();
//     document.querySelector(".box").style.display = "none";
//     console.log("67767");
// };

// for(let i=0;i<clstck.length;i++){
//     let val = clstck[i];
//     val.addEventListener("click",clstckfn);
//     console.log("7878");
// }


//closing/deleting a ticket & minimzing the ticket
let adddlt = () => {
    let closebtnArr = document.querySelectorAll(".icon-3");
    let minimizeicons = document.querySelectorAll(".icon-1");
    console.log("I have enetered addlt");
    let closetck = (e) => {
        let box = e.target.closest(".box");
        console.log(box);
        box.style.display = "none";
    }
    
    for(let i=0;i<=closebtnArr.length;i++){
        const closebtn = closebtnArr[i];
        closebtn.addEventListener("click",closetck);
    }

    let minimize = (e) => {
        let box = e.target.closest(".box");
        console.log(box);
        if(box.querySelector("main").style.display !== "none"){
            box.querySelector("main").style.display="none";
        }else{
            box.querySelector("main").style.display="block";
        }
    };

    for(let i=0;i<minimizeicons.length;i++){
        const closebtn = minimizeicons[i];
        closebtn.addEventListener("click",minimize);
    }
};
//closing/deleting a ticket & minimizing the ticket



//color change button

//yellow btn logic
let yellowbtn = document.querySelector(".color-1");

let colorbtn = () => {
    document.querySelector(".box").style.background="yellow";
};

yellowbtn.addEventListener("click",colorbtn);
//yellow btn logic

//blue btn logic
let bluebtn = document.querySelector(".color-2");

let colorbtn1 = () => {
    document.querySelector(".box").style.background="blue";
};

bluebtn.addEventListener("click",colorbtn1);
//blue btn logic

//red color btn
let redbtn = document.querySelector(".color-3");

let colorbtn2 = () => {
    document.querySelector(".box").style.background="red";
};

redbtn.addEventListener("click",colorbtn2);
//red color btn

//brown btn logic
let brownbtn = document.querySelector(".color-4");

let colorbtn3 = () => {
    document.querySelector(".box main textarea").style.background="brown";
};

brownbtn.addEventListener("click",colorbtn3);
//brown btn logic

//chartreuse btn logic
let chartreusebtn = document.querySelector(".color-5");

let colorbtn4 = () => {
    document.querySelector(".box main textarea").style.background="chartreuse";
};

chartreusebtn.addEventListener("click",colorbtn4);
//chartreuse btn logic

//violet btn logic
let violetbtn = document.querySelector(".color-6");

let colorbtn5 = () => {
    document.querySelector(".box main textarea").style.background="rgb(216, 32, 233)";
};

violetbtn.addEventListener("click",colorbtn5);
//violet btn logic

//color change button


//Adding Ticket 
let addtkt = document.querySelector(".add");

let addtktfn = () => {
    closeDia();
    let boxes = document.querySelector(".wrapper main");
    let oldhtml = boxes.innerHTML;
    let title = document.getElementById("title");
    let boxContent = document.getElementById("box-content");
    boxes.innerHTML = oldhtml + ` <div class="box">
    <div class="boxsh">
        <div class="header">${title.value}</div>
        <div class="icon">
            <button class="icon-1">1</button>
            <button class="icon-2">2</button>
            <button class="icon-3">3</button>
        </div>
    </div>
 <main><textarea name="" id="" cols="30" rows="10" placeholder="Enter your Text">${boxContent.value}</textarea></main>
 </div>`;
 adddlt();
};

addtkt.addEventListener("click", addtktfn);
//Adding Ticket 