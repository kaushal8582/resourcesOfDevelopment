const dataContainer = document.getElementById("data");
const dataBox = document.querySelector(".data_box")
const editBtn = document.querySelector(".edit");
const form = document.querySelector("form")

const headingInput = document.querySelector(".heading")
const categoryInput = document.querySelector(".category")
const descInput = document.querySelector(".desc")
const linkgInput = document.querySelector(".link")

editBtn.addEventListener("click", () => {
    form.style.visibility = "visible"

})

document.querySelector(".close ").addEventListener("click",()=>{
    form.style.visibility = "hidden"
})


let data = []

let obj = {
    heading: "kaushal",
    description: "k",
    category: "k",
    link: "k"
}
// localStorage.clear()

const allData = localStorage.getItem("data");
if (allData != null) {
    data = (JSON.parse(allData))
    createBox()
}

form.addEventListener("submit", (e) => {
    // e.preventDefault()
    obj.heading = headingInput.value;
    obj.description = descInput.value
    obj.link = linkgInput.value
    obj.category = categoryInput.value;

    data.push(obj);

    form.style.visibility = "hidden"
    headingInput.value=""
    descInput.value=""
    linkgInput.value =""
    categoryInput.value=""

    setDataLocalStorage()
    createBox()

})

function setDataLocalStorage() {

    const strData = JSON.stringify(data)
    localStorage.setItem("data", strData)
}


function createBox() {

    console.log(data);

dataContainer.innerHTML=''
    let box = document.createElement("div")
    box.classList.add("box")
    for (let i = 0; i < data.length; i++) {
        box.innerHTML += `
    <div class="data_box">
       <div class="data_top">
           <h2>${data[i].heading}</h2>
           <p>${data[i].category}</p>
       </div>
       <h4>${data[i].description} </h4>
       <div class="link">
           <a href="${data[i].link}">${data[i].link}</a>

       </div>
   </div>
        `
    }
    dataContainer.appendChild(box);


}

//search work

const searchInput = document.querySelector(".search")

searchInput.addEventListener("keyup",(e)=>{
    if(e.target.value!=''){
        search(e.target.value.toLowerCase())
    }else{
        createBox()
    }
})

const allDataBox = document.querySelectorAll(".data_box")


function search(value){
    dataContainer.innerHTML =""
    allDataBox.forEach((e)=>{
        let cateValue =  e.querySelector(".data_top p").innerText.toLowerCase()
        if(cateValue.indexOf(value)>-1){
            dataContainer.appendChild(e);
        }
    })
}
