let json = `
    [{
    "video": [{
        "url": "https://img.youtube.com/vi/o5fXU0kScuo/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=o5fXU0kScuo",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/-sgy8Z_Mkrc/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=-sgy8Z_Mkrc",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/V23ZLUeyETQ/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=V23ZLUeyETQ",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/Um5rwAhPoqc/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=Um5rwAhPoqc",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/32dpifIRDA8/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=32dpifIRDA8",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/hzS7e0cbREw/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=hzS7e0cbREw",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/QTkewqA8EVM/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=QTkewqA8EVM",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/CLsRITOTLd4/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=CLsRITOTLd4",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/UGGH8ztqqOk/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=UGGH8ztqqOk",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/od0M4ZtAoJQ/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=od0M4ZtAoJQ",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/bEOWPQnqC30/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=bEOWPQnqC30",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/4Rvhk73yJXQ/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=4Rvhk73yJXQ",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/DPRSz0IQics/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=DPRSz0IQics",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/aaDxECyGXxo/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=aaDxECyGXxo",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/tp8tBat-xTM/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=tp8tBat-xTM",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/sgdmaO97Hvc/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=sgdmaO97Hvc",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/o-qX6udlh4Q/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=o-qX6udlh4Q",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/4oatZVrpK4E/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=4oatZVrpK4E",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    },{
        "url": "https://img.youtube.com/vi/FUtfQ1dhhdc/hqdefault.jpg",
        "href":"https://www.youtube.com/watch?v=FUtfQ1dhhdc",
        "src":"https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png"
    }]
}]
`;

let video = JSON.parse(json);   // converte para o formato JSON

function renderVideos() {
    
    document.querySelector('.owl-carousel').innerHTML = ''; //limpa a lista para não repetir quando add nova tarefa
    
    video[0].video.forEach(task => {

        let li = document.createElement('div');
        li.className = "item";

        li.innerHTML = `
            
            <div class="card col-md-6 youtube_card bg-youtube" style="background-image: url(${task.url});">
                <a href="${task.href}" target="_blank" class="hide_card"><img src="${task.src}" alt=""></a>
            </div>

            `;

        document.querySelector('.owl-carousel').append(li);

    });

}

renderVideos();