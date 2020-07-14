let user_score = 0;
let computer_score = 0;

const user_score_span = document.getElementById("user-score");
const computer_score_span = document.getElementById("comp-score");
const choice_r = document.getElementById("r");
const choice_p = document.getElementById("p");
const choice_s = document.getElementById("s");
const result_div = document.getElementById("result");

const random = () => {
  const variants = ["r", "p", "s"];
  return variants[Math.floor(Math.random() * 3)];
};

const removeClass = (user, color) => {
  setTimeout(() => {
    document.getElementById(user).classList.remove(color);
  }, 400);
};

showVariant = (letter) => {
  if (letter === "p") {
    return "paper";
  } else if (letter === "s") {
    return "sissors";
  } else {
    return "rock";
  }
};

const win = (user, comp) => {
  user_score++;
  user_score_span.innerHTML = user_score;
  document.getElementById(user).classList.add("green");
  result_div.innerHTML = `<span class="badge result-win">${showVariant(
    user
  )}</span> beats <span class="badge result-lose">${showVariant(comp)}</span>`;
  removeClass(user, "green");
};

const lose = (user, comp) => {
  computer_score++;
  computer_score_span.innerHTML = computer_score;
  document.getElementById(user).classList.add("red");
  result_div.innerHTML = `<span class="badge result-lose">${showVariant(
    user
  )}</span> loses to <span class="badge result-win">${showVariant(
    comp
  )}</span>!`;
  removeClass(user, "red");
};

const draw = (user, comp) => {
  document.getElementById(user).classList.add("gray");
  result_div.innerHTML = `<span class="badge result-draw">${showVariant(
    user
  )}</span> is equal to <span class="badge result-draw">${showVariant(
    comp
  )}</span>`;
  removeClass(user, "gray");
};

const game = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    default:
      console.log("Some Error equre!");
  }
};

choice_r.addEventListener("click", () => {
  game("r", random());
});
choice_p.addEventListener("click", () => {
  game("p", random());
});
choice_s.addEventListener("click", () => {
  game("s", random());
});
