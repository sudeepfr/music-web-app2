let premium=document.querySelector(".explor-premium");
let cancel= document.querySelector(".cancel");
let explorebtn=document.querySelector(".explorebtn");
explorebtn.addEventListener("click",()=>{
         premium.style.display="flex";
 })
 cancel.addEventListener("click",()=>{
      premium.style.display="none";
 })

 let close=document.querySelector(".close");
 let pay=document.querySelectorAll(".pay");
 let payment=document.querySelector(".payment");
 let checkout=document.querySelector(".checkout");
   
  pay.forEach((pay)=>{
       pay.addEventListener("click",()=>{
             payment.style.display="flex";
       })   
  })

    close.addEventListener("click",()=>{
      payment.style.display="none";
    })
   checkout.addEventListener("click",()=>{
      payment.style.display="none";
   })


   let bcimage1=document.querySelectorAll(".bcimage1");
   let uppersongplaylist=document.querySelector(".uppersongplaylist");
    let uppersongplayclose=document.querySelector(".uppersongplayclose");
    let icons=document.querySelector(".icons")
   

       const songs=[
          {  
            id:1,
             font:"Daily Mix4",
             info:[
               {
                 img:"./ap_dhillon.jpg",
                 title:"Excuse_320 (Ap dhillon)",
                  songindex:1,
                },

                {
                     img:"./Raftaar.jpeg",
                     title:"All Black _320 (Raftaar)",
                     songindex:2,
                },

                 {
                    img:"./raftar.jpeg",
                    title:"Teri Gali_320 (singer)",
                    songindex:3,
                 },
             ],
          
       },

       {
            id:2,
              font:"Mix",
             info:[
               {
                 img:"./tera.jpg",
                 title:"Isme tera ghata(verma)",
                 songindex:4,
                },

                {
                     img:"./gajendra.png",
                     title:"Mili na tum (verma)",
                     songindex:5,
                },

                 {
                    img:"./raftar.jpeg",
                    title:"Teri Gali_320 (singer)",
                    songindex:6,
                 },
             ],
          
       },
       {
            id:3,
             font:"All Mitraz",
             info:[
               {
                 img:"./jannat.jpeg",
                 title:"jannat_320(Mitraz)",
                 songindex:7,
                },

                {
                     img:"./zehan.jpeg",
                     title:"Zehen _320(Mitraz)",
                     songindex:8,
                },

                 {
                    img:"./alfaaz.jpg",
                    title:"Alfaazo_320(Mitraz)",
                    songindex:9,
                 },
             ],
          
       },
       {
            id:4,
                font:"All hindi",
             info:[
               {
                 img:"./hum pyaar.jpg",
                 title:"Hum pyaar hai(Udit )",
                 songindex:10,
                },

                {
                     img:"./agar.jpeg",
                     title:"Ager tum sathho(Alka)",
                     songindex:11,
                },

                 {
                    img:"./hum yaar hai.jpg",
                    title:"Main koi aisa(Ratan)",
                    songindex:12,
                 }
             ],
          
       },
       {
            id:5,
              font:"Hindi Mix",
             info:[
               {
                 img:"./hum pyaar.jpg",
                 title:"Hum pyaar hai(Udit )",
                 songindex:13,
                },

                {
                     img:"./agar.jpeg",
                     title:"Ager tum sathho(Alka)",
                     songindex:14,
                },

                 {
                    img:"./hum yaar hai.jpg",
                    title:"Main koi aisa(Ratan)",
                    songindex:15,
                 },
             ],
          
       },
       
       {
            id:6,
               font:"Daily Mix3",
             info:[
               {
                 img:"./hum pyaar.jpg",
                 title:"Hum pyaar hai(Udit )",
                 songindex:16,
                },

                {
                     img:"./agar.jpeg",
                     title:"Ager tum sathho(Alka)",
                     songindex:17,
                },

                 {
                    img:"./hum yaar hai.jpg",
                    title:"Main koi aisa(Ratan)",
                    songindex:18,
                 },
             ],
          
       },

     ]
     

     

     let choosenSong=songs[0];
     const songimg=document.querySelectorAll(".songimg");
      const songtag=document.querySelectorAll(".songtag");
       let uppersongplaylistfont=document.querySelector(".uppersongplaylistfont");
       let currentAudio =null;

       
     bcimage1.forEach((bcimage1,index)=>{
           bcimage1.addEventListener("click",()=>{
                choosenSong=songs[index];
                songimg.forEach((img,index)=>{
                       img.src=choosenSong.info[index].img;
                    });
                    
                    songtag.forEach((songtag,index)=>{
                         songtag.textContent=choosenSong.info[index].title;
                    });
                    uppersongplaylistfont.textContent=choosenSong.font;
                    
                      
                    
               });
               
          });
          
         
               
               let playcircle=document.getElementById('playcircle');
               let songelement=document.querySelectorAll(".song");
               let progressbar=document.getElementById("progressbar");
               

      songelement.forEach((song,index)=>{
      song.addEventListener("click",()=>{
         if(choosenSong.info[index]){
            
          if(currentAudio){
             currentAudio.pause();
              currentAudio.currentTime=0;
             currentAudio.removeEventListener("timeupdate", updateTime);

         }
                  currentAudio=new Audio(`${choosenSong.info[index].title}.mp3`);
                 currentAudio.currentTime=0;
                 currentAudio.play();
                  playcircle.classList.remove('fa-play-circle');
                  playcircle.classList.add('fa-pause-circle');
                 
         
         }
         
      });
     });
   
   
     function updateTime() {
          if (currentAudio) {
              
              let progress = parseInt((currentAudio.currentTime / currentAudio.duration) * 100);
              progressbar.value = progress;
             
          }
      }
      


progressbar.addEventListener("input", () => {
     if(currentAudio&& currentAudio.duration > 0){
          currentAudio.currentTime = (progressbar.value * currentAudio.duration) / 100;
          
         }
     });
     
    




        playcircle.addEventListener("click",()=>{
             if(currentAudio.paused||currentAudio.currentTime<=0){
                 currentAudio.play();
                  playcircle.classList.remove('fa-play-circle');
                  playcircle.classList.add('fa-pause-circle');
             }  
             else{
               currentAudio.pause();
                playcircle.classList.remove('fa-pause-circle');
                playcircle.classList.add('fa-play-circle');

             }
        });

   
        uppersongplayclose.addEventListener("click",()=>{
          uppersongplaylist.style.display="none";
          currentAudio.pause();
          icons.style.display="none";
          playcircle.classList.remove('fa-pause-circle');
          playcircle.classList.add('fa-play-circle');
           
       });
         
     //    current playingsong  crossbutton 
     bcimage1.forEach((bcimage1)=>{
     bcimage1.addEventListener("click",()=>{
          uppersongplaylist.style.display="flex";
          icons.style.display="flex";
     })
})


     let unablesongclose=document.querySelector(".unablesongclose");
     let unablesong=document.querySelector(".unablesong");
     let image2=document.querySelectorAll(".image2");
     
     image2.forEach((image2)=>{
          image2.addEventListener("click",()=>{
               unablesong.style.display="flex";
          })
     })

     unablesongclose.addEventListener("click",()=>{
             unablesong.style.display="none";
     })
   
