let inputBox =document.getElementById("input_box");
let areaBox =document.getElementById("text_box");
let postButton =document.getElementById("post");
let showText =document.getElementById("para_area");
let updateButton =document.getElementById("update");
let searchInput =document.getElementById("search_input");
let searchButton =document.getElementById("search_btn");
let para =document.getElementById("paragraph")


searchButton.addEventListener('click',()=>{
    console.log(searchInput.value)
    

    arrayBox.map((item)=>{

        // if(searchInput.value === item.caption){
        //     para.innerHTML =item.caption;
        //     searchInput.value ="";
        // }

        if(item.caption.slice(0,searchInput.value.length).toUpperCase() === searchInput.value.toUpperCase()){
            para.innerHTML =item.caption;
            searchInput.value ="";
        }

        // console.log(item.caption.slice(0,searchInput.value.length))
        
    })
})









let arrayBox =[];
let indexBox ="";

postButton.addEventListener('click',()=>{
    arrayBox.push({
        name:inputBox.value,
        caption:areaBox.value,
    })
    inputBox.value ="";
    showText.innerHTML ="";
    areaBox.value ="";
    display()
})

updateButton.addEventListener('click',()=>{
    arrayBox[indexBox].name =inputBox.value;
    arrayBox[indexBox].caption =areaBox.value;

    showText.innerHTML ="";
    postButton.style.display ="block";
    updateButton.style.display ="none"
    inputBox.value ="";
    areaBox.value ="";
    display()
    
   
})


function display(){
    arrayBox.map((item)=>{
        showText.innerHTML +=`
         <div id="para">
                    <h2>${item.name}</h2>
                    <p>${item.caption}</p>
                </div>
    
                <div id="buttons">
                    <button id="dele"class="delete">delete</button>
                    <button id="edit" class="edit">Edit</button>
                </div>
        `
    
    })

    let dele =document.querySelectorAll(".delete");
    let deleteButton =Array.from(dele);
    deleteButton.map((item,index)=>{
        item.addEventListener('click',()=>{
            arrayBox.splice(index,1)
            display()
            showText.innerHTML ="";
        })
    })

    let edit =document.querySelectorAll(".edit");
    let editButton =Array.from(edit);
    editButton.map((item,index)=>{
        item.addEventListener('click',()=>{
            
            inputBox.value =arrayBox[index].name;
            areaBox.value =arrayBox[index].caption;

            postButton.style.display ="none";
            updateButton.style.display ="block"

            indexBox =index;

            
            
            
        })
    })
}