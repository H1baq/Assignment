// Function for calculating net salary from basic salary and benefit
function calculateNetSalary(basicSalary, benefits) {
  
    //tax deductions
    const taxRate = 0.2
    const nhifRate = 0.1
    const nssfRate = 0.2
  
    //GrossSalary calculation by basic salary and benefits addition
    const grossSalary = basicSalary + benefits;

    const tax = grossSalary * taxRate; //tax deduction calculation from grossalary
    const nhif = grossSalary * nhifRate;//NHIF tax calculation from grossSalry
    const nssf = grossSalary * nssfRate;//NSSF tax decduction calculation from grosssalary
  

    //Net salary calculation
    const netSalary = grossSalary - (tax + nhif + nssf);
  
    return {
      grossSalary,
      tax,
      nhif,
      nssf,
      netSalary
    };
  }

  const basicSalary = 59000; 
  const benefits =4500; 
  const result = calculateNetSalary(basicSalary, benefits);
  console.log("Net Salary Calculation Results:");
  console.log("Gross Salary:", result.grossSalary);
  console.log("Tax:", result.tax);
  console.log("NHIF Deductions:", result.nhif);
  console.log("NSSF Deductions:", result.nssf);
  console.log("Net Salary:", result.netSalary);
  
  
    