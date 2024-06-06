function searchCourses() {
    var input, filter, courseList, courses, course, i, txtValue, foundCourse;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    courseList = document.getElementById('courseList');
    courses = courseList.getElementsByClassName('course');

    foundCourse = false;

    for (i = 0; i < courses.length; i++) {
        course = courses[i].getElementsByTagName("h3")[0];
        txtValue = course.textContent || course.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            courses[i].classList.add('highlight');
            if (!foundCourse) {
                courses[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                foundCourse = true;
            }
        } else {
            courses[i].classList.remove('highlight');
        }
    }
}

function redirectToExternalLink(courseName) {
    var courseLinks = {
        "Introduction to Python": "https://www.coursera.org/learn/python",
        "HTML & CSS for Beginners": "https://www.udemy.com/course/html-and-css-for-beginners-crash-course/",
        "JavaScript Essentials": "https://www.edx.org/course/javascript-essentials"
    };

    var url = courseLinks[courseName];
    if (url) {
        window.open(url, '_blank');
    } else {
        alert('Course link not found.');
    }
}

function downloadPDF(courseName) {
    var pdfLinks = {
        "Introduction to Python": 'https://www.example.com/python.pdf',
        "HTML & CSS for Beginners": 'https://www.example.com/html_css.pdf',
        "JavaScript Essentials": 'https://www.example.com/javascript.pdf'
    };

    var link = document.createElement('a');
    link.href = pdfLinks[courseName] || 'https://www.example.com/sample.pdf';
    link.download = courseName.replace(/ /g, '_') + '_Details.pdf';
    link.click();
}
window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var scrollTopBtn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Light/Dark Mode Toggle
const modeToggleBtn = document.getElementById('modeToggleBtn');
const body = document.body;

modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Light Mode';
    } else {
        modeToggleBtn.textContent = 'Dark Mode';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');

    // Function to search courses
    function searchCourses() {
        var filter = searchInput.value.toUpperCase();
        var courseList = document.getElementById('courseList');
        var courses = courseList.getElementsByClassName('course');
        var foundCourse = false;

        for (var i = 0; i < courses.length; i++) {
            var course = courses[i].getElementsByTagName("h3")[0];
            var txtValue = course.textContent || course.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                courses[i].classList.add('highlight');
                if (!foundCourse) {
                    courses[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    foundCourse = true;
                }
            } else {
                courses[i].classList.remove('highlight');
            }
        }
    }

    // Trigger search when Enter key is pressed
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchCourses();
        }
    });
});

    