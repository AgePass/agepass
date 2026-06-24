const sections = document.querySelectorAll('.slide');

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{
opacity:0,
transform:'translateY(80px)'
},
{
opacity:1,
transform:'translateY(0)'
}
],

{
duration:700,
fill:'forwards'
}

);

}

});

},

{
threshold:0.15
}

);

sections.forEach(
section => observer.observe(section)
);

// Pilot form: show success state after FormSubmit redirects back with #merci
const pilotForm = document.getElementById('pilot-form');
const formSuccess = document.getElementById('form-success');

if (location.hash === '#merci' && pilotForm && formSuccess) {
  pilotForm.style.display = 'none';
  formSuccess.classList.add('show');
  document.getElementById('pilote-form').scrollIntoView();
}
