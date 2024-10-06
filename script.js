
    //  JS Question # 5
    
function calculateMarksheet() {
    // Get input values
    var name = document.getElementById('studentName').value;
    var subject1 = parseInt(document.getElementById('subject1').value);
    var subject2 = parseInt(document.getElementById('subject2').value);
    var subject3 = parseInt(document.getElementById('subject3').value);

    // Calculate total and percentage
    var totalMarks = subject1 + subject2 + subject3;
    var percentage = (totalMarks / 300) * 100;

    // if the user did`nt fill the field

    if (name === "" || subject1 === "" || subject2 === "" || subject3 === "") {
        alert("Field fill is Mandatory otherwise the result will not be shown!");
    }
    else {
        // Display the result
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<h1>Result;</h1>
                           <p>Student Name: ${name}</p>
                           <p>Total Marks: ${totalMarks}/300</p>
                           <p>Percentage: ${percentage.toFixed(2)}%</p>`;
    }

}
