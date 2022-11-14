class makeTeam {

    static buildTeam(team) {
        let Team = team;
        let Manager = team[0];
        let Engineer = team[1];
        let Intern = team[2];

        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
    <title>My Dev Team 🖥️👥</title>
</head>
<body>
    <section class="testFlex">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${Manager.manager1}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${Manager.managerID}</h6>
            <p class="card-text">${Manager.manager1} is a talented Lead Dev!</p>
            <a href="mailto:${Manager.managerEmail}" class="card-link">Contact: ${Manager.managerEmail}</a>
            <a href="#" class="card-link">Call: ${Manager.officeNumber}</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${Engineer.engineer}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${Engineer.engineerID}</h6>
            <p class="card-text">The Engineer role is key to the success of the team. Engineer's handle both front-end and back-end development.</p>
            <a href="mailto:${Engineer.engineerEmail}" class="card-link">Contact: ${Engineer.engineerEmail}</a>
            <a href="https://github.com/${Engineer.engineerGH}" class="card-link">Check Out My Work on GitHub!</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${Intern.intern}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${Intern.internID}</h6>
            <p class="card-text">Established Fact: The world's best interns graduate from the U of Minnesota's Coding Bootcamp and are taught by Nate Perfetti!</p>
            <a href="mailto:${Intern.internEmail}" class="card-link">Contact: ${Intern.internEmail}</a>
            <a class="#" class="white"><br>alma mater ${Intern.school}</a>
            </div>
        </div>
    </section>
</body>
</html>       
        `;
    }};




module.exports = makeTeam