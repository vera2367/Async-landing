const API = 'https://youtube-v3-alternative.p.rapidapi.com/video?id=%https://youtube-v31.p.rapidapi.com/search?channelId=%40NintendoES&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c67ca99bc9msh703ee0cb5a9ff63p107e04jsn34500b775473',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}

(async() =>{
try{
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(viedo => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
    </div>
    `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
    }catch (error) {
        console.log(error);
    }
})();