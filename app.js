// Encode the current window's URL
const link = encodeURI(window.location.href);

// Encode a message to be included in the social media links
const msg = encodeURIComponent('Press The Links to visit my Socials');

// Encode the title of the current document
const title = encodeURIComponent(document.querySelector('title').textContent);

// Log the encoded link, message, and title to the console
console.log([link, msg, title]);

// Select the Facebook link and set its href attribute
const fb = document.querySelector('.facebook');
fb.href = `https://web.facebook.com/marvinok26/`;

// Select the Twitter link and set its href attribute
const twitter = document.querySelector('.twitter');
twitter.href = 'https://x.com/marvo_codes?t=zePQWGZdwVVIaWi7e_Tzkw&s=09';

// Select the LinkedIn link and set its href attribute
const linkedin = document.querySelector('.linkedin');
linkedin.href = 'https://www.linkedin.com/in/marvin-okongo-96b924233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';

// Select the Instagram link and set its href attribute
const instagram = document.querySelector('.instagram');
instagram.href = 'https://instagram.com/26seint?utm_source=qr&igshid=YzU1NGVlODEzOA==';