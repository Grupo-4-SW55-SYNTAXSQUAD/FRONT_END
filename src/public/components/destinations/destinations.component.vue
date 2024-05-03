
<script>
import DestinationsFilter from './destinations-filter.component.vue';
import ListImage from './list-images.component.vue';

export default {
  components: {
    DestinationsFilter,
    ListImage,
  },
  data: function () {
    return {
      destinos: [
        {id: 'lima', nombre: 'Lima', cantidad: 4, checked: false},
        {id: 'cuzco', nombre: 'Cuzco', cantidad: 4, checked: false},
        {id: 'arequipa', nombre: 'Arequipa', cantidad: 4, checked: false},
        {id: 'cajamarca', nombre: 'Cajamarca', cantidad: 4, checked: false},
        {id: 'amazonas', nombre: 'Amazonas', cantidad: 4, checked: false},
        {id: 'ica', nombre: 'Ica', cantidad: 4, checked: false},
        {id: 'loreto', nombre: 'Loreto', cantidad: 4, checked: false},
        {id: 'ancash', nombre: 'Áncash', cantidad: 4, checked: false},
      ],
      destinosCards: [
        {imagen: 'https://placehold.co/300x200', titulo: 'Valle del Colca, Arequipa'},
        {imagen: 'https://placehold.co/300x200', titulo: 'Machu Picchu, Cusco'},
        {imagen: 'https://placehold.co/300x200', titulo: 'Placeholder Destination 3'},
      ],
    }
  },}

</script>


          <template>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 p-4 bg-white shadow-md">
                  <h2 className="font-bold text-lg mb-4">DESTINOS 24</h2>
                  <ul>
                    <DestinationsFilter v-for  ="destino in destinos" :key="destino.id" :destino="destino" />
                  </ul>
                </div>

                <div className="w-full md:w-3/4 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ListImage v-for ="destino in destinosCards" :key="destino.titulo" :destino="destino" />
                  </div>
                </div>
              </div>
            </div>
          </template>