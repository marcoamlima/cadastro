import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Serviços
import { StorageService } from '../../../core/services/storage.service';

// Modelos
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  protected nome: string = "";
  protected email: string = "";
  protected senha: string = "";

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  protected salvar() {
    if (this.validarEmail(this.email)) {
      const usuario: User = {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      };
      this.storageService.setItem('usuario', usuario);
      this.router.navigate(['/dados']);
    } else {
      alert('E-mail inválido!');
      return;
    }
  }

  protected validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}
