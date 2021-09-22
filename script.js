/**
 * 
   scroll to top button
 */
const toTop = document.getElementById('to-top')
toTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});


/**
 * Adding border on nav links depending on what section we're on.   
*/
const home = document.getElementById('home');
const projects = document.getElementById('projects');
const skills = document.getElementById('skills');
const interests = document.getElementById('interests');
const resume = document.getElementById('resume')

const test = [
    home, projects, skills, interests, resume
];

const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById(`a_${entry.target.id}`).classList.add("active");
        } else {
            document.getElementById(`a_${entry.target.id}`).classList.remove("active");
        }
    })
}, { threshold: 0.6 });

test.forEach(i => {
    sectionObserver.observe(i);
});