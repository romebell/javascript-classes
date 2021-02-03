class Artist {
    constructor(name, age, genre, label) {
        // you will need to decide what the datatype have to be
        // datatypes: string, integer, arrays, objects, booleans
        this.name = name;
        this.age = age;
        // the instance needs to be an array
        this.genre = genre;
        this.label = label;
        this.albums = [];
        this.songs = [];
        this.image = '';
        this.instagram = null;
    }

    addAlbum(album) {
        this.albums.push(album);
        console.log(`This is another ${album} for ${this.name}`);
    }

    addSong(song) {
        this.songs.push(song);
        console.log(`This is another ${song} for ${this.name}`);
    }

    addImage(imageLink) {
        this.image = imageLink;
    }

    addIG(username) {
        this.instagram = username;
    }

}

// this is an instance of the Artist class
const drake = new Artist('Drake', '33', 'hip hop', 'cash money records');
const hozier = new Artist('Hozier', '99', 'rock', 'cash money records');
const carlCox = new Artist('Carl Cox', '50', 'house', 'cash money records');

// look up an artist
// find 2 albums and add those albums
// find 2 songs and add those songs
// find an image and copy the image url, add image
// find their IG username and add username

// artist 1
const adele = new Artist('Adele', 32, 'Pop', 'Columbia');
console.log(adele);
// add album
adele.addAlbum('19');
adele.addAlbum('25');
console.log(adele.albums);
// add songs
adele.addSong('Someone Like You');
adele.addSong('Rolling in the Deep');
console.log(adele.songs);
// add image (WARNING: that is a looooooooong url string 🤷🏽‍♂️)
adele.addImage('data:image/jpeg;base64,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')
console.log(adele.image);
// add IG
adele.addIG('https://www.instagram.com/adele/');
console.log(adele.instagram);

// artist 2 (RIP to Pop Smoke 🙏🏽)
const popSmoke = new Artist('Pop Smoke', 20, 'Hip Hop', 'Victor Victor');
console.log(popSmoke)
// add album
popSmoke.addAlbum('Meet The Woo');
popSmoke.addAlbum('Meet The Woo 2');
console.log(popSmoke.albums);
// add song
popSmoke.addSong('Shake the Room (feat Quavo)');
popSmoke.addSong('Dior');
console.log(popSmoke.songs);
// add image
adele.addImage('https://imagez.tmz.com/image/72/4by3/2020/02/19/724de2994aaa45848243f45c900b8e4e_xl.jpg')
console.log(popSmoke.image);
// add IG
adele.addIG('https://www.instagram.com/realpopsmoke');
console.log(popSmoke.instagram);


