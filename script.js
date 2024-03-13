let userscore = 0;
let comscore = 0;
let msg = document.getElementById("msg");
let user = document.getElementById("user-score");
let comp = document.getElementById("com-score");
let c = document.getElementById("com");
const gencomp = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};
const playgame = (userchoise) => {
    const compchoise = gencomp();

    if (userchoise === compchoise) {
        msg.innerText = "Game Draw";
        c.innerText = `${compchoise}`;
    } else if ((userchoise === "rock" && compchoise === "scissors") || (userchoise === "paper" && compchoise === "rock") || (userchoise === "scissros" && compchoise === "paper")) {
        msg.innerText = "You Win !";
        c.innerText = `${compchoise}`;
        userscore++;
        user.innerText = `${userscore}`;

    } else {
        msg.innerText = "Computor Win !";
        comscore++;
        c.innerText = `${compchoise}`;
        comp.innerText = `${comscore}`;
    }
}
let choices = document.querySelectorAll(".choice");
choices.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userchoise = choise.getAttribute("id");
        playgame(userchoise);
    });
});