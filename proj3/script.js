const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.8"
    },

    {
        name: "Complete Angular course",
        price: "2.2"
    },
    
    {
        name: "Complete MEARN course",
        price: "2.6"
    },

    {
        name: "Complete Java course",
        price: "2.4"
    },

    {
        name: "Complete Django course",
        price: "8.2"
    },

];


function generateList() {
    const ul = document.querySelector(".list-group")
    ul.innerHTML = "";
    
    courses.forEach( course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}

// generateList();
window.addEventListener("load", generateList);


const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();
});