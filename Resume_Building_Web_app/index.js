function SingUp() {
    //--> Store The Credencials :-
    var FName = document.getElementById('Sign_Up_FName').value;
    var LName = document.getElementById('Sign_Up_FName').value;
    var UserEmail = document.getElementById('Sign_Up_Email').value;
    var UserPassword = document.getElementById('Sign_Up_pass').value;
    var ReconformPass = document.getElementById('Sign_Up_RePass').value;

    //--> Save all the Data Into The local Storage :-
    localStorage.setItem('FirstName', FName)//--> key and value paire :-//--->Json Format :-
    localStorage.setItem('LastName', LName)
    localStorage.setItem('Email', UserEmail)
    localStorage.setItem('Password', UserPassword)

    //--> Match The Passwords :-
    if (UserPassword == ReconformPass) {

        window.open("logIn.html")
    } else {

        window.alert('The Password And Re-Enter password Is Not Matching ')
    }
};




//--> Loging page:-
function LogIN() {


    //--> Store Veribels :-
    var User_Name = document.getElementById('Login_Email').value;
    var User_Password = document.getElementById('Login_Pass').value;

    //--> Featching The values from Local-Stroage :-
    var LSUserName = localStorage.getItem('Email');
    var LSUserPasword = localStorage.getItem('Password');


    //--> cheak values with The Stored Values :-
    if (User_Name == LSUserName && User_Password == LSUserPasword) {

        window.open('Resume.html');

    } else {

        var Credencials = window.alert('Incorrect Credencials');// --> Alet ---> ok --> ok---True--> of else False :-
    }

    if (Credencials) {
        //--> Recursive call:-
        return LogIN();
    } else {
        //--> Base Condition:-
        return;
    }
};








