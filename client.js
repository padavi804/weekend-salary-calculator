console.log('hello world');

let totalMonthly = 0;

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
    employeeData.innerHTML +=`
    <tr>
        <td>${firstVal}</td>
        <td>${lastVal}</td>
        <td>${idVal}</td>
        <td>${jobVal}</td>
        <td>$${salaryVal}</td>
        <td><button onClick="removeEmployee(event)">Remove</button> </td>
    </tr>
    `;
}

function removeEmployee(event) {
    event.target.parentElement.parentElement.remove();
}