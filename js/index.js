//seleziono il mio elemento "form", resetto il button
const formElements = document.getElementsByClassName("Form-Tasks")[0];
formElements.addEventListener("submit", function (e) {
  e.preventDefault();
  const nuovoTaskInputField = document.getElementById("Add-task");
  const nuovaNota = nuovoTaskInputField.value;

  //creo un div contenente il nuovo task e gli assegno una nuova classe
  const newTaskyo = document.createElement("div");
  newTaskyo.classList.add("new-divs");
  //grazie a .innerHTML posso scrivere i tag contenuti dentro al nuovo div
  newTaskyo.innerHTML = `
  <p class="nota-nuova">${nuovaNota}</p>
  `;
  const sectionForTasks = document.getElementById("new-tasks");
  sectionForTasks.appendChild(newTaskyo);

  //creo bottone remove
  const newButton = document.createElement("div");
  newButton.classList.add("nuovo-bottone");
  newButton.innerHTML = `
  <button onclick="deleteTask(event)" class="deleteNow">remove</button>
  <button onclick="TaskDone(event)" class="done">done</button>
  <button onclick="TaskUnDone(event)" class="Undone">undone</button>`;
  newTaskyo.appendChild(newButton);
  nuovoTaskInputField.value = " ";
});

const deleteTask = function (e) {
  const clickedButton = e.target;
  clickedButton.parentElement.parentElement.remove();
};

const TaskDone = function (e) {
  const clickedButton = e.target;
  clickedButton.parentElement.parentElement.classList.add("cancellato");
};

const TaskUnDone = function (e) {
  const clickedButton = e.target;
  clickedButton.parentElement.parentElement.classList.remove("cancellato");
};
