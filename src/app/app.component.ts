import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  returns = [
      {
          id: 100000036,
          returnDate: 'Apr 19, 2018',
          returnStatus: 'Completed',
          items: [{
              itemName: 'Digitizer for iPad 2 - White',
              sku: 'MDAP0541',
              orderNo: 100058475,
              returnReason: 'Backlight - Falling Off',
              comments: '',
              status: 'approved',
              creditMemo: '#100005764',
              denialReason: ''
          }]
      },
      {
          id: 100000035,
          returnDate: 'Apr 6, 2018',
          returnStatus: 'Completed',
          items: [
              {
                  itemName: 'Digitizer for iPad 2 - Black',
                  sku: 'MDAP0021',
                  orderNo: 100051906,
                  returnReason: 'Backlight - Falling Off',
                  comments: '',
                  status: 'approved',
                  creditMemo: '#100005954',
                  denialReason: ''
              },
              {
                  itemName: 'Glass Lens for iPhone 4 (GSM & CDMA) - White',
                  sku: 'DAP0412',
                  orderNo: 100051897,
                  returnReason: 'Backlight - Falling Off',
                  comments: '',
                  status: 'denied',
                  creditMemo: '',
                  denialReason: 'Denied - Heavy scratches on Digitizer'
              }
          ]
      },
      {
          id: 100000034,
          returnDate: 'Mar 21, 2018',
          returnStatus: 'Completed',
          items: [{
              itemName: 'Digitizer for iPhone 4 - White',
              sku: 'MDAP6541',
              orderNo: 100076475,
              returnReason: 'Backlight - Falling Off',
              comments: '',
              status: 'approved',
              creditMemo: '#100008764',
              denialReason: ''
          }]
      },
      {
          id: 100000023,
          returnDate: 'Feb 16, 2018',
          returnStatus: 'Completed',
          items: [{
              itemName: 'Digitizer for iPad Pro - Black',
              sku: 'MDAP6575',
              orderNo: 100076465,
              returnReason: 'Backlight - Falling Off',
              comments: '',
              status: 'denied',
              creditMemo: '',
              denialReason: 'Denied - Heavy scratches on Digitizer'
          }]
      },
      {
          id: 100000022,
          returnDate: 'Jan 29, 2018',
          returnStatus: 'Completed',
          items: [
              {
                  itemName: 'Digitizer for iPad 2 - White',
                  sku: 'MDAP0054',
                  orderNo: 100051986,
                  returnReason: 'Backlight - Falling Off',
                  comments: '',
                  status: 'denied',
                  creditMemo: '',
                  denialReason: 'Denied - Heavy scratches on Digitizer'
              },
              {
                  itemName: 'Glass Lens for iPhone 4 (GSM & CDMA) - Black',
                  sku: 'DAP0412',
                  orderNo: 100051897,
                  returnReason: 'Backlight - Falling Off',
                  comments: '',
                  status: 'approved',
                  creditMemo: '#100005424',
                  denialReason: ''
              }
          ]
      }

  ];





}
