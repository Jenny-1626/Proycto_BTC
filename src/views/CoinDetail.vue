<template>
  <div class="flex-col">
    <div class="flex justify-center">
      <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" ></bounce-loader>
    </div>
    <template v-if="!isLoading">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <img
            :src="
              `https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`
            "
            :alt="asset.name"
            class="w-20 h-20 mr-5"
          />
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
          </h1>
        </div>
      </div>

        <div class="font-bold text-green-800 my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Ranking</b>
              <span>#{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
              <span>{{ asset.priceUsd | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más bajo</b>
              <span>{{ min | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más alto</b>
              <span>{{ max | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span>{{ avg | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variación 24hs</b>
              <span>{{ asset.changePercent24Hr | dollarpercent }}</span>
            </li>
          </ul>
        </div>
        <div class="my-20 bg-orange-200" id="chart-coin">
            <line-chart 
              xtitle = " PriceUsd "
              ytitle = " Date "
              :id="'chart-coin'"
              :curve="false"
              width=" 800px "
              heigth=" 500px "
              :colors="['purple']"
              :min="min"
              :max="max"
              :data="
                this.history.map(h => [
                  h.date ,
                  parseFloat(parseFloat(h.priceUsd).toFixed(2))
                ])
              "
            ></line-chart>
      </div>
    </template>
    <br>
    <br>
    <br>

    <router-link
      to="/"
      class="mt-5 text-xl text-green-600 hover:underline"
    >Volver a la pagina de Inicio</router-link>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <footer class="text-blue-700 text-2xl text-left">Desarrollado por @JennyBarrientos</footer>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'CoinDetail',

  data() {
    return {
      asset: {},
      history: [],
      isLoading: true
    }
  },

  computed: {
    min() {
      return Math.min(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      )
    },

    max() {
      return Math.max(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      )
    },

    avg() {
      return Math.abs(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      )
    }
  },

  created() {
    this.getCoin()
  },

  methods: {
    getCoin() {
      const id = this.$route.params.id

        Promise.all([api.getAsset(id), api.getAssetHistory(id)]).then(
        ([asset, history]) => {
          this.asset = asset
          this.history = history
        })
        .finally(() => (this.isLoading = false))
    }
  }
}

</script>

<style scoped>
td {
  padding: 10px;
  text-align: center;
}

</style>

