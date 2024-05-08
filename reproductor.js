class Reproductor {
    constructor(listaCanciones) {
      this.listaCanciones = listaCanciones;
      this.enReproduccion = false;
      this.ahoraSuena = 0;
    }
  
    playPause() {
      this.enReproduccion = !this.enReproduccion;
      let mensaje = this.enReproduccion ? `Ahora suena: ${this.listaCanciones[this.ahoraSuena].nombre}` : "Haz pausado la reproducción";
      console.log(mensaje);
    }
  
    shuffle() {
      let indiceAleatorio = Math.floor(Math.random() * this.listaCanciones.length);
      this.ahoraSuena = indiceAleatorio;
      this.showSongInSite();
    }
  
    next() {
      if (this.ahoraSuena < this.listaCanciones.length - 1) {
        this.ahoraSuena++;
        this.showSongInSite();
      }
    }
  
    prev() {
      if (this.ahoraSuena > 0) {
        this.ahoraSuena--;
        this.showSongInSite();
      }
    }
  
    stop() {
      console.log("Haz detenido la reproducción");
      this.ahoraSuena = -1;
      this.showSongInSite();
      document.getElementById("portada-album").src = "https://cdn-icons-png.flaticon.com/512/26/26606.png";
    }
  
    play(songIndex) {
      this.ahoraSuena = songIndex;
      this.showSongInSite();
    }
  
    songsList() {
      let listaHTML = "";
      this.listaCanciones.forEach((cancion, index) => {
        listaHTML += `<li><a href="#" onclick="miReproductor.play(${index})">${cancion.nombre}</a></li>`;
      });
      document.getElementById("lista-de-canciones").innerHTML = listaHTML;
    }
  
    showSongInSite() {
      if (this.ahoraSuena !== -1) {
        const cancionActual = this.listaCanciones[this.ahoraSuena];
  
        document.getElementById("titulo-cancion").textContent = cancionActual.nombre;
        document.getElementById("artista-cancion").textContent = cancionActual.artista;
        document.getElementById("album-cancion").textContent = cancionActual.album;
        document.getElementById("duracion-cancion").textContent = `Duración: ${cancionActual.duracion}`;
        document.getElementById("portada-album").src = cancionActual.imagen;
      } else {
        document.getElementById("titulo-cancion").textContent = "No hay canción seleccionada";
        document.getElementById("artista-cancion").textContent = "";
        document.getElementById("album-cancion").textContent = "";
        document.getElementById("duracion-cancion").textContent = "";
        document.getElementById("portada-album").src = "";
      }
    }
  }
  
  let listaCanciones = [
    {
      nombre: "5:24",
      album: "De Adentro Pa Afuera",
      artista: "Camilo",
      duracion: "3:23",
      imagen: "https://cdn-p.smehost.net/sites/5b3bac59eb36401694af3a241173447f/wp-content/uploads/2023/06/be716f44-e39c-4193-8ff8-030fb81234e0.jpg"
  },
  
  {
      nombre: "Gordo",
      album: "Un",
      artista: "Camilo",
      duracion: "3:49",
      imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/4c/f0/db/4cf0db6d-bf8a-15d6-202e-1cbda947cf03/196871804776.jpg/1200x1200bf-60.jpg"
  },
  
  {
      nombre: "De adentro pa afuera",
      album: "De adentro pa afuera",
      artista: "Camilo",
      duracion: "3:19",
      imagen: "https://cdn-p.smehost.net/sites/5b3bac59eb36401694af3a241173447f/wp-content/uploads/2023/06/be716f44-e39c-4193-8ff8-030fb81234e0.jpg"
  },
  
  {
      nombre: "NASA",
      album: "De adentro pa afuera",
      artista: "Camilo ft. Alejandro Sanz",
      duracion: "3:06",
      imagen: "https://cdn-p.smehost.net/sites/5b3bac59eb36401694af3a241173447f/wp-content/uploads/2023/06/be716f44-e39c-4193-8ff8-030fb81234e0.jpg"
  },
  
  {
      nombre: "Una vida pasada",
      album: "Dos",
      artista: "Camilo ft. Carin Leon",
      duracion: "3:44",
      imagen: "https://images.genius.com/75ebfab34a5dfcb20ab7c3f65101d0c6.1000x1000x1.png"
  },
  
  {
      nombre: "Ambulancia",
      album: "De adentro pa afuera",
      artista: "Camilo ft. Camila Cabello",
      duracion: "3:33",
      imagen: "https://cdn-p.smehost.net/sites/5b3bac59eb36401694af3a241173447f/wp-content/uploads/2023/06/be716f44-e39c-4193-8ff8-030fb81234e0.jpg"
  },
  
  {
      nombre: "Mimos",
      album: "Mimos",
      artista: "Nicole Zignago ft. Camilo",
      duracion: "3:18",
      imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/a8/c8/bba8c8b7-2202-987b-037b-c400919ae5fa/5021732243089.jpg/1200x1200bf-60.jpg"
  },
  
  {
      nombre: "Mientras me curo del cora",
      album: "Mañana sera bonito",
      artista: "Karol G",
      duracion: "3:01",
      imagen: "https://ishopmx.vtexassets.com/arquivos/ids/264860-800-auto?v=638128491795300000&width=800&height=auto&aspect=true"
  },
  
  {
      nombre: "Mi plan de vida",
      album: "El amor que merecemos",
      artista: "Kany Garcia",
      duracion: "3:00",
      imagen: "https://m.media-amazon.com/images/I/91mB1TscSJL._UF1000,1000_QL80_.jpg"
  },
  
  {
      nombre: "En esta boca",
      album: "Garcia",
      artista: "Kany Garcia ft. Young Miko",
      duracion: "2:56",
      imagen: "https://akamai.sscdn.co/uploadfile/letras/albuns/f/c/e/b/2212591714743646.jpg"
  },
  
  {
      nombre: "Besame bonito",
      album: "Besame bonito",
      artista: "Carmen DeLeon",
      duracion: "2:59",
      imagen: "https://cdns-images.dzcdn.net/images/cover/b61bb17b184fc9d1dd5ce30f567204e2/500x500.jpg"
  },
  
  {
    nombre: "idontwannabeyouanymore",
    album: "dont smile at me",
    artista: "Billie Eillish",
    duracion: "3:23",
    imagen: "https://m.media-amazon.com/images/I/61HKPMl7w+L._UF1000,1000_QL80_.jpg"
  },
  
  {
      nombre: "Happier than ever",
      album: "Happier than ever",
      artista: "Billie Eillish",
      duracion: "5:15",
      imagen: "https://m.media-amazon.com/images/I/71laVfWEkCS._UF1000,1000_QL80_.jpg"
  },
  
  {
      nombre: "Lovely",
      album: "Happier than ever",
      artista: "Billie Eillish",
      duracion: "3:21",
      imagen: "https://m.media-amazon.com/images/I/71laVfWEkCS._UF1000,1000_QL80_.jpg"
  },
  
  {
      nombre: "If the world was ending",
      album: "If the world was ending",
      artista: "JP Saxe",
      duracion: "3:32",
      imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/49/8a/9f/498a9f37-26c7-fd70-f674-7097fe6a4b5a/886448383369.jpg/1200x1200bb.jpg"
  },
  
  ];
  
  let miReproductor = new Reproductor(listaCanciones);
  miReproductor.songsList();