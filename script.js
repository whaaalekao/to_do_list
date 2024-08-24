const text =document.querySelector(".text");
const list=document.querySelector(".list");
const button=document.querySelector(".button")


function newmis(){
    if(text.value===""){
        return;
    }
    const create_li=document.createElement("li");
    create_li.innerHTML=`
        <input type="checkbox" class="checkbox">
        <label>${text.value}</label>
        <button class="trash_button">🗑️</button>
    `

    const trash_button=create_li.querySelector(".trash_button")
    trash_button.addEventListener("click",function(){
        create_li.remove();
    })

    const checkbox=create_li.querySelector(".checkbox")
    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            create_li.style.textDecoration="line-through"
            create_li.style.color="#999"
            list.append(create_li)
        }else{
            create_li.style.textDecoration="none"
            create_li.style.color=""
            list.prepend(create_li)
        }

    })
    
        
    list.append(create_li);
    text.value="";
}


button.addEventListener("click", newmis)

text.addEventListener("keyup",function(e){
    if(e.key==="Enter"){
        newmis();
    }
});


