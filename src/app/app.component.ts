import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    recordsPerPage = 10;

    returns = [
      {
          id: 100000036,
          returnDate: 'Apr 25, 2018',
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
          returnDate: 'Apr 20, 2018',
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
          returnDate: 'Apr 18, 2018',
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
          returnDate: 'Apr 16, 2018',
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
          returnDate: 'Apr 3, 2018',
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
      },
      {
          id: 100000076,
          returnDate: 'Mar 19, 2018',
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
          id: 100000037,
          returnDate: 'Mar 6, 2018',
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
          id: 100000764,
          returnDate: 'Feb 20, 2018',
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
          id: 100000753,
          returnDate: 'Jan 29, 2018',
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
          id: 100000678,
          returnDate: 'Jan 2, 2018',
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


  shouldDisplayCreditMemo(returnItem) {
      var displayCreditMemo = false;

      if (returnItem.status == "approved") {
          displayCreditMemo = true;
      }


      return displayCreditMemo;

  }

  shouldDisplayDenialReason(returnItem) {
      var displayDenialReason = false;

      if (returnItem.status == "denied") {
          displayDenialReason = true;
      }

      return displayDenialReason;

  }

 // toggleExpanded(return) {}





}
