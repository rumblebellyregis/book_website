class book {
  constructor(titulo, detalle, idioma, portada,descripcion) {
    this.titulo = titulo;
    this.detalle = detalle;
    this.idioma = idioma;
    this.portada = portada;
     this.descripcion=descripcion
  }
}


var app =new Vue({

    el: '#vue-app',

    data: {        
        info: null,        
        loading: true,        
        loaditems:false,
        active:true,
        itemshow:null,
        showing:null,
        portraits:null,
        shower:false,
        source:null,
        search:"",
        disabled:false
    },
    mounted() {
        {
            axios
                .get("https://api.myjson.com/bins/1h3vb3", )
                .then(response => {
                    app.info = response.data.books;               
                     
                   console.log(app.info)                
                    app.loading = false;
                    app.portadaCollector();
                
            })
            .catch(r => console.log(r))
 }
},

    methods: {
      portadaCollector:function(){
          portraits=[]
          for (i=0; i<this.info.length; i++){
                  portraits.push(this.info[i].portada);
                    
               }
          this.portraits=portraits 
          console.log(this.portraits)
      },
        show:function(ind){
           this.source= this.filteredList[ind].portada
            console.log(this.filteredList)
            this.shower=true
        },
        previous:function(ind){
            console.log(this.portraits.indexOf(ind));
            for(i=0; i<this.filteredList.length; i++){
                if(ind==this.filteredList[i].portada){
                    index=i
                }
            }
            
               if(index==0){
               alert("End of the Road on That Way")
            }
            else{
                
            this.show(index-1)
       }
            
        },
        next:function(ind){
                     for(i=0; i<this.filteredList.length; i++){
                if(ind==this.filteredList[i].portada){
                    index=i
                }
            }
           
            if(index==this.filteredList.length-1){
               alert("End of the Road on That Way")
            }
            else{
                
            this.show(index+1)
       }
        },
    }, computed: {
    filteredList() {
      return this.info.filter(book => {
        return book.titulo.toLowerCase().includes(this.search.toLowerCase())
         
      })
    }
  }
})