


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
    let semAverage = 0;
    document.querySelector(".semesterAverage").innerHTML = null;

    document.querySelectorAll(".modules").forEach((module)=> {
        module.querySelector(".moduleAverage").innerHTML = null;
    });

    document.querySelectorAll(".modules").forEach((module)=> {
        if (module.id == "main") {
            semAverage += calcModuleAverage(module, 3);
        } else if (module.id == "secondary") {
            semAverage += calcModuleAverage(module, 2)
        } else {
            semAverage += calcModuleAverage(module, 1);
        }
            
    });

    // console.log(`Semester average ${(semAverage / 18).toFixed(2)}`);
    document.querySelector(".semesterAverage").innerHTML = (semAverage / 18).toFixed(2);
});


function calcModuleAverage(module, coeff) {
    if (module.querySelector("[name='TD']") && module.querySelector("[name='TP']")) {
        let mAverage = Number(module.querySelector('[name="C"]').value) * 0.6 + (Number(module.querySelector('[name="TD"]').value) + Number(module.querySelector('[name="TP"]').value)) * 0.2;
        module.querySelector(".moduleAverage").innerHTML += mAverage.toFixed(2);
        return mAverage * coeff;
    } else if (module.querySelector("[name='TD']") && !module.querySelector("[name='TP']")) {

        let mAverage = Number(module.querySelector('[name="C"]').value) * 0.6 + Number(module.querySelector('[name="TD"]').value) * 0.4;
        module.querySelector(".moduleAverage").innerHTML += mAverage.toFixed(2);
        return mAverage * coeff;

    } else if (module.querySelector("[name='TP']") && !module.querySelector("[name='TD']")) {
        let mAverage = Number(module.querySelector('[name="C"]').value) * 0.6 + Number(module.querySelector('[name="TP"]').value) * 0.4;
        module.querySelector(".moduleAverage").innerHTML += mAverage.toFixed(2);
        return mAverage * coeff;
    } else {
        let mAverage = Number(module.querySelector('[name="C"]').value)
        module.querySelector(".moduleAverage").innerHTML = mAverage.toFixed(2);        
        return mAverage * coeff;
    }
}
