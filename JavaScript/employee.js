var employee =[
    {
        name:"sohel",
        designation:"full stack developer",
        salary:"100000",
        performance:10
    }]
    function salaryIncrementOfEmployee(employee){
        for(var E of employee){
        var currentSalary = E.performance/2;
        var IncrementSalary=E.salary * currentSalary/100;
        console.log(E.name + " has incressed by " + currentSalary+" % into his salary " +IncrementSalary);
        

    }

    }
    salaryIncrementOfEmployee(employee)
    
