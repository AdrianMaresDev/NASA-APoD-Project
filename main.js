document.querySelector('button').addEventListener('click', fetchData);

function fetchData () {

    const date = document.querySelector('input').value;
    
    //Input your own NASA API key for the project to work
    const apiKey = 'YOUR_API_KEY_HERE';

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    fetch (url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.media_type === 'image') {
                document.querySelector('img').src = data.hdurl;
                document.querySelector('img').style.display = 'block';
                document.querySelector('iframe').style.display = 'none';
            } else if (data.media_type === 'video') {
                document.querySelector('iframe').src = data.url;
                document.querySelector('img').style.display = 'none';
                document.querySelector('iframe').style.display = 'block';
            }

            document.querySelector('p').innerText = data.explanation;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}