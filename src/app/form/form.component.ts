import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PieceListService } from '../piece-list.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  pieceData = {
    trayNumber: null,
    pieceType: '',
    pieceCount: null,
    weight: null,
  };
  constructor(
    private router: Router,
    private pieceListService: PieceListService
  ) {}

  onViewPieces() {
    this.router.navigate(['viewlist']);
  }

  onSubmit(PieceFormData: NgForm) {
    if (PieceFormData) {
      const piece = {
        trayNumber: PieceFormData.value.trayNumber,
        pieceType: PieceFormData.value.pieceType,
        pieceCount: PieceFormData.value.pieceCount,
        weight: PieceFormData.value.weight,
      };
      this.pieceListService.addPieceData(piece);
      PieceFormData.reset();
    }
  }
}
