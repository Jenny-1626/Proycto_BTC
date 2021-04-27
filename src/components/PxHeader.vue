<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-indigo-900 bg-opacity-50 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
         <img src="@/assets/Bitcoins.png" class="mr-2" width="80px" height="80px"/>
          <span class="font-semibold text-xl tracking-tight">CriptoMonedas</span>
        </div>
        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
           <ul>
              <router-link to="/" class="rounded-full py-3 px-6 font-semibold text-l bg-yellow-500 hover:bg-red-700">Home</router-link>|
              <router-link to="/about" class="rounded-full py-3 px-6 font-semibold text-l bg-yellow-500 hover:bg-red-700">About</router-link>|
              <router-link to="/chat" class="rounded-full py-3 px-6 font-semibold text-l bg-yellow-500 hover:bg-red-700">Chat</router-link>
            </ul>
          <div class="text-sm lg:flex-grow">
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
    name:'PxHeader',

}
</script>