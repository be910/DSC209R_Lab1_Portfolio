console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

document.body.insertAdjacentHTML(
  'afterbegin',
  `
	<label class="color-scheme">
		Theme:
		<select>
			<option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
		</select>
	</label>`,
);


// Select the dropdown element
const select = document.querySelector('.color-scheme select');

// Load saved preference when page loads
if (localStorage.colorScheme) {
  document.documentElement.style.colorScheme = localStorage.colorScheme;
  select.value = localStorage.colorScheme;
}

// Add event listener to save preference when changed
select.addEventListener('input', function (event) {
  console.log('color scheme changed to', event.target.value);
  localStorage.colorScheme = event.target.value;
  document.documentElement.style.colorScheme = event.target.value;
});


const BASE_PATH = 
  location.hostname === 'localhost' || location.hostname === '127.0.0.1'
  ? '/' 
  : '/Portfolio/';

let pages = [
  { url: '', title: 'Home' },
  { url: 'projects/', title: 'Projects' },
  { url: 'CV/', title: 'CV'},
  { url: 'contact/', title: 'Contact'},
  { url: 'https://github.com/be910', title: 'GitHub' }
];

let nav = document.createElement('nav');
document.body.prepend(nav);


for (let p of pages) {
    let url = p.url;
    let title = p.title;
  
    url = !url.startsWith('http') ? BASE_PATH + url : url;

    // nav.insertAdjacentHTML('beforeend', `<a href="${url}">${title}</a>`);
    let a = document.createElement('a');
    a.href = url;
    a.textContent = title;

    // if (a.host === location.host && a.pathname === location.pathname) {
    // a.classList.add('current');}

    a.classList.toggle('current', a.host === location.host && a.pathname === location.pathname);

    if (a.host !== location.host) {a.target = '_blank';}
  
    nav.append(a);

}




