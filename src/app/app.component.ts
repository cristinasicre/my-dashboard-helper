import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from './components/shared/dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openURL(urlType: string) {
    switch (urlType) {
      case 'check_mk_6':
        const dialogRef = this.dialog.open(DialogOverviewComponent, {
          width: '250px',
          data: { monitor: '' },
        });

        dialogRef.afterClosed().subscribe((result) => {
          let url =
            'https://cmk.vueling.com/checkmk_m/check_mk/index.py?start_url=%2Fcheckmk_m%2Fcheck_mk';

          if (result) {
            if (result.monitor != '') {
              url +=
                '%2Fview.py%3Ffilled_in%3Dfilter%26service_regex%3D' +
                result.monitor +
                '%26view_name%3Dsearchsvc';
            } else {
              url += '%2Fdashboard.py';
            }
            window.open(url);
          }
        });
        break;
      case 'check_mk_5':
        window.open(
          'https://checkmklb.vueling.com/master/check_mk/index.py?start_url=%2Fmaster%2Fcheck_mk%2Fdashboard.py'
        );
        break;
    }
  }
}
