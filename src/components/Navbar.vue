<template>
  <div class="bg-white border-b border-coolgray-300 z-50 fixed w-full">
    <Container>
      <div class="flex flex-col md:flex-row py-4 space-y-4 md:space-y-0">
        <div class="flex justify-between items-center md:pr-12">
          <div>
            <span class="text-2xl font-bold text-coolgray-900">Rayon</span>
          </div>
          <div>
            <button
              class="block md:hidden"
              @click="toggleNav"
              :class="[isOpen ? 'block' : 'hidden']"
            >
              <vue-feather type="align-right"></vue-feather>
            </button>
            <button
              class="block md:hidden"
              @click="toggleNav"
              :class="[isOpen ? 'hidden' : 'block']"
            >
              <vue-feather type="x"></vue-feather>
            </button>
          </div>
        </div>
        <!-- Navigasi -->
        <div
          class="flex flex-col md:flex-row w-full justify-between md:items-center space-y-4 md:space-y-0"
          :class="[isOpen ? 'hidden' : 'block']"
        >
          <div
            class="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-3 md:space-y-0"
          >
            <div class="text-sm font-semibold text-coolgray-700">
              <router-link to="/">
                Home
              </router-link>
            </div>
            <div class="text-sm font-semibold text-coolgray-700">
              <router-link to="/">
                Tentang Kami
              </router-link>
            </div>
            <div class="text-sm font-semibold text-coolgray-700">
              <router-link to="/">
                Agenda Program
              </router-link>
            </div>
            <div class="text-sm font-semibold text-coolgray-700">
              <router-link to="/">
                Jurnal
              </router-link>
            </div>
            <div class="text-sm font-semibold text-coolgray-700">
              <router-link to="/">
                Hubungi Kami
              </router-link>
            </div>
          </div>
          <div
            class="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 items-center"
          >
            <div
              class="w-full bg-lightblue-500 text-coolgray-100 rounded-md px-6 py-2 font-semibold text-center"
            >
              <router-link to="/">
                Login
              </router-link>
            </div>
            <div
              class="w-full bg-lightblue-900 text-coolgray-100 rounded-md px-6 py-2 font-semibold text-center"
            >
              <router-link to="/">
                Register
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: true,
    };
  },
  components: {
    Container,
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },
  },
};
</script>

<style></style>
