<template>
  <header id="header">
    <h1>This is the header.</h1>
    <nav id="header-nav">
      <ul>
        <router-link tag="li" id="home-nav" to="/" exact><a>top</a></router-link>
        <router-link tag="li" id="test" to="/test"><a>test</a></router-link>
      </ul>
    </nav>
  </header>
</template>
