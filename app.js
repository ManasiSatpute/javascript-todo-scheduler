document.addEventListener("DOMContentLoaded", function () {
    let add = document.querySelector("#addBtn");
    let list = document.querySelector("ul");
    let input = document.querySelector("#task");
    let timeInput = document.querySelector("#day");
    const icon = document.querySelector("#calendar-icon");

    icon.addEventListener("click", () => {
        timeInput.showPicker();
    });

    add.addEventListener("click", function () {
        if (input.value === "" || timeInput.value === "") {
            alert("Please enter task and time");
            return;
        }

        let item = document.createElement("li");

        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("complete");

       
        let textGroup = document.createElement("div");
        textGroup.classList.add("task-text-group");

        let textSpan = document.createElement("span");
        textSpan.innerText = input.value;

        let timeSpan = document.createElement("small");
        timeSpan.innerText = new Date(timeInput.value).toLocaleString();
        
        textGroup.appendChild(textSpan);
        textGroup.appendChild(timeSpan);

        // Delete button
        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete";
        deletebtn.classList.add("delete");

        // Append elements 
        item.appendChild(checkbox);
        item.appendChild(textGroup);
        item.appendChild(deletebtn);

        list.appendChild(item);

        input.value = "";
        timeInput.value = "";
    });

    // Event delegation 
    list.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            event.target.parentElement.remove();
        }
        if (event.target.classList.contains("complete")) {
            event.target.parentElement.classList.toggle("completed");
        }
    });

    let clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", function () {
        list.innerHTML = "";
    });
});
