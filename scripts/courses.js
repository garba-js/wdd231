const courses = [
  { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['Python'], completed: true },
  { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS'], completed: true },
  { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['Python'], completed: false },
  { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['C#'], completed: false },
  { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
  { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
];

const container = document.getElementById("course-container");
const creditDisplay = document.getElementById("total-credits");

function renderCourses(courseArray) {
  container.innerHTML = "";

  courseArray.forEach(course => {
    const card = document.createElement("div");
    card.className = `course-card ${course.completed ? 'completed' : 'not-completed'}`;
    card.innerHTML = `
      <p>${course.subject} ${course.number}</p>
    `;
    container.appendChild(card);
  });

  const totalCredits = courseArray.reduce((sum, course) => sum + course.credits, 0);
  creditDisplay.textContent = `Total Credits: ${totalCredits}`;
}

// Filter functions
document.getElementById("all-btn").addEventListener("click", () => renderCourses(courses));
document.getElementById("wdd-btn").addEventListener("click", () => renderCourses(courses.filter(c => c.subject === "WDD")));
document.getElementById("cse-btn").addEventListener("click", () => renderCourses(courses.filter(c => c.subject === "CSE")));

// Initial render
renderCourses(courses);
