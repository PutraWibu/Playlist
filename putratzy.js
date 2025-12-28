/**
         * @System    : Advanced Audio Player v2.1
         * @Author    : PutraMods (Refactored)
         * @Security  : Activated(Tamper-Proff)
         */

        const _DATABASE_AUDIO_ = [
            { title: "7 Years - Lukas Graham", artist: "JoooTezyh", src: "https://files.catbox.moe/7asgcg.mp3", cover: "https://files.catbox.moe/dduzeb.jpg", category: "Barat" },
            { title: "8 Letters - Why Don't We", artist: "JoooTezyh", src: "https://files.catbox.moe/hs0ref.mp3", cover: "https://files.catbox.moe/facnl5.jpg", category: "Barat" },
            { title: "Dear God - Avenged Sevenfold", artist: "JoooTezyh", src: "https://files.catbox.moe/kb4g6v.mp3", cover: "https://files.catbox.moe/6fy7q3.jpg", category: "Barat" },
            { title: "December - Neck Deep", artist: "JoooTezyh", src: "https://files.catbox.moe/ldvsrk.mp3", cover: "https://files.catbox.moe/dbg11u.jpg", category: "Barat" },
            { title: "Demons - Imagine Dragons", artist: "JoooTezyh", src: "https://files.catbox.moe/9bhf8i.mp3", cover: "https://files.catbox.moe/tzhm6f.jpg", category: "Barat" },
            { title: "Die With a Smile - Lady Gaga", artist: "PutraMods", src: "https://files.catbox.moe/gzdtoe.mp3", cover: "https://files.catbox.moe/1ibw27.jpg", category: "Barat" },
            { title: "Faded - Alan Walker", artist: "JoooTezyh", src: "https://files.catbox.moe/lz38cq.mp3", cover: "https://files.catbox.moe/z3sifn.jpg", category: "Barat" },
            { title: "Fireflies - Owl City", artist: "JoooTezyh", src: "https://files.catbox.moe/jwub37.mp3", cover: "https://files.catbox.moe/7bcsg6.jpg", category: "Barat" },
            { title: "Forever Young - Alphaville", artist: "JoooTezyh", src: "https://files.catbox.moe/19rjlt.mp3", cover: "https://files.catbox.moe/ikkcgh.jpg", category: "Barat" },
            { title: "Imagination - Shawn Mendes", artist: "PutraMods", src: "https://files.catbox.moe/s75y8v.mp3", cover: "https://files.catbox.moe/l9yn84.jpg", category: "Barat" },
            { title: "Lily - Alan Walker", artist: "JoooTezyh", src: "https://files.catbox.moe/pjf7de.mp3", cover: "https://files.catbox.moe/aljwn6.jpg", category: "Barat" },
            { title: "Night Changes - One Direction", artist: "JoooTezyh", src: "https://files.catbox.moe/d8j0x2.mp3", cover: "https://files.catbox.moe/kobhkn.jpg", category: "Barat" },
            { title: "On My Way - Alan Walker", artist: "JoooTezyh", src: "https://files.catbox.moe/354xyj.mp3", cover: "https://files.catbox.moe/zf9zf5.jpg", category: "Barat" },
            { title: "Payphone - Maroon 5", artist: "JoooTezyh", src: "https://files.catbox.moe/oybv5b.mp3", cover: "https://files.catbox.moe/wqdx12.jpeg", category: "Barat" },
            { title: "Safe and Sound - Rebelution", artist: "JoooTezyh", src: "https://files.catbox.moe/36lfm3.mp3", cover: "https://files.catbox.moe/dn3kfz.jpg", category: "Barat" },
            { title: "Take Me Home - Cash Cash", artist: "JoooTezyh", src: "https://files.catbox.moe/e4x9fv.mp3", cover: "https://files.catbox.moe/ntzgik.jpg", category: "Barat" },
            { title: "This Side of Paradise - Coyote Theory", artist: "JoooTezyh", src: "https://files.catbox.moe/egp8lt.mp3", cover: "https://files.catbox.moe/uas0ra.jpeg", category: "Barat" },
            { title: "Trouble Is a Friend - Lenka", artist: "JoooTezyh", src: "https://files.catbox.moe/zg51zw.mp3", cover: "https://files.catbox.moe/mwjo4b.jpg", category: "Barat" },
            { title: "Unity - The Walkers", artist: "JoooTezyh", src: "https://files.catbox.moe/r2nm0o.mp3", cover: "https://files.catbox.moe/esb7r8.jpg", category: "Barat" },
            { title: "Where We Are - Mr Cho Boy", artist: "JoooTezyh", src: "https://files.catbox.moe/luo7bn.mp3", cover: "https://files.catbox.moe/wrpwm3.jpg", category: "Barat" },
            { title: "Wish You Were Here - Pink Floyd", artist: "JoooTezyh", src: "https://files.catbox.moe/2nhr0r.mp3", cover: "https://files.catbox.moe/c1d4t1.jpg", category: "Barat" },
            { title: "DJ CAMPURAN MELODY HUDACARO", artist: "PutraMods", src: "https://files.catbox.moe/1o7rau.mp3", cover: "https://files.catbox.moe/f1juxl.jpg", category: "DJ" },
            { title: "DJ CAMPURAN STYLE PAP RANDOM", artist: "PutraMods", src: "https://files.catbox.moe/onkdur.mp3", cover: "https://files.catbox.moe/k9vl6b.jpg", category: "DJ" },
            { title: "DJ TAGODAY X WANABEST LOST CONTROL", artist: "PutraMods", src: "https://files.catbox.moe/pmhml4.mp3", cover: "https://files.catbox.moe/v4wv38.jpg", category: "DJ" },
            { title: "DJ TEHIBA x AH GELAY", artist: "PutraMods", src: "https://files.catbox.moe/kp8dov.mp3", cover: "https://files.catbox.moe/pulz2v.jpg", category: "DJ" },
            { title: "Dumes - Guyon Waton", artist: "FirmanMods", src: "https://files.catbox.moe/fw9b59.mp3", cover: "https://files.catbox.moe/kxgvds.jpg", category: "Jawa Sad" },
            { title: "Kelingan Mantan - NDX A.K.A", artist: "JoooTezyh", src: "https://files.catbox.moe/j35wom.mp3", cover: "https://files.catbox.moe/sba7i8.jpg", category: "Jawa Sad" },
            { title: "Piwales Tresno - NDX A.K.A", artist: "JoooTezyh", src: "https://files.catbox.moe/f6mw14.mp3", cover: "https://files.catbox.moe/gvmu3r.jpg", category: "Jawa Sad" },
            { title: "Rasah Dadi Pelangi - NDX A.K.A", artist: "JoooTezyh", src: "https://files.catbox.moe/1ec5c2.mp3", cover: "https://files.catbox.moe/fmpvs9.jpg", category: "Jawa Sad" },
            { title: "Resah Bali - Lavora", artist: "FirmanMods", src: "https://files.catbox.moe/ddsn8z.mp3", cover: "https://files.catbox.moe/6md7rl.jpeg", category: "Jawa Sad" },
            { title: "Aishiteru - Zivilia", artist: "JoooTezyh", src: "https://files.catbox.moe/uvfnm5.mp3", cover: "https://files.catbox.moe/l3d08q.jpg", category: "Pop/Sad Indo" },
            { title: "Aishiteru 3 - Zivilia", artist: "JoooTezyh", src: "https://files.catbox.moe/oqaqyc.mp3", cover: "https://files.catbox.moe/ol179u.jpg", category: "Pop/Sad Indo" },
            { title: "Asal Kau Bahagia - Armada", artist: "JoooTezyh", src: "https://files.catbox.moe/6kxegv.mp3", cover: "https://files.catbox.moe/i9cyhq.jpg", category: "Pop/Sad Indo" },
            { title: "Baik Baik Sayang - Wali Band", artist: "JoooTezyh", src: "https://files.catbox.moe/a18192.mp3", cover: "https://files.catbox.moe/f3artt.jpg", category: "Pop/Sad Indo" },
            { title: "Bawa Dia Kembali - Mahalini", artist: "PutraMods", src: "https://files.catbox.moe/4f1q3c.mp3", cover: "https://files.catbox.moe/zeq7sy.jpg", category: "Pop/Sad Indo" },
            { title: "Diary Depresiku - Last Child", artist: "PutraMods", src: "https://files.catbox.moe/59pk8m.mp3", cover: "https://files.catbox.moe/liv671.jpg", category: "Pop/Sad Indo" },
            { title: "Dimana Hatimu - Papinka", artist: "By PutraMods", src: "https://files.catbox.moe/b3cf4r.mp3", cover: "https://files.catbox.moe/pgafn0.jpg", category: "Pop/Sad Indo" },
            { title: "Disarankan di Bandung - Hindia", artist: "PutraMods", src: "https://files.catbox.moe/pwlhus.mp3", cover: "https://files.catbox.moe/70lt7c.jpg", category: "Pop/Sad Indo" },
            { title: "Duka - Last Child", artist: "JoooTezyh", src: "https://files.catbox.moe/usrifc.mp3", cover: "https://files.catbox.moe/f37vxi.jpg", category: "Pop/Sad Indo" },
            { title: "Hal Terindah - Seventeen", artist: "PutraMods", src: "https://files.catbox.moe/bsczdz.mp3", cover: "https://files.catbox.moe/wgiznj.jpg", category: "Pop/Sad Indo" },
            { title: "Hal hebat - Govinda", artist: "PutraMods", src: "https://files.catbox.moe/84udd4.mp3", cover: "https://files.catbox.moe/4xjqhg.jpg", category: "Pop/Sad Indo" },
            { title: "Hapus Aku - Nidji", artist: "JoooTezyh", src: "https://files.catbox.moe/mq471o.mp3", cover: "https://files.catbox.moe/2d3mwg.jpg", category: "Pop/Sad Indo" },
            { title: "Jakarta Hari Ini - For Revenge", artist: "JoooTezyh", src: "https://files.catbox.moe/9cftuk.mp3", cover: "https://files.catbox.moe/wudwy1.jpg", category: "Pop/Sad Indo" },
            { title: "Kembali Pulang - Feby Putri", artist: "PutraMods", src: "https://files.catbox.moe/ejhdtn.mp3", cover: "https://files.catbox.moe/80hrdl.jpg", category: "Pop/Sad Indo" },
            { title: "Kepastian Rasa - Rizky Febian", artist: "JoooTezyh", src: "https://files.catbox.moe/k59jey.mp3", cover: "https://files.catbox.moe/1v6hmy.jpg", category: "Pop/Sad Indo" },
            { title: "Kesepian - Vierra", artist: "PutraMods", src: "https://files.catbox.moe/wwowji.mp3", cover: "https://files.catbox.moe/cnwc8f.jpg", category: "Pop/Sad Indo" },
            { title: "Ku Tetap Menanti - Nikita Willy", artist: "JoooTezyh", src: "https://files.catbox.moe/zi85dq.mp3", cover: "https://files.catbox.moe/3u4l4r.jpg", category: "Pop/Sad Indo" },
            { title: "Lelaki Cadangan - T2", artist: "JoooTezyh", src: "https://files.catbox.moe/sarzn5.mp3", cover: "https://files.catbox.moe/oikqab.jpg", category: "Pop/Sad Indo" },
            { title: "Merindukanmu - Dash Uciha", artist: "JoooTezyh", src: "https://files.catbox.moe/1h043s.mp3", cover: "https://files.catbox.moe/3gwuav.jpg", category: "Pop/Sad Indo" },
            { title: "Monokrom - Tulus", artist: "JoooTezyh", src: "https://files.catbox.moe/jzc1bw.mp3", cover: "https://files.catbox.moe/6fy7q3.jpg", category: "Pop/Sad Indo" },
            { title: "Monolog - Pamungkas", artist: "PutraMods", src: "https://files.catbox.moe/nm1td2.mp3", cover: "https://files.catbox.moe/parsdw.jpg", category: "Pop/Sad Indo" },
            { title: "Pergi Tak Meninggalkan - Last Child", artist: "PutraMods", src: "https://files.catbox.moe/bgoj6y.mp3", cover: "https://files.catbox.moe/83d9nb.jpg", category: "Pop/Sad Indo" },
            { title: "Pura Pura Lupa - Mahen", artist: "JoooTezyh", src: "https://files.catbox.moe/v0r1wa.mp3", cover: "https://files.catbox.moe/asqcpd.jpg", category: "Pop/Sad Indo" },
            { title: "Resah Jadi Luka - Daun Jatuh", artist: "PutraMods", src: "https://files.catbox.moe/bs309g.mp3", cover: "https://files.catbox.moe/1yf63v.jpg", category: "Pop/Sad Indo" },
            { title: "Sampai Akhir - Judika feat. Duma", artist: "JoooTezyh", src: "https://files.catbox.moe/zvc7jx.mp3", cover: "https://files.catbox.moe/0zl8rv.jpg", category: "Pop/Sad Indo" },
            { title: "Sedia Aku Sebelum Hujan - Idgitaf", artist: "PutraMods", src: "https://files.catbox.moe/5nfuhy.mp3", cover: "https://files.catbox.moe/t3ggko.jpg", category: "Pop/Sad Indo" },
            { title: "Sekuat Hatimu - Last Child", artist: "JoooTezyh", src: "https://files.catbox.moe/s43wo0.mp3", cover: "https://files.catbox.moe/eq1gn4.jpg", category: "Pop/Sad Indo" },
            { title: "Seluruh Nafas Ini - Last Child", artist: "JoooTezyh", src: "https://files.catbox.moe/yo7s6s.mp3", cover: "https://files.catbox.moe/2g76lj.jpg", category: "Pop/Sad Indo" },
            { title: "Sempurna - Gita Gutawa", artist: "JoooTezyh", src: "https://files.catbox.moe/yjm8dv.mp3", cover: "https://files.catbox.moe/xjl41p.jpg", category: "Pop/Sad Indo" },
            { title: "Serana - For Revenge", artist: "JoooTezyh", src: "https://files.catbox.moe/qpjpnu.mp3", cover: "https://files.catbox.moe/29h6zi.jpg", category: "Pop/Sad Indo" },
            { title: "Surat Cinta Untuk Starla - Virgoun", artist: "JoooTezyh", src: "https://files.catbox.moe/d65cfm.mp3", cover: "https://files.catbox.moe/639hz1.jpg", category: "Pop/Sad Indo" },
            { title: "Tak Sanggup Lagi - Rossa", artist: "PutraMods", src: "https://files.catbox.moe/b5vyeu.mp3", cover: "https://files.catbox.moe/b5evoy.jpg", category: "Pop/Sad Indo" }
        ];

        const playlist = _DATABASE_AUDIO_.sort((a, b) => a.title.localeCompare(b.title));

        let _pointerIndex = +localStorage.getItem("lastIndex") || 0;
        let _modeAcak = false;
        let _modeUlang = 0; 
        let _filterSaatIni = "Semua Lagu";

        const audioUnit = document.getElementById("audio");
        const elJudul = document.getElementById("title");
        const elCover = document.getElementById("cover");
        const elArtis = document.getElementById("artist");
        const elDaftarPutar = document.getElementById("playlist");
        const elKategori = document.getElementById("kategory");
        const elCari = document.getElementById("search");
        const elMenuLabel = document.getElementById("menu-label");
        const elStatus = document.getElementById("status-label");
        const elProgressFill = document.querySelector(".progress-fill");

        (function(_0xGuard) {
            setInterval(() => {
                const _target = document.querySelector('.footer');
                const _key = "PutraMods";
                const _errPage = document.getElementById("sys_err");
                if (!_target || !_target.innerText.includes(_key) || _target.style.display === "none" || _target.style.opacity === "0") {
                    document.body.innerHTML = "";
                    document.body.appendChild(_errPage);
                    _errPage.style.display = "flex";
                    throw new Error("SEC_ERR: TAMPER_DETECTED");
                }
            }, 1500);
        })();

        function _renderBackground() {
            const _dataLagu = playlist[_pointerIndex];
            if (document.body.classList.contains('light-mode')) {
                document.body.style.background = `linear-gradient(rgba(248,248,248,0.08), rgba(248,248,248,0.08)), url('${_dataLagu.cover}')`;
                document.body.style.backdropFilter = "blur(10px)";
            } else {
                const _randomHue = `hsl(${Math.random()*360}, 60%, 25%)`;
                document.body.style.background = `linear-gradient(rgba(0,0,0,0.12), ${_randomHue}), url('${_dataLagu.cover}')`;
                document.body.style.backdropFilter = "blur(10px)";
            }
        }

        function _generateKategori() {
            elKategori.innerHTML = "";
            const _categories = ["Semua Lagu", ...new Set(playlist.map(s => s.category))];
            _categories.forEach(cat => {
                const _node = document.createElement("div");
                _node.className = "track";
                _node.textContent = cat;
                _node.onclick = () => { 
                    _filterSaatIni = cat; 
                    elKategori.classList.remove("show"); 
                    elDaftarPutar.classList.add("show"); 
                    elMenuLabel.textContent = "List: " + cat; 
                    document.getElementById("toggleList").classList.add("mirrored"); 
                    _generateDaftarLagu(); 
                };
                elKategori.appendChild(_node);
            });
        }

        function _generateDaftarLagu() {
            elDaftarPutar.innerHTML = "";
            const _kataKunci = elCari.value.toLowerCase();
            if (document.body.classList.contains('searching-active') && _kataKunci === "") { 
                elDaftarPutar.classList.remove("show"); return; 
            }
            playlist.forEach((song, i) => {
                const _cocokKategori = (_filterSaatIni === "Semua Lagu" || song.category === _filterSaatIni);
                const _cocokCari = song.title.toLowerCase().includes(_kataKunci);
                if ((_cocokKategori && _cocokCari) || (_kataKunci !== "" && _cocokCari)) {
                    const _node = document.createElement("div");
                    _node.className = "track" + (i === _pointerIndex ? " active" : "");
                    _node.textContent = song.title;
                    _node.onclick = () => { _pointerIndex = i; _muatDataAudio(i); _eksekusiAudio(); elCari.value = ""; document.body.classList.remove('searching-active'); };
                    elDaftarPutar.appendChild(_node);
                }
            });
            if(_kataKunci !== "" || _filterSaatIni !== "Semua Lagu") elDaftarPutar.classList.add("show");
        }

        function _muatDataAudio(idx) {
            const _data = playlist[idx];
            elStatus.textContent = "Loading";
            elStatus.className = "status-standby";
            
            audioUnit.src = _data.src;
            elJudul.textContent = _data.title;
            elArtis.textContent = _data.artist;
            elCover.src = _data.cover;
            
            localStorage.setItem("lastIndex", idx);
            _renderBackground();
            _perbaruiStatusAktif();
        }

        function _eksekusiAudio() { 
            audioUnit.play(); 
            elStatus.textContent = "Now Playing ᯤ";
            elStatus.className = "status-playing";
            document.getElementById("play").textContent = "||"; 
        }

        function _laguSelanjutnya() {
            if (_modeUlang === 1) { _muatDataAudio(_pointerIndex); } 
            else if (_modeAcak) { _pointerIndex = Math.floor(Math.random() * playlist.length); _muatDataAudio(_pointerIndex); } 
            else { _pointerIndex = (_pointerIndex + 1) % playlist.length; _muatDataAudio(_pointerIndex); }
            _eksekusiAudio();
        }

        function _formatWaktu(s) { 
            let m = Math.floor(s / 60); 
            let sec = Math.floor(s % 60); 
            return m + ":" + (sec < 10 ? '0' + sec : sec); 
        }

        function _perbaruiStatusAktif() { 
            [...elDaftarPutar.children].forEach(el => { 
                el.classList.toggle("active", el.textContent === playlist[_pointerIndex]?.title); 
            }); 
        }

        function closeModal() { document.getElementById('welcomeModal').classList.remove('show'); }

        document.getElementById("play").onclick = () => { 
            if (audioUnit.paused) { _eksekusiAudio(); } 
            else { 
                audioUnit.pause(); 
                elStatus.textContent = "Standby"; 
                elStatus.className = "status-standby"; 
                document.getElementById("play").textContent = "▶"; 
            } 
        };

        document.getElementById("next").onclick = _laguSelanjutnya;
        document.getElementById("prev").onclick = () => { _pointerIndex = (_pointerIndex - 1 + playlist.length) % playlist.length; _muatDataAudio(_pointerIndex); _eksekusiAudio(); };
        document.getElementById("shuffle").onclick = function() { _modeAcak = !_modeAcak; this.classList.toggle("btn-active", _modeAcak); };
        document.getElementById("repeat").onclick = function() {
            _modeUlang = (_modeUlang + 1) % 3;
            if (_modeUlang === 1) { this.textContent = "🔂"; this.classList.add("btn-active"); } 
            else if (_modeUlang === 2) { this.textContent = "🔁∞"; this.classList.add("btn-active"); } 
            else { this.textContent = "🔁"; this.classList.remove("btn-active"); }
        };

        document.getElementById("toggleList").onclick = function() {
            this.classList.toggle("mirrored");
            const _isOpen = elKategori.classList.contains("show") || elDaftarPutar.classList.contains("show");
            if(!_isOpen || elDaftarPutar.classList.contains("show")) { elKategori.classList.add("show"); elDaftarPutar.classList.remove("show"); elMenuLabel.textContent = "Pilih Kategori"; } 
            else { elKategori.classList.remove("show"); }
        };

        document.getElementById("themeToggle").onclick = function() {
            this.classList.toggle("mirrored");
            document.body.classList.toggle('light-mode');
            this.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
            _renderBackground();
        };

        document.getElementById("progress-bar").onclick = (e) => { 
            const _rect = e.currentTarget.getBoundingClientRect(); 
            const _pos = (e.clientX - _rect.left) / _rect.width; 
            audioUnit.currentTime = _pos * audioUnit.duration; 
        };

        audioUnit.onended = () => { if (_modeUlang === 2) { _laguSelanjutnya(); } else if (_modeUlang === 1) { _muatDataAudio(_pointerIndex); _eksekusiAudio(); } else { _laguSelanjutnya(); } };
        audioUnit.ontimeupdate = () => { const _prog = (audioUnit.currentTime / audioUnit.duration) * 100; elProgressFill.style.width = `${_prog}%`; document.getElementById("current-time").textContent = _formatWaktu(audioUnit.currentTime); };
        audioUnit.onloadedmetadata = () => { document.getElementById("duration").textContent = _formatWaktu(audioUnit.duration); };

        elCari.onfocus = () => { document.body.classList.add('searching-active'); _generateDaftarLagu(); };
        elCari.onblur = () => { if(elCari.value === "") document.body.classList.remove('searching-active'); };
        elCari.oninput = () => _generateDaftarLagu();

        const canvas = document.getElementById("rainCanvas");
        const ctx = canvas.getContext("2d");
        let _tetesan = Array(80).fill().map(() => ({ x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight, v: 2+Math.random()*3 }));

        function _animasiHujan() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.strokeStyle = document.body.classList.contains('light-mode') ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.40)";
            _tetesan.forEach(d => { ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x, d.y+5); ctx.stroke(); d.y += d.v; if(d.y > canvas.height) d.y = -5; });
            requestAnimationFrame(_animasiHujan);
        }

        window.onresize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        
        window.onload = () => { 
            window.onresize();
            _muatDataAudio(_pointerIndex); 
            _generateKategori(); 
            _generateDaftarLagu(); 
            elKategori.classList.add("show"); 
            _animasiHujan();
            elStatus.textContent = "System Ready";
            elStatus.className = "";
            setTimeout(() => {
                document.getElementById('welcomeModal').classList.add('show');
                elStatus.textContent = "Standby";
                elStatus.className = "status-standby";
            }, 500); 
        };
