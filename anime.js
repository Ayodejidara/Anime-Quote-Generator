const quote=document.querySelector(".quote-left")
const body=document.querySelector("body")
const animeInfo1=document.querySelector(".animeInfo1")
const btn=document.getElementById("generate");
const animeInfo=document.querySelector(".animeInfo")
const animeDisplay=document.querySelector(".anime-display")
const color=["#88F8EC","#84D992","#F29D54","#E263BA",
"#E12C2C","#DFE12C"];
const getRandomAnime= async()=>{
    try{
        const res= await axios.get("https://animechan.vercel.app/api/random");
      
        let animeShow=res.data.anime;
        let animeCharacter=res.data.character;
        let animeQuote=res.data.quote;

        animeInfo.innerHTML=`<p>-${animeCharacter},${animeShow}</p>
        
        `

        animeDisplay.innerHTML=` <p>${animeQuote}</p>`
    }
   catch(e){
     animeInfo.innerHTML=`<p class="err">No quotes available try again:)</p>`
     animeDisplay.innerHTML=`<p></p>`
   }
}
randomNum=()=>{
   return Math.floor(Math.random()*6)
}
colorChanger=()=>{
 body.style.backgroundColor=color[randomNum()]

}
btn.addEventListener("click",async function generate(){
    await getRandomAnime() 
    colorChanger()
})




