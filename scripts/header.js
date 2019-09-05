(() => {
        const block = document.querySelector('.mobile-header');
        const button = document.querySelector('menu-button');
        
        function toggle() {
          block.classList.toggle('open');
        }
        function remove() {
          block.classList.remove('open');
        }
        
        document.addEventListener('click', e => {
          const target = e.target;
          
          target === button ? toggle() : target !== block ? remove() : false;
        });
      })();