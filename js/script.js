const { createApp } = Vue 

createApp({
  data() {
    return {
      message: 'Ciao piccolo hodler!',
      image: `https://bitcoinmagazine.com/.image/t_share/MTk0OTEzOTYyMzU2NzEyNjEw/filc6b5xsaym1ge.jpg`
    }
  }
}).mount('#app')