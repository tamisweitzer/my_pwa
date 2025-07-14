window.addEventListener( 'load', () => {
  registerSW()
} );


async function registerSW() {
  if ( 'serviceWorker' in navigator ) {
    try {
      await navigator.serviceWorker.register( './sw.js' );
      console.log('SW successful.');

    } catch ( e ) {
      console.log("SW registration failed.", e);
  }
}
}
