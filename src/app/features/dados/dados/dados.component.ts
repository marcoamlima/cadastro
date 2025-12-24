import { Component, OnInit } from '@angular/core';

// Serviços
import { StorageService } from '../../../core/services/storage.service';

// Modelos
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-dados',
  standalone: true,
  imports: [],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.scss'
})
export class DadosComponent implements OnInit{
  protected usuario: User | null = null;
  
  constructor(
    private storageService: StorageService
  ) {} 
  
  ngOnInit(): void { 
    this.usuario = this.storageService.getItem<any>('usuario'); 
  }
}
