import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SportSupplement } from 'src/app/model/sport-supplement';
import { ConfigService } from 'src/app/service/config.service';
import { SportSupplementService } from 'src/app/service/sport-supplement.service';

@Component({
  selector: 'app-sport-supplement',
  templateUrl: './sport-supplement.component.html',
  styleUrls: ['./sport-supplement.component.scss']
})
export class SportSupplementComponent implements OnInit {

  columns = this.config.sportSupplementTableColumns;
  list$ = this.sportSupplementService.getAll();
  entity = 'sport-supplement';
  filterKeys: string[][] = this.config.sportSupplementTableColumns.map(item => [item.key, item.title]);
  filterKey: string = this.filterKeys[0][0];

  constructor(
    private config: ConfigService,
    private sportSupplementService: SportSupplementService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(sportSupplement: SportSupplement): void {
    this.router.navigate(['/', 'sport-supplement', sportSupplement._id])
  }

  onDeleteOne(sportSupplement: SportSupplement): void {
    if (window.confirm('Biztosan törli ezt a táplálékkiegészítőt?')) {
      this.sportSupplementService
        .remove(sportSupplement._id)
        .subscribe(() => (this.list$ = this.sportSupplementService.getAll()));
      // this.toastr.showSuccessWithTimeout(`
      //   <table class="table">
      //     <thead>
      //       <tr>
      //         <th>Élelmiszer azonosítója</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <td>${sportSupplement._id}</td>
      //       </tr>
      //     </tbody>
      //   </table>
      //   </span>`,
      //   "Az élelmiszer sikeresen törlődött:",
      //   5000)
    }
  }

}
