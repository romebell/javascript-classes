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
