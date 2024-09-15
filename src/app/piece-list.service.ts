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

  getTotalData() {
    const totalData = {
      totalTrays: this.pieceList.length, // The number of trays is the length of the pieceList
      totalWeight: 0,
      totalPieces: 0,
    };

    this.pieceList.forEach((piece) => {
      totalData.totalWeight += piece.weight || 0; // Adds the weight of each piece, ensuring no null values
      totalData.totalPieces += piece.pieceCount || 0; // Adds the piece count, ensuring no null values
    });

    return totalData;
  }

  addPieceData(piece: any) {
    this.pieceList.push(piece);
  }
}
