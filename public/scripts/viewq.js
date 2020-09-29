

// var modifybtn = document.getElementsByClassName("modify");
// var form = document.getElementsByTagName("form")[0];
// var container = document.getElementsByClassName("container")[0];
// var categories =    JSON.parse(JSON.stringify(container.getAttribute("data-cats")));
// console.log(categories);

// for(var i=0;i<=modifybtn.length-1;i++){
//     modifybtn[i].addEventListener("click",(e)=>{
//         let element = e.target;
//         let id = element.getAttribute("data-qid");
//         form.setAttribute("action","/questions/"+id+"/edit?_method=patch");
//         row=create(element,Number(element.getAttribute("data-cat")),Number(element.getAttribute("data-question")));
//         form.appendChild(row);
//         form.style.display="block";

//     });
// }



// function create(e,i,j){
//     var points = categories[i]["questions"][j].points;
//     var question = categories[i]["questions"][j].desc;
//     var row = document.createElement("div");
//     row.classList.add("row");

//     var div1 = document.createElement("div");
//     div1.classList.add("input-field","col","s8");
//     var div2 = document.createElement("div");
//     div2.classList.add("input-field","col","s4");

//     var questionInput = document.createElement("input");
//     questionInput.setAttribute("placeholder",question);
//     questionInput.setAttribute("type","text");
//     questionInput.setAttribute("id","q");
//     questionInput.setAttribute("name","ques");
//     var label = document.createElement("label");
//     label.innerHTML="Question";
//     label.setAttribute("for","q");
   
//     div1.appendChild(questionInput);
//     div1.appendChild(label);

//     var questionInput2 = document.createElement("input");
//     questionInput2.setAttribute("placeholder",points);
//     questionInput2.setAttribute("type","number");
//     questionInput2.setAttribute("id","p");
//     questionInput2.setAttribute("name","points");
//     var label2 = document.createElement("label");
//     label2.innerHTML="Points";
//     label2.setAttribute("for","p");

//     div2.appendChild(questionInput2);
//     div2.appendChild(label2);

//     row.appendChild(div1);
//     row.appendChild(div2);
//     return row;
// }