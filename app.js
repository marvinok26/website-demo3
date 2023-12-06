const link = encodeURI(window.location.href);
const msg = encodeURIComponent('Press The Links to visit my Socials');
const title = encodeURIComponent(document.querySelector('title').textContent);

console.log([link, msg, title]);

const fb = document.querySelector('.facebook');
fb.href = `https://web.facebook.com/marvinok26/`;

const twitter = document.querySelector('.twitter');
twitter.href = 'https://x.com/marvo_codes?t=zePQWGZdwVVIaWi7e_Tzkw&s=09';

const linkedin = document.querySelector('.linkedin');
linkedin.href = 'https://www.linkedin.com/in/marvin-okongo-96b924233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';

const instagram = document.querySelector('.instagram');
instagram.href = 'https://instagram.com/26seint?utm_source=qr&igshid=YzU1NGVlODEzOA==';