const button = document.getElementById('colorButton');
        const background = document.body;

        button.addEventListener('click', function() {

            if (button.className === 'black') {
                button.className = 'white';
                background.className='black';
            } else {
                button.className = 'black';
                background.className='white';
            }
        });

const images = document.getElementsByTagName('img');


for (let img of images) {
    img.onclick = () => {
        for (let i of images) {
            i.classList.remove('enlarged');
        }
        img.classList.add('enlarged');
    };
}