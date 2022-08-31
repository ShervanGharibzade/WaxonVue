<template>
  <div id="app" class="w-full h-3/4 sm:w-[25em] sm:h-[25em] overflow-hidden" >
      <ejs-maps :zoomSettings='zoomSettings' :centerPosition='centerPosition'>
        <e-layers>
          <e-layer></e-layer>
        </e-layers>
      </ejs-maps>
  </div>
</template>

<script>
import { MapsComponent, LayersDirective, LayerDirective} from '@syncfusion/ej2-vue-maps'

export default {
  name: 'App',
  components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective
  },
  data() {
    return {
      titleSettings: {
      },
      zoomSettings: {
        enable: true,
        zoomFactor: 2
      },
      centerPosition: {
        latitude: 20.54244147012483,
        longitude: -10.62646484375
      },
    }
  },
  provide: {}
}
</script>
