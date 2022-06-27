import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { SportSupplement } from 'src/app/model/sport-supplement';
import { SportSupplementService } from 'src/app/service/sport-supplement.service';

@Component({
  selector: 'app-sport-supplement-editor',
  templateUrl: './sport-supplement-editor.component.html',
  styleUrls: ['./sport-supplement-editor.component.scss']
})
export class SportSupplementEditorComponent implements OnInit {

  sportSupplement$: Observable<SportSupplement> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['_id']) {
        return this.sportSupplementService.get(params['_id'])
      }
      return of(new SportSupplement())
    })
  );

  clicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sportSupplementService: SportSupplementService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, sportSupplement: SportSupplement): void {
    this.clicked = true;
    if (sportSupplement._id === '') {
      this.sportSupplementService.create(form.value).subscribe(
        () => this.router.navigate(['sport-supplement']),
        err => console.error(err)
      );
    } else {
      this.sportSupplementService.update(sportSupplement).subscribe(
        () => this.router.navigate(['sport-supplement']),
        err => console.error(err)
      );
    }
  }

}
