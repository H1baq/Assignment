
    function studentGrades(totalMarks) {
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
console.log ("grades",studentGrades(88));
