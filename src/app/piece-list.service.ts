import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PieceListService {
  constructor() {}
  private pieceList: any[] = [];

  getPieceDataList() {
    return this.pieceList;
  }

  addPieceData(piece: any) {
    this.pieceList.push(piece);
  }
}
