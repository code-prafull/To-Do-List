const inputArea = document.querySelector(".Input-Area");
const List = document.querySelector(".list-container");

function addtask() {   // 👈 dhyaan: yahi naam HTML me hai
    if (inputArea.value === '') {
        alert("You must write something!");
    } else {
        // create li
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        List.scrollTo({top:List.scrollHeight,behavior: "smooth"})
    }
    inputArea.value = '';
    savedata()
}
inputArea.addEventListener("keydown" , (e) => {
   if(e.key == "Enter"){
    addtask();
   }
})

List.addEventListener("click", (e) =>{
   if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
   }
   else if (e.target.tagName === "SPAN")
    e.target.parentElement.remove();
savedata()
   
});

function savedata(){
    localStorage.setItem("Data", List.innerHTML);
}
function showdata(){
    List.innerHTML =localStorage.getItem("data");
}
showdata()