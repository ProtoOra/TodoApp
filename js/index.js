function getAndUpdate(){
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
           itemJsonArray = [];
           itemJsonArray.push([title, desc]);
           localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
       }
       else{
           itemJsonArrayStr = localStorage.getItem('itemsJson')
           itemJsonArray = JSON.parse(itemJsonArrayStr);
           itemJsonArray.push([title, desc]);
           localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
       }
       update();
}  
function update(){
    if(localStorage.getItem('itemsJson') == null){
       console.log("updating...");
       itemsJsonArray = [];
       localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    else{
        console.log("else updaing");
       itemsJsonArraystr = localStorage.getItem('itemsJson');
       itemsJsonArray = JSON.parse(itemsJsonArraystr);
   }
   //Populate the Table
   let tableBody = document.getElementById('tableBody');
   let str = "";
   itemsJsonArray.forEach((element,index) => {
       str +=`
       <tr>
       <th scope="row">${index + 1}</th>
       <td>${element[0]}</td>
       <td>${element[1]}</td>
       <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</td>
       </tr>`;
       
});
    tableBody.innerHTML = str;
}
add = document.getElementById('add');
add.addEventListener("click",getAndUpdate);
update();
function deleted(itemIndex){
       console.log("Delete", itemIndex);
       itemJsonArrayStr = localStorage.getItem('itemsJson')
       itemJsonArray = JSON.parse(itemJsonArrayStr);
       // Delete itemIndex element from the array
       itemJsonArray.splice(itemIndex, 1);
       localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
       update();

   }
function clearStorage(){
       if (confirm("Do you areally want to clear?")){
       console.log('Clearing the storage')
       localStorage.clear();
       update()
       }
   }