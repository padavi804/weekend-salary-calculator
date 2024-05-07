console.log('hello world');

let salaryTotal = [];


function submitForm(event) {
    console.log('submitForm');

    event.preventDefault();


    // input variables from form to table
    let firstVal = document.querySelector('#firstName').value;
    console.log(firstVal)
    let lastVal = document.querySelector('#lastName').value;
    let idVal = document.querySelector('#idNumber').value;
    let jobVal = document.querySelector('#jobTitle').value;
    let salaryVal = document.querySelector('#salary').value;

    // Append values to table
    let employeeData = document.querySelector('#employeeInfo');
    employeeData.innerHTML += `
    <tr>
        <td>${firstVal}</td>
        <td>${lastVal}</td>
        <td>${idVal}</td>
        <td>${jobVal}</td>
        <td>$${salaryVal}</td>
        <td><button onClick="removeEmployee(event)">Remove</button> </td>
    </tr>
    `;

    // Reset form fields after submission
    document.getElementById('newEmployee').reset();

    // Find monthly salary
    salaryTotal.push(salaryVal);
    function annualSalary(salaryTotal) {
        let annualSalary = 0
        for (let i = 0; i < salaryTotal.length; i++)
            annualSalary += Number(salaryTotal[i]);
        return annualSalary
    }
    console.log('Sum of salaries is $', annualSalary(salaryTotal));
    let monthlySalary = annualSalary(salaryTotal) / 12;
    console.log('Monthly salary is $', monthlySalary);



    // Display monthly total on HTML
    let monthlyDisplay = document.getElementById('monthlyTotal');
    monthlyDisplay.innerHTML = `
    <h4>$${monthlySalary.toFixed(2)}</h4>
    `;

// Overbudget warning.
    overBugdet(monthlySalary);
    function overBugdet(monthlySalary) {
        if (Number(monthlySalary) > 20000) {
            document.getElementById('footerSal').style.backgroundColor = "red";
            monthlyDisplay.innerHTML = `
        <h4>$${monthlySalary.toFixed(2)} OVERBUDGET</h4>
        `;
        }
    }

}



function removeEmployee(event) {
    event.target.parentElement.parentElement.remove();
}
