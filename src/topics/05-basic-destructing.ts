interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details:Details;
}
interface Details{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Dark Magic",
    details: {
        author: 'nothing,nowhere.',
        year: 2024
    }
}

const {song:songname, songDuration:length, details:songdetails} = audioPlayer;
const {author:author} = songdetails;

console.log('Song: ', songname);
console.log('Song duration: ', length);
console.log('Author: ', author);


export {};