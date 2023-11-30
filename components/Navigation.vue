<template>
        <header>
                <nav>
                       <!-- <RouterLink to ="/">HOME</RouterLink> -->
                       <RouterLink to ="/members" class="links">HOME</RouterLink>
                       <RouterLink to="/teams" class="links">TEAMS</RouterLink>
                </nav>
        </header>
</template>


<!-- styling for the nav -->
<style>

nav {
        margin-top: 40px;
        margin-left: 60px;
}
.links {
        text-decoration: none;
        margin-right: 50px;
        background-color: #a09391;
        color: #fff;
        padding: 10px;
        border: 2px solid #000;
        border-radius: 20px;
}
</style>