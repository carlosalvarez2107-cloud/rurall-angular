import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-menu-lateral',
  styleUrl: './menu-lateral.css',
  templateUrl: './menu-lateral.html',
})
export class MenuLateral {

  menuAbierto = false;

  toggleMenuLateral(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  enviarContacto(evento: SubmitEvent): void {
    evento.preventDefault();

    const formulario = evento.currentTarget as HTMLFormElement;
    const datos = new FormData(formulario);

    const nombreUsuario = datos.get('nombre') || 'Usuario';

    alert(
      `📩 ¡Mensaje Enviado Exitosamente!\n\n` +
      `Muchas gracias, ${nombreUsuario}. ` +
      `Tu consulta ha sido registrada y remitida al correo oficial de soporte técnico.`
    );

    formulario.reset();

    this.menuAbierto = false;
  }
}