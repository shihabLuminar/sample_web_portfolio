let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'BlockChain Developer', 'Web Designer', 'Freelancer'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1200,
    loop: true
});

document.querySelector("#download-cv").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets/resume.docx.pdf"; // Path to your CV file
    link.download = "My_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
