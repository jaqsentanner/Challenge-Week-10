class makeTeam {

    static buildTeam(team) {
        let Team = team;
        let Manager = team[0];
        let Engineer = team[1];
        let Intern = team[2];

        return `
        <h1>${Manager.manager1}</h1>
        <p>${Manager.managerID}</p>
        <p>${Manager.managerEmail}</p>
        <p>${Manager.officeNumber}</p>       
        `;
    }};


module.exports = makeTeam