import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PieceListService } from '../piece-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  piecesList: any[] = [];
  totalPieceList: any = {};
  constructor(
    private pieceListService: PieceListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.piecesList = this.pieceListService.getPieceDataList();
    this.totalPieceList = this.pieceListService.getTotalData();
  }

  onHomeRedirect() {
    this.router.navigate(['']);
  }
}
