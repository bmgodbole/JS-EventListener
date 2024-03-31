

document.addEventListener('DOMContentLoaded', function(){
  const dataInput = document.getElementById('dataInput');
  const childContainer = document.getElementById('childContainer');
  const receivedData = document.getElementById('receivedData');
  console.log(dataInput);
  console.log(childContainer);
  console.log(receivedData);
  dataInput.addEventListener("input",function(e)
  {
    if (childContainer.children.length === 0)
    {
      console.log('no elements');
      const childDiv = document.createElement('div');
      childDiv.classList.add('child-container');
      childContainer.appendChild(childDiv);
      //childDiv.innerText = e.target.value;
    }
    childContainer.children[0].textContent = 'Received data from parent: '+dataInput.value;
  })
});
document.querySelector("select[name='get_option']").addEventListener(
  'change',
  (e)=>{
  document.querySelector('.text2').innerText = e.target.value;
});
const collection = document.getElementsByClassName("para-text");
let p1='';
console.log(collection);
for (let i = 0; i < collection.length; i++) {
  p1 =  collection[i].querySelector("p")
  console.log(p1);
  collection[i].style.backgroundColor = "red";
}
p1.addEventListener(
  'mouseover',
  (e)=>{
  e.target.style.color = "Green";
  e.target.addEventListener('mouseout',()=>{
    e.target.style.color = "black";
  });
});

//document.addEventListener('DOMContentLoaded',function() {}
//{
//  const dataInput = document.getElementById('dataInput');
 // const childContainer = document.getElementById('childContainer');
 // const receivedData = document.getElementById('receivedData');

  //dataInput.addEventListener('input',function()
  //{
  //}
//}

 /* if(childContainer.children.length() === 0)
  {
    const childDiv = document.CreateElement('div');
    childDiv.classList.add('child-container');
    childContainer.appendChild(childDiv);
    }
    childContainer.children[0].textContent = 'Received data from parent: ${dataInput.value}';
     childContainer.addEventListener('click',funcion() {
   const eventData = 'Eventdata from child';
   receivedData.textContent = 'Received data from child:${eventData}';
   console.log('Event data received in parent : ',eventData);
   });
   }); */
