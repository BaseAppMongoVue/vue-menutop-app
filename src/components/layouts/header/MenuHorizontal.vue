<template>
  <span>

	<div class="mobile-menu-left-overlay"></div>
	<ul class="main-nav nav nav-inline">

    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'home'}">
        Visão Geral
      </router-link>
    </li>

		<li class="nav-item">
			<a class="nav-link" href="#">Hospedagens</a>
		</li>

    <li v-if="isRoleAdmin || isRoleAuditor" class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Reservas</a>
			<div class="dropdown-menu">

        <router-link class="dropdown-item" :to="{ name: 'settings.users.list'}">
          Reservas
        </router-link>
        <router-link class="dropdown-item" :to="{ name: 'settings.users.list'}">
          Mapa de reservas
        </router-link>

			</div>
		</li>


    <li class="nav-item">
			<a class="nav-link" href="#">Hóspedes</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">Financeiro</a>
		</li>

    <li v-if="isRoleAdmin || isRoleAuditor" class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mais</a>
			<div class="dropdown-menu">

        <router-link v-if="isRoleAdmin" class="dropdown-item" :to="{ name: 'settings.users.list'}">
          Relatórios
        </router-link>
        <div class="dropdown-divider"></div>

        <router-link v-if="isRoleAdmin" class="dropdown-item" :to="{ name: 'settings.roles.list'}">
          Categorias
        </router-link>
        <router-link v-if="isRoleAdmin" class="dropdown-item" :to="{ name: 'settings.roles.list'}">
          Produtos
        </router-link>
        <router-link v-if="isRoleAdmin" class="dropdown-item" :to="{ name: 'settings.roles.list'}">
          Serviços
        </router-link>
        <div class="dropdown-divider"></div>
        <router-link v-if="isRoleAdmin" class="dropdown-item" :to="{ name: 'settings.privileges.list'}">
          Unidades
        </router-link>

			</div>
		</li>

    <li v-if="isRoleAdmin || isRoleAuditor" class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Configurações</a>
			<div class="dropdown-menu">

        <router-link v-if="isRoleAdmin" class="dropdown-item" :to="{ name: 'settings.users.list'}">
          Gerenciar usuários
        </router-link>
        <div class="dropdown-divider"></div>

        <router-link v-if="isRoleAdmin" class="dropdown-item" :to="{ name: 'settings.roles.list'}">
          Gerenciar Funções
        </router-link>
         <router-link v-if="isRoleAdmin" class="dropdown-item" :to="{ name: 'settings.privileges.list'}">
          Gerenciar Privilégios
        </router-link>

			</div>
		</li>

	</ul>
  </span>
</template>

<script>
import { isAclToLink } from "@/utils/authorizations-helpers";

export default {
  name: "MenuHorizontal",
  data() {
    return {
      isRoleAdmin: false,
      isRoleEditor: false,
      isRoleAuditor: false,
      isRoleFinance: false,
    };
  },
  created() {
    this.isRoleAdmin = isAclToLink("ADMIN");
    this.isRoleEditor = isAclToLink("STAFF_EDITOR");
    this.isRoleAuditor = isAclToLink("STAFF_AUDITOR");
    this.isRoleFinance = isAclToLink("STAFF_FINANCE");
  }
};
</script>
