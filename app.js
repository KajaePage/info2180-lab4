document.addEventListener("DOMContentLoaded", loadDOM)
function loadDOM(){ 
    console.log("Website has Loaded!")
    displaySearch()
    console.log("Message has been updated")
}

function displaySearch(){
    document.getElementById('button').onclick = function() {
        let uri = "http://localhost/info2180-lab4/superheroes.php";
            
            let h = new Headers();
            h.append('Accept', 'application/php');
            
            let req = new Request(uri, {
                method: 'POST',
                headers: h,
                mode: 'cors'
            });
            
            fetch(req)
            .then( (response)=>{
                if(response.ok){
                    return response.text();
                }else{
                    throw new Error('BAD HTTP stuff');
                }
            })
            .then( (Data) =>{
                console.log(Data);
                alert(Data)
            })
            .catch( (err) =>{
                console.log('ERROR:', err.message);
            });
       
    };
}
