let todo=[];
let req=prompt("enter your request : ");

while (true){
    if(req=="quit"){
        console.log("quited the app");
        break;
    }else if(req=="add"){
        let task = prompt("enter your task ");
        todo.push(task);
        console.log("task added")
        req=prompt("enter your request : ");
    }else if(req=="list"){
        console.log("--------------------");
        for(let i=0;i<todo.length;i++){
            console.log(` ${i} ${todo[i]}`);
        }
        console.log("--------------------")
        req=prompt("enter your request : ");
    }else if(req=="delete"){
        let indx = prompt("enter your index to delete ");
        console.log(`your task "${todo[indx]}" is deleted.`);
        todo.splice(indx,1);
        req=prompt("enter your request : ");
    }else{
        console.log("your input is wrong.")
        req=prompt("enter your request : ");
    }
}