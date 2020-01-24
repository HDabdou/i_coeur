import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  date:any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  transaction = [
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
    {date:"2019-12-05 13:27:50",numero:"779854080",montant:"1000"},
  ]
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    this.date = ((new Date()).toJSON()).split("T",2)[0];
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
