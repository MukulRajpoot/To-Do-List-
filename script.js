let main = document.querySelector(".box")
let input = document.querySelector("#inputbox");


let storedata = () => {
    let notes = main.querySelectorAll(".content");
    let data = [];
    for (let note of notes) {
        data.push(note.innerText)
    }
    localStorage.setItem("notes", JSON.stringify(data))

}


let addlist = (text = "") => {
    let content = document.createElement("div");
    content.innerHTML = ` <span class="content">${text}<i class="fa-solid fa-delete-left cross" style="color: #e88d67;"> </i></span>`
    main.append(content);

    main.addEventListener("click", (even) => {
        let cross = content.querySelector(".cross")
        let position = even.target;
        if (position == cross) {
            content.remove()
            storedata();
        }

    })
}

let getdata = () => {
    let sets = JSON.parse(localStorage.getItem("notes"))
    for (let set of sets) {
        addlist(set);
    }
}
input.addEventListener("keypress", (event) => {
    if (event.key == "Enter" && input.value !== "") {
        addlist(input.value)
        input.value = "";
        storedata();
       

    }
})
getdata();






