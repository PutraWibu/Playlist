window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('welcomeModal').classList.add('show');
  }, 500); 
});

function closeModal() {
  document.getElementById('welcomeModal').classList.remove('show');
}

const playlist = [
  {
    title: "Dimana Hatimu - Papinka",
    artist: "By PutraMods",
    src: "https://files.catbox.moe/b3cf4r.mp3",
    cover: "https://files.catbox.moe/pgafn0.jpg"
  },
  {
    title: "Hal Terindah - Seventeen",
    artist: "PutraMods",
    src: "https://files.catbox.moe/bsczdz.mp3",
    cover: "https://files.catbox.moe/wgiznj.jpg"
  },
  {
    title: "Monolog - Pamungkas",
    artist: "PutraMods",
    src: "https://files.catbox.moe/nm1td2.mp3",
    cover: "https://files.catbox.moe/parsdw.jpg"
  },
  {
    title: "Resah Bali - Lavora",
    artist: "FirmanMods",
    src: "https://files.catbox.moe/ddsn8z.mp3",
    cover: "https://files.catbox.moe/6md7rl.jpeg"
  },
  {
    title: "Dumes - Guyon Waton",
    artist: "FirmanMods",
    src: "https://files.catbox.moe/fw9b59.mp3",
    cover: "https://files.catbox.moe/kxgvds.jpg"
  },
  {
    title: "Wish You Were Here - Pink Floyd",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/2nhr0r.mp3",
    cover: "https://files.catbox.moe/c1d4t1.jpg"
  },
  {
    title: "Sedia Aku Sebelum Hujan - Idgitaf",
    artist: "PutraMods",
    src: "https://files.catbox.moe/5nfuhy.mp3",
    cover: "https://files.catbox.moe/t3ggko.jpg"
  },
  {
    title: "Rasah Dadi Pelangi - NDX A.K.A",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/1ec5c2.mp3",
    cover: "https://files.catbox.moe/fmpvs9.jpg"
  },
  {
    title: "Kesepian - Vierra",
    artist: "PutraMods",
    src: "https://files.catbox.moe/wwowji.mp3",
    cover: "https://files.catbox.moe/cnwc8f.jpg"
  },
  {
    title: "Pergi Tak Meninggalkan - Last Child",
    artist: "PutraMods",
    src: "https://files.catbox.moe/bgoj6y.mp3",
    cover: "https://files.catbox.moe/83d9nb.jpg"
  },
  {
    title: "Dear God - Avenged Sevenfold",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/kb4g6v.mp3",
    cover: "https://files.catbox.moe/6fy7q3.jpg"
  },
  {
    title: "Fireflies - Owl City",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/jwub37.mp3",
    cover: "https://files.catbox.moe/7bcsg6.jpg"
  },
  {
    title: "Monokrom - Tulus",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/jzc1bw.mp3",
    cover: "https://files.catbox.moe/6fy7q3.jpg"
  },
  {
    title: "Trouble Is a Friend - Lenka",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/zg51zw.mp3",
    cover: "https://files.catbox.moe/mwjo4b.jpg"
  },
  {
    title: "Tak Sanggup Lagi - Rossa",
    artist: "PutraMods",
    src: "https://files.catbox.moe/b5vyeu.mp3",
    cover: "https://files.catbox.moe/b5evoy.jpg"
  },
  {
    title: "Aishiteru - Zivilia",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/uvfnm5.mp3",
    cover: "https://files.catbox.moe/l3d08q.jpg"
  },
  {
    title: "Aishiteru 3 - Zivilia",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/oqaqyc.mp3",
    cover: "https://files.catbox.moe/ol179u.jpg"
  },
  {
    title: "Kembali Pulang - Feby Putri",
    artist: "PutraMods",
    src: "https://files.catbox.moe/ejhdtn.mp3",
    cover: "https://files.catbox.moe/80hrdl.jpg"
  },
  {
    title: "Resah Jadi Luka - Daun Jatuh",
    artist: "PutraMods",
    src: "https://files.catbox.moe/bs309g.mp3",
    cover: "https://files.catbox.moe/1yf63v.jpg"
  },
  {
    title: "December - Neck Deep",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/ldvsrk.mp3",
    cover: "https://files.catbox.moe/dbg11u.jpg"
  },
  {
    title: "Merindukanmu - Dash Uciha",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/1h043s.mp3",
    cover: "https://files.catbox.moe/3gwuav.jpg"
  },
  {
    title: "Kelingan Mantan - NDX A.K.A",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/j35wom.mp3",
    cover: "https://files.catbox.moe/sba7i8.jpg"
  },
  {
    title: "Piwales Tresno - NDX A.K.A",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/f6mw14.mp3",
    cover: "https://files.catbox.moe/gvmu3r.jpg"
  },
  {
    title: "Sekuat Hatimu - Last Child",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/s43wo0.mp3",
    cover: "https://files.catbox.moe/eq1gn4.jpg"
  },
  {
    title: "Kepastian Rasa - Rizky Febian",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/k59jey.mp3",
    cover: "https://files.catbox.moe/1v6hmy.jpg"
  },
  {
    title: "Sempurna - Gita Gutawa",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/yjm8dv.mp3",
    cover: "https://files.catbox.moe/xjl41p.jpg"
  },
  {
    title: "Seluruh Nafas Ini - Last Child",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/yo7s6s.mp3",
    cover: "https://files.catbox.moe/2g76lj.jpg"
  },
  {
    title: "Disarankan di Bandung - Hindia",
    artist: "PutraMods",
    src: "https://files.catbox.moe/pwlhus.mp3",
    cover: "https://files.catbox.moe/70lt7c.jpg"
  },
  {
    title: "Surat Cinta Untuk Starla - Virgoun",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/d65cfm.mp3",
    cover: "https://files.catbox.moe/639hz1.jpg"
  },
  {
    title: "Asal Kau Bahagia - Armada",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/6kxegv.mp3",
    cover: "https://files.catbox.moe/i9cyhq.jpg"
  },
  {
    title: "Baik Baik Sayang - Wali Band",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/a18192.mp3",
    cover: "https://files.catbox.moe/f3artt.jpg"
  },
  {
    title: "Lelaki Cadangan - T2",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/sarzn5.mp3",
    cover: "https://files.catbox.moe/oikqab.jpg"
  },
  {
    title: "Forever Young - Alphaville",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/19rjlt.mp3",
    cover: "https://files.catbox.moe/ikkcgh.jpg"
  },
  {
    title: "Lily - Alan Walker",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/pjf7de.mp3",
    cover: "https://files.catbox.moe/aljwn6.jpg"
  },
  {
    title: "Safe and Sound - Rebelution",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/36lfm3.mp3",
    cover: "https://files.catbox.moe/dn3kfz.jpg"
  },
  {
    title: "Die With a Smile - Lady Gaga",
    artist: "PutraMods",
    src: "https://files.catbox.moe/gzdtoe.mp3",
    cover: "https://files.catbox.moe/1ibw27.jpg"
  },
  {
    title: "Diary Depresiku - Last Child",
    artist: "PutraMods",
    src: "https://files.catbox.moe/59pk8m.mp3",
    cover: "https://files.catbox.moe/liv671.jpg"
  },
  {
    title: "Where We Are - Mr Cho Boy",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/luo7bn.mp3",
    cover: "https://files.catbox.moe/wrpwm3.jpg"
  },
  {
    title: "Payphone - Maroon 5",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/oybv5b.mp3",
    cover: "https://files.catbox.moe/wqdx12.jpeg"
  },
  {
    title: "On My Way - Alan Walker",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/354xyj.mp3",
    cover: "https://files.catbox.moe/zf9zf5.jpg"
  },
  {
    title: "Faded - Alan Walker",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/lz38cq.mp3",
    cover: "https://files.catbox.moe/z3sifn.jpg"
  },
  {
    title: "7 Years - Lukas Graham",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/7asgcg.mp3",
    cover: "https://files.catbox.moe/dduzeb.jpg"
  },
  {
    title: "Take Me Home - Cash Cash",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/e4x9fv.mp3",
    cover: "https://files.catbox.moe/ntzgik.jpg"
  },
  {
    title: "Night Changes - One Direction",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/d8j0x2.mp3",
    cover: "https://files.catbox.moe/kobhkn.jpg"
  },
  {
    title: "Ku Tetap Menanti - Nikita Willy",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/zi85dq.mp3",
    cover: "https://files.catbox.moe/3u4l4r.jpg"
  },
  {
    title: "Hapus Aku - Nidji",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/mq471o.mp3",
    cover: "https://files.catbox.moe/2d3mwg.jpg"
  },
  {
    title: "Duka - Last Child",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/usrifc.mp3",
    cover: "https://files.catbox.moe/f37vxi.jpg"
  },
  {
    title: "Serana - For Revenge",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/qpjpnu.mp3",
    cover: "https://files.catbox.moe/29h6zi.jpg"
  },
  {
    title: "Jakarta Hari Ini - For Revenge",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/9cftuk.mp3",
    cover: "https://files.catbox.moe/wudwy1.jpg"
  },
  {
    title: "Demons - Imagine Dragons",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/9bhf8i.mp3",
    cover: "https://files.catbox.moe/tzhm6f.jpg"
  },
  {
    title: "This Side of Paradise - Coyote Theory",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/egp8lt.mp3",
    cover: "https://files.catbox.moe/uas0ra.jpeg"
  },
  {
    title: "Unity - The Walkers",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/r2nm0o.mp3",
    cover: "https://files.catbox.moe/esb7r8.jpg"
  },
  {
    title: "Imagination - Shawn Mendes",
    artist: "PutraMods",
    src: "https://files.catbox.moe/s75y8v.mp3",
    cover: "https://files.catbox.moe/l9yn84.jpg"
  },
  {
    title: "8 Letters - Why Don't We",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/hs0ref.mp3",
    cover: "https://files.catbox.moe/facnl5.jpg"
  },
  {
    title: "Pura Pura Lupa - Mahen",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/v0r1wa.mp3",
    cover: "https://files.catbox.moe/asqcpd.jpg"
  },
  {
    title: "Sampai Akhir - Judika feat. Duma",
    artist: "JoooTezyh",
    src: "https://files.catbox.moe/zvc7jx.mp3",
    cover: "https://files.catbox.moe/0zl8rv.jpg"
  },
  {
    title: "Bawa Dia Kembali - Mahalini",
    artist: "PutraMods",
    src: "https://files.catbox.moe/4f1q3c.mp3",
    cover: "https://files.catbox.moe/zeq7sy.jpg"
  }
];

let index=+localStorage.getItem("lastIndex")||0;
let hasUserPlayed=false;
let shuffle=false;
let repeatMode=0;

const audio=document.getElementById("audio");
const titleEl=document.getElementById("title");
const artistEl=document.getElementById("artist");
const coverEl=document.getElementById("cover");
const playlistEl=document.getElementById("playlist");
const statusEl=document.getElementById("status");
const progressBar=document.getElementById("progress-bar");
const progressFill=document.querySelector(".progress-fill");
const currentTimeEl=document.getElementById("current-time");
const durationEl=document.getElementById("duration");

function loadSong(i){
  const song=playlist[i];
  if(!song||!song.src) return;
  audio.pause();
  audio.src=song.src;
  audio.load();
  titleEl.textContent=song.title;
  artistEl.textContent=song.artist;
  coverEl.src=song.cover;
  localStorage.setItem("lastIndex",i);
  updateActive();
  const randomColor = `hsl(${Math.random()*360}, 50%, 20%)`;
  document.body.style.background=`
    linear-gradient(rgba(0,0,0,0.85), ${randomColor}),
    url('${song.cover}') center/cover no-repeat
  `;
}

function play(){
  hasUserPlayed=true;
  audio.play().catch(()=>{});
  document.getElementById("play").textContent="||";
  coverEl.classList.add("playing");
}

function next(){
  index=shuffle?Math.floor(Math.random()*playlist.length):(index+1)%playlist.length;
  loadSong(index);
  play();
}

function prev(){
  index=(index-1+playlist.length)%playlist.length;
  loadSong(index);
  play();
}

function renderList(filter=""){
  playlistEl.innerHTML="";
  playlist.forEach((s,i)=>{
    if(!s.title.toLowerCase().includes(filter)) return;
    const d=document.createElement("div");
    d.className="track";
    d.textContent=s.title;
    d.onclick=()=>{index=i;loadSong(i);play();}
    playlistEl.appendChild(d);
  });
  updateActive();
}

function updateActive(){
  [...playlistEl.children].forEach(el=>{
    el.classList.toggle("active",el.textContent===playlist[index]?.title);
  });
}

audio.onwaiting=()=>statusEl.textContent="Loading...";
audio.onplaying=()=>statusEl.textContent="ᯤ Now Playing ";
audio.onended=()=>{
  if(repeatMode===1) play();
  else if(repeatMode===2) next();
};

document.getElementById("play").onclick=()=>{
  if(audio.paused){
    play();
  } else {
    audio.pause();
    coverEl.classList.remove("playing");
    document.getElementById("play").textContent="▶";
  }
};
document.getElementById("next").onclick=next;
document.getElementById("prev").onclick=prev;

document.getElementById("shuffle").onclick=e=>{
  shuffle=!shuffle;
  e.target.classList.toggle("active",shuffle);
};

document.getElementById("repeat").onclick=e=>{
  repeatMode=(repeatMode+1)%3;
  e.target.textContent=["🔁","🔂","🔁∞"][repeatMode];
};

document.getElementById("toggleList").onclick=()=>{
  playlistEl.classList.toggle("show");
};

document.getElementById("search").oninput=e=>{
  renderList(e.target.value.toLowerCase());
};

renderList();
loadSong(index);

// Theme Toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById("themeToggle").textContent = isLight ? '🌞' : '🌙';
};

// RAIN CANVAS
const canvas=document.getElementById("rainCanvas");
const ctx=canvas.getContext("2d");
let raindrops=[];

function resizeCanvas(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
}
window.addEventListener('resize',resizeCanvas);
resizeCanvas();

function createRaindrops(count=150){
  raindrops=[];
  for(let i=0;i<count;i++){
    raindrops.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,length:2+Math.random()*3,velocity:1+Math.random()*2,opacity:0.1+Math.random()*0.3});
  }
}
createRaindrops();

function drawRain(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle=document.body.classList.contains('light-mode')?'rgba(0,0,0,0.3)':'rgba(255,255,255,0.3)';
  ctx.lineWidth=1;
  raindrops.forEach(r=>{
    ctx.beginPath();
    ctx.moveTo(r.x,r.y);
    ctx.lineTo(r.x,r.y+r.length);
    ctx.stroke();
    r.y+=r.velocity;
    if(r.y>canvas.height){r.y=-r.length;r.x=Math.random()*canvas.width;}
  });
  requestAnimationFrame(drawRain);
}
drawRain();

// Progress Bar Functionality
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${progress}%`;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const percentage = clickX / width;
  audio.currentTime = percentage * audio.duration;
});