const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function courseCards(filter = "All") {
    const cardContainer = document.querySelector(".card-layout");
    cardContainer.innerHTML = "";

    const filteredCourses = courses.filter(course =>
        filter === "All" || course.subject === filter
    );

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("total-credits").textContent = `Total Credits: ${totalCredits}`;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        const title = document.createElement("h3");
        const moreInfo = document.createElement("button");

        if (course.completed) {
            courseCard.classList.add("completed", "card");
            title.textContent = `${course.subject} ${course.number} ✔`;
        }
        else {
            courseCard.classList.add("not-completed", "card");
            title.textContent = `${course.subject} ${course.number}`;
        }

        moreInfo.textContent = "More Info";
        moreInfo.setAttribute("class", `openButton`);

        courseCard.appendChild(title);
        courseCard.appendChild(moreInfo);
        cardContainer.appendChild(courseCard);

        moreInfo.addEventListener('click', () => {
            displayCourseDetails(course);
        });
    });
}

function filters() {
    const buttons = document.querySelectorAll(".filters button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.textContent.trim();
            courseCards(filter);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    courseCards();
    filters();
});

// modal dialog
const dialogBox = document.querySelector("#dialogBox");

function displayCourseDetails(course) {
    dialogBox.innerHTML = '';
    dialogBox.innerHTML = `
        <button id="closeButton">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    dialogBox.showModal();
    
    closeButton.addEventListener("click", () => {
        dialogBox.close();
    });
}