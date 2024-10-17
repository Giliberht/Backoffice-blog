<template>
  <div class="w-screen h-full flex">
    <!-- Sidebar -->
    <div class="w-[400px] h-full bg-[#cbd8ec] text-white" v-show="showSide">
      <div class="h-[50px] bg-[#253555] flex justify-center items-center">
        <div class="px-[20px] inline-flex items-center w-full">
          <h1
            class="inline-flex items-center w-full font-bold text-xl uppercase"
          >
            <img
              src="../../../assets/logo-icon.png"
              class="mr-5 w-[25px] h-[25px] fill-current"
            />
            Blog-office
          </h1>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-[#273e65] py-[20px]">
        <div class="flex flex-col justify-between h-full space-y-[10px]">
          <div class="px-[20px] flex flex-col justify-between space-y-[10px]">
            <div class="h-full">
              <p
                class="inline-flex items-center w-full font-semibold text-sm text-[#cbd8ec]/75 py-3"
              >
                Applications
              </p>
              <router-link
                to="/backoffice"
                class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-medium border-[#cbd8ec] hover:bg-[#111827]/50 hover:text-[#ffc23f] rounded-md focus:bg-[#111827]/50 focus:text-[#ffc23f]"
              >
                <font-awesome-icon
                  icon="fa-solid fa-eye"
                  class="mr-5 w-[20px] h-[20px] fill-current"
                />Overview</router-link
              >
              <router-link
                to="/backoffice/dashboard"
                class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-medium border-[#cbd8ec] hover:bg-[#111827]/50 hover:text-[#ffc23f] rounded-md focus:bg-[#111827]/50 focus:text-[#ffc23f]"
              >
                <font-awesome-icon
                  icon="fa-solid fa-chart-pie"
                  class="mr-5 w-[20px] h-[20px] fill-current"
                />Dashboard</router-link
              >
              <div>
                <div
                  @click="toggleUsersSubMenu"
                  class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-medium border-[#cbd8ec] hover:bg-[#111827]/50 hover:text-[#ffc23f] rounded-md focus:bg-[#111827]/50 focus:text-[#ffc23f] cursor-pointer"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-user"
                    class="mr-5 w-[20px] h-[20px] fill-current"
                  />
                  Utilisateurs
                  <font-awesome-icon
                    :icon="
                      showUsersSubMenu
                        ? 'fa-solid fa-chevron-up'
                        : 'fa-solid fa-chevron-down'
                    "
                    class="ml-auto w-[16px] h-[16px]"
                  />
                </div>

                <div v-show="showUsersSubMenu" class="ml-6 mt-2 text-left">
                  <router-link
                    to="/backoffice/users-all"
                    class="block text-[#cbd8ec] hover:text-[#ffc23f] py-[5px] pl-[20px] border-l-2 border-transparent hover:border-[#ffc23f]"
                  >
                    Liste des utilisateurs
                  </router-link>
                  <router-link
                    to="/backoffice/users-add"
                    class="block text-[#cbd8ec] hover:text-[#ffc23f] py-[5px] pl-[20px] border-l-2 border-transparent hover:border-[#ffc23f]"
                  >
                    Ajouter un utilisateur
                  </router-link>
                  <router-link
                    to="/backoffice/users-role"
                    class="block text-[#cbd8ec] hover:text-[#ffc23f] py-[5px] pl-[20px] border-l-2 border-transparent hover:border-[#ffc23f]"
                  >
                    Rôles et Permissions
                  </router-link>
                </div>
              </div>
              <div>
                <div
                  @click="toggleArticlesSubMenu"
                  class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-medium border-[#cbd8ec] hover:bg-[#111827]/50 hover:text-[#ffc23f] rounded-md focus:bg-[#111827]/50 focus:text-[#ffc23f] cursor-pointer"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-newspaper"
                    class="mr-5 w-[20px] h-[20px] fill-current"
                  />
                  Articles
                  <font-awesome-icon
                    :icon="
                      showArticlesSubMenu
                        ? 'fa-solid fa-chevron-up'
                        : 'fa-solid fa-chevron-down'
                    "
                    class="ml-auto w-[16px] h-[16px]"
                  />
                </div>

                <div v-show="showArticlesSubMenu" class="ml-6 mt-2 text-left">
                  <router-link
                    to="/backoffice/article-all"
                    class="block text-[#cbd8ec] hover:text-[#ffc23f] py-[5px] pl-[20px] border-l-2 border-transparent hover:border-[#ffc23f]"
                  >
                    Tous les articles
                  </router-link>
                  <router-link
                    to="/backoffice/article-comments"
                    class="block text-[#cbd8ec] hover:text-[#ffc23f] py-[5px] pl-[20px] border-l-2 border-transparent hover:border-[#ffc23f]"
                  >
                    Commentaires
                  </router-link>
                </div>
              </div>
            </div>
            <div class="h-full">
              <div>
                <p
                  class="inline-flex items-center w-full font-semibold text-sm text-[#cbd8ec]/90 py-3"
                >
                  Médias
                </p>
                <router-link
                  to="/backoffice/images-all"
                  class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-medium border-[#cbd8ec] hover:bg-[#111827]/50 hover:text-[#ffc23f] rounded-md focus:bg-[#111827]/50 focus:text-[#ffc23f]"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-image"
                    class="mr-5 w-[20px] h-[20px] fill-current"
                  />Galerie d'images</router-link
                >
              </div>
              <router-link
                to="/backoffice/documents-all"
                class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-medium border-[#cbd8ec] hover:bg-[#111827]/50 hover:text-[#ffc23f] rounded-md focus:bg-[#111827]/50 focus:text-[#ffc23f]"
              >
                <font-awesome-icon
                  icon="fa-solid fa-file-lines"
                  class="mr-5 w-[20px] h-[20px] fill-current"
                />Documents</router-link
              >
            </div>
          </div>
          <div
            class="h-[100px] px-[20px] flex flex-col justify-between space-y-[10px]"
          >
            <router-link
              to="/back/support"
              class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-medium border-[#cbd8ec] hover:bg-[#111827]/50 hover:text-[#ffac3f] rounded-md focus:bg-[#111827]/50 focus:text-[#ffac3f]"
            >
              <font-awesome-icon
                icon="fa-solid fa-question-circle"
                class="mr-3 w-[20px] h-[20px] fill-current"
              />Support</router-link
            >
            <router-link
              to="/backoffice/settings"
              class="inline-flex relative items-center px-[10px] py-[10px] w-full text-md font-medium border-[#cbd8ec] hover:bg-[#111827]/50 hover:text-[#ffac3f] rounded-md focus:bg-[#111827]/50 focus:text-[#ffac3f]"
            >
              <font-awesome-icon
                icon="fa-solid fa-cogs"
                class="mr-3 w-[20px] h-[20px] fill-current"
              />Settings</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Main content area -->
    <div class="w-full h-full bg-[#6990c7]">
      <!-- Header -->
      <div
        class="h-[50px] bg-[#e8ecf6] flex items-center justify-between shadow-sm w-full px-[20px] py-[10px] z-10 border-b"
      >
        <div
          @click="toggleSideBar"
          class="cursor-pointer w-[30px] inline-flex relative items-center py-[10px] text-md font-medium hover:text-[#ffac3f]"
        >
          <font-awesome-icon
            icon="fa-solid fa-bars-staggered"
            class="w-[20px] h-[20px] fill-current"
            id="toggleSideBar"
          />
        </div>
        <div class="flex flex-row items-center">
          <div class="mr-8 space-x-4">
            <router-link
              to="/"
              class="inline-flex relative items-center justify-center px-[10px] py-[10px] w-[32px] h-[32px] bg-[#273e65] hover:bg-[#1e2a39] transition-transform ease-in-out rounded-full"
            >
              <font-awesome-icon
                icon="fa-solid fa-display"
                class="w-[18px] h-[18px]"
                id="FrontOffice"
                color="white"
            /></router-link>
            <router-link
              to="/"
              class="inline-flex items-center justify-center px-[10px] py-[10px] w-[32px] h-[32px] bg-[#273e65] hover:bg-[#1e2a39] rounded-full transition-transform ease-in-out"
            >
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="w-[18px] h-[18px]"
                color="white"
            /></router-link>
            <router-link
              to="/"
              class="inline-flex items-center justify-center px-[10px] py-[10px] w-[32px] h-[32px] bg-[#273e65] hover:bg-[#1e2a39] rounded-full transition-transform ease-in-out"
            >
              <font-awesome-icon
                icon="fa-solid fa-bell"
                class="w-[18px] h-[18px]"
                color="white"
            /></router-link>
          </div>

          <div class="w-[200px] p-1">
            <div
              class="flex items-center justify-start space-x-4 cursor-pointer"
              @click="toggleDropMenu"
            >
              <img
                class="w-10 h-10 rounded-full border-2 border-[#6990c7] bg-[#6990c7]"
                src="../../../../public/avatar.jpg"
                alt="Image de profil"
              />
              <div class="font-semibold text-[#111827] text-left">
                <div>Victor ,Dev OP</div>
                <div class="text-xs text-[#111827]/75">Admin</div>
              </div>
            </div>
            <div
              v-show="showDropMenu"
              class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md border bg-[#e8ecf6] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1 text-left" role="none">
                <a
                  href="/backoffice/users"
                  class="text-gray-700 block px-4 py-2 text-sm hover:text-[#ffac3f]"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >Mon compte</a
                >
                <a
                  href="/backoffice/support"
                  class="text-gray-700 block px-4 py-2 text-sm hover:text-[#ffac3f]"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Support</a
                >
                <form method="POST" action="#" role="none">
                  <button
                    type="/"
                    class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:text-[#df4343]"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Déconnexion
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div
        class="flex-grow h-[calc(100vh-50px)] bg-[#f4f6fb] pt-[20px] pb-[25px] px-[20px]"
      >
        <div
          class="border border-[#cbd8ec] rounded-md p-[20px] h-full overflow-y-auto"
        >
          <router-view></router-view>
        </div>
        <div class="text-xs py-1 w-full font-medium text-[#111827]">
          © 2024 · Gibert Victor™ · All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSide: true,
      showDropMenu: false,
      showUsersSubMenu: false,
      showArticlesSubMenu: false,
      showImagesSubMenu: false,
      showDocSubMenu: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
    toggleDropMenu() {
      this.showDropMenu = !this.showDropMenu;
    },
    toggleUsersSubMenu() {
      this.showUsersSubMenu = !this.showUsersSubMenu;
    },
    toggleArticlesSubMenu() {
      this.showArticlesSubMenu = !this.showArticlesSubMenu;
    },
    toggleImagesSubMenu() {
      this.showImagesSubMenu = !this.showImagesSubMenu;
    },
    toggleDocSubMenu() {
      this.showDocSubMenu = !this.showDocSubMenu;
    },
  },
};
</script>

<style scoped></style>
