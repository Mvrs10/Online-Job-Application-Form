//Citizenship valdiation
function WorkPermitNo()
{
    let workPermission = document.querySelector('input[name="workpermit"]');
    workPermission.required = true;
}
function WorkPermitYes()
{
    let workPermission = document.querySelector('input[name="workpermit"]');
    workPermission.required = false;
}
//Employer valdiation
function EmploymentTimeYes()
{
    let employment = document.querySelector('input[name="employerworkdate"]');
    employment.required = true;
}
function EmploymentTimeNo()
{
    let employment = document.querySelector('input[name="employerworkdate"]');
    employment.required = false;
}
//Felony valdiation
function FelonyExplainYes()
{
    let felony = document.querySelector('input[name="explanation"]');
    felony.required = true;
}
function FelonyExplainNo()
{
    let felony = document.querySelector('input[name="explanation"]');
    felony.required = false;
}
// Email and phone number validation
function validation()
{
    // Email must be in proper format
    let useremail = document.querySelector('input[type="email"]').value;
    let validEmailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!useremail.match(validEmailRegex))
    {
        alert ("Invalid email");
        return;
    }
    // Phone number must be in proper format
    let userphonenumber = document.querySelector('input[type="tel"]').value;
    var validPhoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    if (!userphonenumber.match(validPhoneRegex))
    {
        alert ("Invalid Phone Number");
        return;
    }
}