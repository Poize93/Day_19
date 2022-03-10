//<button type="button" class="btn btn-primary">Primary</button>


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
        const food=document.querySelectorAll('.fud').forEach(chkbox=>{   ///fetching values from Radio button
            if(chkbox.checked){
            food_list.push(chkbox.value)
            
            }  
        });
      
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

        if(food_list.length>1){
            details(Details_Obj)
        }else {
            window.alert("Select at least 2 favourite foods")
        }                    
        
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