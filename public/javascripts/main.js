console.log('vse ok');

const createUserForm = document.querySelector('.createUserForm');
const authForm = document.querySelector('.authForm');
const authBlock = document.querySelector('.auth');

createUserForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const {data} = await axios.post('/createUser', formData);
    c
});

authForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const {data} = await axios.post('/loginUser', formData);
    const {status, token} = data; 

    if(status === 'logged in') {
        localStorage.setItem('token', token);
        chekToken();
    }
});

const chekToken = async () => {
    token = localStorage.getItem('token');
    console.log('token: ', token);
    if (!token) return;

    authBlock.innerHTML = 'Залогинено, юхуху'
}

chekToken();