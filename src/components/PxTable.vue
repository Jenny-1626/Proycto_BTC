<template>
  <table class="border-double border-2 border-purple-500 bg-yellow-300 bg-opacity-75">
    <thead>
      <tr class="bg-yellow-100 border-b-8 border-yellow-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <th>Información</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in assets "
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
          :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
          :alt="a.name"
        />
        </td>
        <td>
          <b># {{ a.rank }}</b>
        </td>
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
          >{{ a.name }}</router-link>
          <small class="ml-1 text-gray-500">{{ a.symbol }}</small>
        </td>
        <td>{{ a.priceUsd | dollar}}</td>
        <td>{{ a.marketCapUsd | dollar}}</td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ a.changePercent24Hr | dollarpercent }}
        </td>
        <td>
          <router-link
            class="hover:underline text-blue-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
          ><button class="rounded-full h-24 w-24 flex items-center justify-center hover:bg-orange-300"> Detalles</button></router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PxTable",

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
  font-weight:bold;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  } 
}
</style>
