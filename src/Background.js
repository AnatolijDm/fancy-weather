const input = document.querySelector('.wrapper');

export default async function imageBuild() {
    const webUrl = await getLinkToImage(); 
    input.style.backgroundImage =  `url(` + `${webUrl}` + `)`;
}

function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=d837c1d59b1ea1790d6e8be28c64938d668469f46d7b6e00a8936f1cf9e6ad54';
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        return data.urls.full;
    });
}