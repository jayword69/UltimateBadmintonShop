// JavaScript para la interactividad
document.addEventListener('DOMContentLoaded', () => {
    // Agregar productos al carrito
    const addToCartButtons = document.querySelectorAll('.product-card button');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Product added to the cart!');
      });
    });
  
    // Mostrar el carrito (modal)
    const cartModal = document.getElementById('shopping-cart-modal');
    cartModal.style.display = 'none'; // Inicia oculto
    
    // Función para abrir el carrito
    function openCart() {
      cartModal.style.display = 'block';
    }
  
    // Cerrar el carrito (cuando se haga clic fuera del modal)
    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) {
        cartModal.style.display = 'none';
      }
    });
  
    /* Efecto de la barra de navegación que fluye con el scroll */
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollPos = currentScrollPos;
    }