(async function getPlatforms(){
    // console.log("Kicsipocsom");

    try{
        await fetch(`https://localhost:7173/api/CacheClear/`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            let wrapper = document.getElementById('wrapper');
            
            data.forEach((platform) => {
                console.log(platform);
                let div = document.createElement('div');
    
                div.innerHTML = 
                `<div class="col d-flex justify-content-between  py-2 border-bottom align-items-center">
                    <p>${platform.title}</p>
                    <button class="btn btn-primary" onClick="updateCache(${platform.platformID})">Update</button>
                </div>`
    
                wrapper.append(div);            
            })
        });
    } catch(err){
        alert("API switched off. :)");
    }
})();
    
function updateCache(id){
    console.log(id);
            
    fetch(`https://localhost:7173/api/CacheClear/${id}`)
    .then((res) => res.json())
    .then((data) => {
        JSON.stringify(data)
        alert(`You succesfully cleared the cache on:  ${data.platformName}`);
    })
}
