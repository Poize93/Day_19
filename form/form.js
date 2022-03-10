function fetchDetails(){
    const first=document.querySelector(".first").value;
    const last=document.querySelector(".last").value;
    const address=document.querySelector(".address").value
    const pincode=document.querySelector(".pincode").value
    document.getElementsByName("gender").forEach(radio=>{   ///fetching values from Radio button
        if(radio.checked){
           gender=radio.value
        }
    })

   
 
    

            var food_list=[]
             const food=document.querySelectorAll('.fud').forEach(radio=>{   ///fetching values from Radio button
            if(radio.checked){
                food_list.push(radio.value)
                
            }  
    
        });
        
        if(food_list)
   
    
    const country=document.querySelector(".country").value
    const state=document.querySelector(".state").value

    let Details_Obj={  "first": first,
    "last":last,
    "address":address,
    "pincode":pincode,
    "gender":gender,
    "food":food_list,
    "country":country,
    "state":state
                    }
    details(Details_Obj)
}



function details(x){
 
    document.querySelector(".table").innerHTML += `<tr>
                                                        <td class="fName">${x.first}</td> 
                                                        <td class="lName">${x.last}</td>
                                                        <td class="lName">${x.address}</td>
                                                        <td class="lName">${x.pincode}</td>
                                                        <td class="lName">${x.gender}</td>
                                                        <td class="lName">${x.food}</td>
                                                        <td class="lName">${x.country}</td>
                                                        <td class="lName">${x.state}</td>
                                                    </tr>`;

    
        refresh()                                        
  
    
    }

function refresh(){
     first=document.querySelector(".first").value=""
     last=document.querySelector(".last").value=""
     address=document.querySelector(".address").value=""
     pincode=document.querySelector(".pincode").value=""
    document.getElementsByName("gender").forEach(radio=>{   ///fetching values from Radio button
        if(radio.checked){
           radio.checked=false
        }
    })
    
    var food_list=[]
    food=document.querySelectorAll('.fud').forEach(radio=>{   ///fetching values from Radio button
        if(radio.checked){
          radio.checked=false;
        }
    
        
    });
    
     country=document.querySelector(".country").value=""
     state=document.querySelector(".state").value=""
    
    
}