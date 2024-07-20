const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');
const form = document.querySelector('#add-post-form')


async function showPosts(){
    try {
        const res = await fetch('http://localhost:9000/api/posts');
        if(!res.ok){
            throw new Error('Posts Fetching Error')
        }
        const posts  = await res.json();
        // output.innerHTML = 'If you want to get post here click on above button please';

        posts.forEach((post) => {
            const postEl = document.createElement('div');
            postEl.textContent = post.title;
            output.appendChild(postEl);
        })

    } catch (error) {
        console.log('APi Error Fetching', error)
    }
}

async function addPosts(e){
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title')
    try {
        const res = await fetch('http://localhost:9000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})
        })
    
        if(!res.ok){
            throw new Error('Post not Added')
        }
    
        const newPost = await res.json()
        const postEl = document.createElement('div');
        postEl.textContent = newPost.title;
        output.appendChild(postEl);
        showPosts();
    } catch (error) {
        console.log('Post added failed', error)
    }
}

button.addEventListener('click', showPosts);
form.addEventListener('submit', addPosts);