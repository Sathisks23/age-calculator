


function getval_date(){

    var  date = document.getElementById("date_input").value;

if(date<=0 || date>31){
    document.getElementById('date_label').style.color='red'
    document.getElementById("date_small").innerHTML='Please enter the valid date'
}else{
    document.getElementById("date_small").innerHTML=''
    document.getElementById('date_label').style.color=''
}

}

function getval_month(){
    
    var  month = document.getElementById("month_input").value;

    if(month<=0 || month>13){
        document.getElementById('month_label').style.color='red'
        document.getElementById("month_small").innerHTML='Please enter the valid month'
    }else{
        document.getElementById("month_small").innerHTML=''
        document.getElementById('month_label').style.color=''
    }
    
    }

    function getval_year(){

        var  year = document.getElementById("year_input").value;
        
        if(year<=0 || year>2023){
            document.getElementById('year_label').style.color='red'
            document.getElementById("year_small").innerHTML='Please enter the valid month'
        }else{
            document.getElementById("year_small").innerHTML=''
            document.getElementById('year_label').style.color=''
        }
        
        }
    
function output(){

    var  date = document.getElementById("date_input").value;
    var  month = document.getElementById("month_input").value;
    var  year = document.getElementById("year_input").value;
   
    
    let d = new Date()
    let now_date =d.getDate()
    let now_month = d.getMonth()
    let now_year = d.getFullYear()

    
    var birth_date = now_date-date
    let birth_month = now_month-month
     let birth_year = now_year-year

    if (now_month<month){
     
        now_month=now_month+12
        now_year =now_year-1
        birth_year = now_year-year
        birth_month = now_month-month
    }

    if(now_date<date){
        now_date=now_date+31
        birth_date = now_date-date
    }


    

    document.getElementById('date_output').innerHTML = birth_date
    document.getElementById('month_output').innerHTML = birth_month
    document.getElementById('year_output').innerHTML = birth_year
}
