
function logIn(){
    var email = document.getElementById('email').value
   var password = document.getElementById('password').value

   axios.post('http://localhost:5000'+'/login',{
    email:email,
    password:password
   })
   .then((res)=>{
      console.log(res.data.message);
      alert(res.data.message)
      window.location.href = "/todo.html"
   })
   .catch((err)=>{
     console.log(err);
     console.log("fail")
   })
}

function signUp(){
   var name = document.getElementById('name').value
   var email = document.getElementById('email').value
   var password = document.getElementById('password').value
   var phone = document.getElementById('phone').value

   console.log(name,email,password,phone);

   
   axios.post('http://localhost:5000'+'/register' , {
    name:name,
    email:email,
    password:password,
    phone:phone
   },{withCredentials:true})
   .then((res)=>{
    console.log(res)
    alert(res.data.message)
    window.location.href = "/signup.html"
   })
   .catch((err)=>{
    console.log(err)
    console.log("fail")
   })
}
// ********  TODO FUNCTIONALITY ********* //
var todo_list = document.getElementById('todo-list')

function addtodo(){
   var item = document.getElementById('iteam').value

    // console.log(item);
    axios.post('http://localhost:5000'+'/item',{
      item:item
    }).then((res)=>{
      console.log(res.data.message);
    }).catch(()=>{
      console.log("fail")
    })
    
    getData();
    
    

//    var list = document.createElement('li')
//    var listText = document.createTextNode(item)
//    var br = document.createElement('br')

//    list.appendChild(listText)
//    list.appendChild(br)
//    todo_list.appendChild(list)
    
//    list.setAttribute("class", "item-input");    
 
//  var delBtn = document.createElement("button");
//  var delbtnText = document.createTextNode("Delete |");
//  delBtn.appendChild(delbtnText); 
//  delBtn.setAttribute("class", "removebtn");    

// list.appendChild(delBtn);
// delBtn.setAttribute("onclick","deletebtn(this)");

// var rembtn = document.createElement("button");
// var remText = document.createTextNode("| Edit");
// rembtn.appendChild(remText);
// rembtn.setAttribute("class", "editbtn");    
// list.appendChild(rembtn);
// rembtn.setAttribute("onclick","remove(this)");
// item.value = " "

// var divv = document.createElement("div");
// divv.setAttribute("class"," mt-1 flot-end")
}

function getData() {
     console.log("get");
     axios.get('http://localhost:5000'+'/item')
    .then((res)=>{
        document.getElementById('todo-list').innerHTML = ""
        res.data.map((data)=>{
          // console.log(data.item);
          // console.log(data.item);
                    var newData = `
                        <li class="item-input" id=${data._id}>${data.item}</li>
                        <br /> 
                        <button class="removebtn" href="javascript:void(0)" onclick="deletebtn('${data._id}')">Delete |</button>
                        <button href="javascript:void(0)" class="editbtn" onclick="editBtn('${data._id}', '${data.item}');">| Edit</button>
                    `;
                    document.getElementById('todo-list').innerHTML += newData;
                
        })

      // console.log(res);
    }).catch(()=>{
      console.log("fail")
    })
     
} 

function editBtn(id,item){
  // console.log(id , item);
  document.getElementById(id).innerHTML = `
<li><input type="text" id="editVal" value="${item}" /></li>
<br />
<button class="editbtn" onclick=update("${id}")>| update</button>
` 
// document.getElementById(id).innerHTML = newData
}

function update(id){
  var todo = document.getElementById('editVal').value
  axios.put('http://localhost:5000/item/'+id ,{
    item:todo,
  })
  .then((res)=>{
    console.log(res);
      alert(res.data.message)
      getData();
  }).catch((err)=>{
       console.log(err);
  })
  // console.log(id, todo);
}

function deletebtn(id){
axios.delete('http://localhost:5000/item/'+id)
.then((res)=>{
   alert(res.data.message)
   getData();
  }).catch((err)=>{
    console.log(err);
  })
}
getData();