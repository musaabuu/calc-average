



const btn = document.getElementById("btn");

// document.getElementById("mark").addEventListener("input", function () {
//     this.value = this.value.replace(/[^0-9]/g, "");
// });

document.querySelectorAll(".mark").forEach((markInput)=> {
    markInput.addEventListener("input", () => {
        markInput.value = markInput.value.replace(/[^0-9 .]/g, "");
    })
})

const input = document.getElementById("mark");

btn.addEventListener('click', () => {
    document.querySelectorAll(".mark").forEach((markInput)=> {
    if (markInput.value)
        console.log(markInput.value);
})
});
