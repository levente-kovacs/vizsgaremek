import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  columns = this.config.userTableColumns;
  list$ = this.userService.getAll();
  entity = 'user';
  filterKeys: string[][] = this.config.userTableColumns.map(item => [item.key, item.title]);
  filterKey: string = this.filterKeys[0][0];

  constructor(
    private config: ConfigService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(user: User): void {
    this.router.navigate(['/', 'user', user._id])
  }

  onDeleteOne(user: User): void {
    if (window.confirm('Biztosan törli ezt a felhasználót?')) {
      this.userService
        .remove(user._id)
        .subscribe(() => (this.list$ = this.userService.getAll()));
    }
  }

}
