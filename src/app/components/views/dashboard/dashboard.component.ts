import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { URLs } from 'src/environments/varibles';
import { DialogOverviewComponent } from '../../shared/dialog-overview/dialog-overview.component';
import { getDatabase, ref, onValue } from 'firebase/database';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
 

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const db = getDatabase();
    const starCountRef = ref(db, '/bookmarks' );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
     // updateStarCount(postElement, data);
    });
  }

  openURL(urlType: string) {
    switch (urlType) {
      case 'check_mk_6':
        this.openSearch(URLs.CHECK_MK_6);
        break;
      case 'check_mk_5':
        this.openSearch(URLs.CHECK_MK_5);
        break;
      case 'kibana':
        this.redirectTo(URLs.KIBANA.baseUrl);
        break;
      case 'grafana':
        this.redirectTo(URLs.GRAFANA.baseUrl);
        break;
      case 'helpDesk':
        this.redirectTo(URLs.HELPDESK.baseUrl);
        break;
    }
  }

  redirectTo(url: string) {
    window.open(url);
  }

  openSearch(url: any) {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data: { monitor: '' },
    });
    let urlToRedirect = '';
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.monitor != '') {
          urlToRedirect =
            url.baseUrl + url.paramsUrl + result.monitor + url.paramsUrlEnd;
        } else {
          urlToRedirect = url.baseUrl + '%2Fdashboard.py';
        }
        this.redirectTo(urlToRedirect);
      }
    });
  }
}
