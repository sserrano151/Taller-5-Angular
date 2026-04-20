import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../serie';
import { SerieService } from '../serie-service';

@Component({
  selector: 'app-serie-list',
  imports: [CommonModule],
  templateUrl: './serie-list.html',
  styleUrl: './serie-list.css'
})
export class SerieListComponent implements OnInit {

  series: Serie[] = [];
  selectedSerie: Serie | null = null;
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
      this.averageSeasons = this.series.reduce((sum, s) => sum + s.seasons, 0) / this.series.length;
    });
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}