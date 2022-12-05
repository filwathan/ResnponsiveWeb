const url = window.location.href;


//#region page : index, indexLogin
if (url.endsWith("index.html") || url.endsWith("indexLogin.html") || url.endsWith("ViewAll.html")){

    const upcamongMovies = ["Boxcar Bertha", "Mean Streets",
                    "Alice Doesn't Live Here Anymore",
                    "Taxi Driver","The Color of Money"];

    const endPoint = "https://www.omdbapi.com/?apikey=2d8e053c&t="

    upcamongMovies.forEach((title) => {
        let getFilm = fetch( endPoint + title.replace(" ","%20") )
        
        const proses = async () => {
            const respon = await getFilm;
            const film = await respon.json();
            console.log(film.Title);

            const warp = document.getElementById("warp-upcoming-list");

            const divChildWarp = document.createElement("div");
            warp.appendChild(divChildWarp);

            const image = document.createElement("img");
            image.src = film.Poster;
            divChildWarp.appendChild(image);

            const title = document.createElement("h4");
            title.textContent = film.Title;
            divChildWarp.appendChild(title);

            const genre = document.createElement("p");
            genre.textContent = film.Genre;
            divChildWarp.appendChild(genre);

            const btnDetail = document.createElement("button");
            btnDetail.textContent = "Detail";
            btnDetail.setAttribute('onclick', "btnDetailsClick()");        
            
            divChildWarp.appendChild(btnDetail);
        }
        proses()   
    });
    
    function btnDetailsClick(){
        window.location.assign("./MovieDetails.html");
        };

    
}
//#region 

//#region page : signIn
else if (url.endsWith("SignIn.html")){
    const notif = document.getElementById("notice-form-head");
    const formSignUp = document.getElementById("form-signup");
    const alerta = document.getElementById("notif-signup");

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // let alerta = document.getElementsByClassName("notif-signup");


    formSignUp.addEventListener('submit', validationLogin)

    function validationLogin(event) {
        event.preventDefault();
        if (email.value !== "admin@mail.com" || password.value !== "super" ){
            alerta.style.display = "block";
        } 
        else{
             alerta.style.display = "none";
             window.location.assign("./indexLogin.html");
        }
        
    }
}