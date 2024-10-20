//получаем необходимые элементы DOM
const input = document.getElementById("input");
const button = document.getElementById("button");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

//Делаем проверку на заполненность input
function updateTaskList() {
  if (taskList.children.length === 0) {
    const noMessage = document.createElement("li");
    noMessage.textContent = "Задачи отсутствуют:(";
    noMessage.classList.add("noMessage");
    taskList.appendChild(noMessage);
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
    const noMessage = taskList.querySelector(".noMessage");
    if (noMessage) {
      taskList.removeChild(noMessage);
    }
  }
}

//Добавляем задачи
button.addEventListener("click", () => {
  const taskText = input.value;
  if (taskText) {
    const taskItem = document.createElement("li");

    //Создаем чекбокс
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("custom-checkbox");
    taskItem.appendChild(checkbox);

    //Создаем текст задачи
    const text = document.createTextNode(taskText);
    taskItem.appendChild(text);
    taskList.appendChild(taskItem);

    //Очищаем инпут
    input.value = "";
    updateTaskList();
  }
});

//Очищаем задачи
clearButton.addEventListener("click", () => {
  taskList.innerHTML = "";
  updateTaskList();
});

updateTaskList();

// Функция для сохранения задач в localStorage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach(function (item) {
    tasks.push(item.textContent.trim());
  });
  localStorage.setItem("tasks", JSON.stringify(text));
}

/*-В приложении должен быть input для ввода текста задачи и 
кнопка для её добавления в «Список задач»

-Ниже должен быть «Список задач» и кнопка «Очистить список»

-Когда задач нет, должно быть серое уведомление о том, что 
задачи отсутствуют, а кнопка «Очистить список» должна быть неактивна

-При добавлении задачи в список, каждая из них должна появляться в 
списке задач и напротив иметь неактивный чекбокс, а кнопка 
«Очистить список» должна быть активна

-Каждый чекбокс напротив задачи должен менять своё состояние при клике 
(говоря нам, что задача выполнена)

-При клике на кнопку «Очистить список» все задачи должны удаляться

Важно: Для сохранения состояния списка задач между сеансами работы 
с приложением используйте Local Storage. Это позволит восстановить 
список задач при повторном открытии приложения.*/
