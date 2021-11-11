const questionFactory = (question, answer, advising, financialAid, registration, graduation, research, application, acceptance, other, internship) => {
    return {
        question: question,
        answer: answer,
        attributes: {
            "advising": advising,
            "financialAid": financialAid,
            "registration": registration,
            "graduation": graduation,
            "research": research,
            "application": application,
            "acceptance": acceptance,
            "other": other,
            "internship": internship
        },
        output: 
    }

}

const advisorAppointments = questionFactory("How do I make an appointment with my Advisor?", "The Computer Science Department Advising Office is a students primary source for information and assistance regarding: academic advising, registration, admission to the Computer Science Department, scholarships, general education and transfer credits. \n Office hours are Monday-Friday, 9:00 a.m. to 4:00 p.m. \n For an appointment (if you are a Student with an A#) press the 'Schedule an Appointment' button on the lefthand side. Otherwise call 435-797-0527, or e-mail cs.advising@usu.edu", true, false, false, false, false, true, true, true, false)



function generateHTML (question) {
    
}