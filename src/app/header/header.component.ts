import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  // Método para cerrar el menú hamburguesa con animación suave
  closeMenu() {
    const menuElement = document.getElementById('orbitNavbar');
    
    if (menuElement && menuElement.classList.contains('show')) {
      // Usar la API de Bootstrap Collapse para animación suave
      const collapseInstance = bootstrap.Collapse.getInstance(menuElement);
      
      if (collapseInstance) {
        // Cerrar con animación usando Bootstrap
        collapseInstance.hide();
      } else {
        // Si no existe la instancia, crear una nueva y cerrarla
        const newCollapse = new bootstrap.Collapse(menuElement, {
          toggle: false
        });
        newCollapse.hide();
      }
    }
  }
}
