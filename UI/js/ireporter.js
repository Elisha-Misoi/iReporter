
            window.onload = function(){
                /*display card content*/
                            var classname = document.getElementsByClassName("post-card");
                            var myFunction = function() {
                            var title = event.currentTarget.querySelector('.title').innerHTML;
                            var details = event.currentTarget.querySelector('.description').innerHTML;
                            document.getElementById("complaint-details").innerHTML = details;
                            document.getElementById("complaint-title").innerHTML = title;
                        
                        };
                        for(i=0;i<classname.length;i++){
                        classname[i].addEventListener('click', myFunction, false);
                        }
                 /*display card content*/
            
               /*filter flags/interventions*/
                        //show flags
                      document.getElementById("flags").onclick = function filter(){
                      var interventions = document.querySelectorAll('.intervention');
                      var flags = document.querySelectorAll('.flag');
            
                      for(i=0; i< interventions.length;i++){
                          interventions[i].style.display = 'none';
            
                      }
                      for(i=0; i< flags.length;i++){
                          flags[i].style.display = '';
            
                      }
                      
                      }
                        //show interventions
             document.getElementById("interventions").onclick = function filter(){
                      var interventions = document.querySelectorAll('.intervention');
                      var flags = document.querySelectorAll('.flag');
            
                      for(i=0; i< interventions.length;i++){
                          interventions[i].style.display = '';
            
                      }
                      for(i=0; i< flags.length;i++){
                          flags[i].style.display = 'none';
            
                      }
                      }
            
            /*filter flags/interventions*/
                        }
            
                    