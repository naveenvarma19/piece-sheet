import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PieceListService } from '../piece-list.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  pieceData = {
    trayNumber: null,
    pieceType: '',
    pieceCount: null,
    weight: null,
  };
  totalPieceList: any = {};

  constructor(
    private router: Router,
    private pieceListService: PieceListService
  ) {}

  ngOnInit() {
    this.totalPieceList = this.pieceListService.getTotalData();
  }

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
      this.totalPieceList = this.pieceListService.getTotalData();

      PieceFormData.reset();
    }
  }
}
