
    //initialize a function studentGrades from totalMarks
    function studentGrades(totalMarks) {
    //verify totalMarks ranges from 0-100
    if (totalMarks < 0 || totalMarks > 100 || isNaN(totalMarks)) {
        return "Invalid input. Please enter a number between 0 and 100.";
    }
    let Grades;
    switch (true) {
        case totalMarks > 79:
            Grades ="A";
            break;
        case totalMarks >= 60:
             Grades ="B";
             break;
        case totalMarks >= 50:
            Grades = "C";
            break;
        case totalMarks >= 40:
             Grades ="D";
             break;
        case totalMarks <40:
            Grades = "E";
            break;
    }
    return Grades
}
console.log ("grades",studentGrades(110));
