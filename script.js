let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
let result = document.getElementById('result');

function ageCalculator() {
    let birthDate = new Date(userInput.value);

    let MyDay = birthDate.getDate();
    let MyMonth = birthDate.getMonth() + 1;
    let MyYear = birthDate.getFullYear();

    let today = new Date();

    let Curr_Date = today.getDate();
    let Curr_Month = today.getMonth() + 1;
    let Curr_Year = today.getFullYear();

    let day_Diff, month_Diff, Year_Diff;

    Year_Diff = Curr_Year - MyYear; 

    if(Curr_Month >= MyMonth){
        month_Diff = Curr_Month - MyMonth;
    } else{
        Year_Diff--;
        month_Diff = 12 + Curr_Month - MyMonth;
    }

    if(Curr_Date >= MyDay){
        day_Diff = Curr_Date - MyDay;
    }else {
        month_Diff--;
        day_Diff = getDaysInMonth(MyYear, MyMonth) + Curr_Date - MyDay;
    }
    if(month_Diff < 0) {
        month_Diff = 11;
        Year_Diff--;
    }

    result.innerHTML = `You are ${Year_Diff} years, ${month_Diff} months and ${day_Diff} days old.`;
    function getDaysInMonth(year, month) {
        return new Date (year, month, 0).getDate();
    }   
}








