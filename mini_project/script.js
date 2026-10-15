const calculateBtn = document.getElementById("calculatebtn");
//add event listener to the button
calculateBtn.addEventListener("click", function() {
//get the values from the input fields
    const STUDENTNAME= document.getElementById("student name").value;
    const STUDENTID = document.getElementById("student id").value;

    const MATHS = document.getElementById("maths").value;
    const SCIENCE = document.getElementById("science").value;
    const ENGLISH = document.getElementById("english").value;
    const COMPUTER = document.getElementById("computer").value;

    const total = Number(MATHS) + Number(SCIENCE) + Number(ENGLISH) + Number(COMPUTER);

    const percentage = (total / 400) * 100;

    const result = document.getElementById("result");

    result.innerHTML = `
        Student Name: ${STUDENTNAME}<br>
        Student ID: ${STUDENTID}<br>
        Total Marks: ${total}<br>
        Percentage: ${percentage}%
    `;
});