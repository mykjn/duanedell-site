import single1 from '../assets/banwag.jpg';
import single2 from '../assets/ngalan.jpg';
import single3 from '../assets/gitagbo.jpg';
import single4 from '../assets/taliwala.jpg';
import album1 from '../assets/pagkagamhanan.jpg';

const musicData = [
  {
    type: 'single',
    title: 'BANWAG',
    duration: '3:50',
    image: single1,
    link: 'https://open.spotify.com/track/4qFn8peLOCMWCtnzFJWYA6?si=41d32168ed4c4c83',
    writer: 'Dave Valiente • Duane Dell Atibula Fuderanan • John Milo Atibula • Michael Ray Nallos • Mykie Jan Quesada • Sherwin Zerda',
    year: '2025',
    lyricsUrl: '/lyrics/banwag.txt',
    videoUrl: 'https://www.youtube.com/embed/WxGiS7ilp8M?si=LrlTgkMQlp5FKfaY', 
  },
  {
    type: 'single',
    title: 'NGALAN',
    duration: '3:42',
    image: single2,
    link: 'https://open.spotify.com/track/0Bu8W9juhUBvDKpvOkyN3g?si=550cbc5edf27444b',
    writer: 'Duane Dell Fuderenan • John Milo Atibula',
    year: '2024',
    lyricsUrl: '/lyrics/ngalan.txt',
    videoUrl: 'https://www.youtube.com/embed/Xusn3-3fYHo?si=nEZSODWh0B8xmMw3',
  },
  {
    type: 'single',
    title: 'Gitagbo',
    duration: '3:45',
    image: single3,
    link: 'https://open.spotify.com/track/6jTuboubtHAgudcIhmgaJa?si=7b653861a3d14788',
    writer: 'Duane Dell Fuderenan • John Milo Atibula',
    year: '2024',
    lyricsUrl: '/lyrics/gitagbo.txt',
    videoUrl: 'https://www.youtube.com/embed/bgNaDCNpdgU?si=ISAAYxkiaeaiLEeN',
  },
  {
    type: 'single',
    title: 'Taliwala',
    duration: '5:33',
    image: single4,
    link: 'https://open.spotify.com/track/5T1KzeJw2NjSKX4N09R0i3?si=92987259e0cd43ad',
    writer: 'Duane Dell Fuderenan',
    year: '2024',
    lyricsUrl: '/lyrics/taliwala.txt',
    videoUrl: 'https://www.youtube.com/embed/Fe7OtLy6v3I?si=3kogQ3lSW1V_MmX6',
  },
  {
    type: 'album',
    title: 'Pagkagamhanan EP',
    image: album1,
    link: 'https://open.spotify.com/album/3BXfhWThaonKH88xdSY2Tx?si=HtqEVZkQSxijO9KNjDhgEQ',
    tracks: [
        {
            title: 'Bundak Ulan',
            duration: '4:49',
            link: 'https://open.spotify.com/track/3C0ldCpDXXNPvsBSNEOloT?si=ccfc762706684911',
            writer: 'Duane Dell Atibula Fuderanan • Elizabeth Atibula Fuderanan • John Milo Atibula • Maria Marlin Atibula',
            year: '2024',
            lyricsUrl: '/lyrics/bundak_ulan.txt',
            videoUrl: 'https://www.youtube.com/embed/Spqlm-OE7fA?si=9aE15cfKtKkAamsH',
        },
        {
            title: 'Bantugan ft. Krayzel Feb',
            duration: '3:14',
            link: 'https://open.spotify.com/track/2P0HGhLOGDwHUvAXAK45h0?si=c54a73e04bca4625',
            writer: 'Duane Dell Atibula Fuderanan • John Milo Atibula • Krayzel Feb Ranario Janiola',
            year: '2024',
            lyricsUrl: '/lyrics/bantugan.txt',
            videoUrl: 'https://www.youtube.com/embed/DP9Z_TVoyFQ?si=JdfntIoft6csxQFr',
        },
        {
            title: 'Sidlak (Balaan Ka) ft. Pastor Ruiz',
            duration: '4:38',
            link: 'https://open.spotify.com/track/5BMYXLKI2mxq9FxSS2Nc5L?si=667c8b772c834b2d',
            writer: 'Duane Dell Atibula Fuderanan • John Milo Atibula • Ruiz Pila Español',
            year: '2024',
            lyricsUrl: '/lyrics/sidlak.txt',
            videoUrl: 'https://www.youtube.com/embed/M2RzVvCqhGk?si=viVavoD0xfo3vchH',
        },
        {
            title: 'No Longer I ft. Sherry',
            duration: '4:34',
            link: 'https://open.spotify.com/track/4JDBAydhdTWzKPMV7AKLfP?si=028ab31338f84a70',
            writer: 'Duane Dell Atibula Fuderanan • John Milo Atibula • Ruiz Pila Español, Sherry Janiola Yungco',
            year: '2024',
            lyricsUrl: '/lyrics/no_longer_i.txt',
            videoUrl: 'https://www.youtube.com/embed/fuffxAGThCo?si=JawVVoFcuX2aOBYK',
        },
        {
            title: 'Pagkagamhanan ft. Kearly',
            duration: '5:15',
            link: 'https://open.spotify.com/track/1z3o6tGlBGw371SruNbnTR?si=657c50da09e841f9',
            writer: 'Duane Dell Atibula Fuderanan • John Milo Atibula • Kearly Joy Zulieta Victorio',
            year: '2024',
            lyricsUrl: '/lyrics/pagkagamhanan.txt',
            videoUrl: 'https://www.youtube.com/embed/uTT1qn9LkYU?si=CTSCkyEKTWz9JJst',
        },
    ]
  },
];

export default musicData;