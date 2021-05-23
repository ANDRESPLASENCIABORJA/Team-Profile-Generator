// TODO: Create functions to generate markdown for the HTML file 
//Create a function to generate the markdown for the html file
function generateHtml(data){
    const {name, id, email, role, officeNumber, github, school} = data;
    
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--FOUNDATION STYLE API LINK-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css"
            integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">
        <!--GOOGLE FONTS STYLE LINK-->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <!--Compresed css-->
        <link rel="stylesheet" href="./dist/style.css">
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <!--First create the header for the markdown-->
        <header>
            <h1 class="text-centered">My Team</h1>
        </header>
        <!--Then a main section where i am going to deal with the information provided by the users-->
        <main>
            <!--First section manager cards-->
            <section class="card" id="card-manager">
                <div class="blue">
                    <h2 class="name">${name}</h2>
                    <h2 class="work">Manager</h2>
                </div>
                <ul>
                    <li class="table" id="id">ID:${id}</li>
                    <li class="table" id="mail">Email:${email}</li>
                    <li class="table" id="office">Office number:${officeNumber}</li>
                </ul>
            </section>
            <!--Second section Engineer card-->
            <section class="card" id="card-engineer">
                <div class="blue">
                    <h2 class="name">${name}</h2>
                    <h2 class="work">Engineer</h2>
                </div>
                <ul>
                    <li class="table" id="id">ID:${id}</li>
                    <li class="table" id="mail">Email:${email}</li>
                    <li class="table" id="github">GitHub:${github}</li>
                </ul>
            </section>
            <!--Third and last section card intern-->
            <section class="card" id="card-intern">
                <div class="blue">
                    <h2 class="name">${name}</h2>
                    <h2 class="work">Intern</h2>
                </div>
                <ul>
                    <li class="table" id="id">ID:${id}</li>
                    <li class="table" id="mail">Email:${email}</li>
                    <li class="table" id="school">School:${school}</li>
                </ul>
            </section>
        </main>
    </body>
    
    </html>`
}

module.exports = generateHtml;