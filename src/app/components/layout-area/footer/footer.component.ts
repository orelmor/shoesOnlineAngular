import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public getDate(): string {

    const now = new Date();

    const year = now.getFullYear()
    const month = now.getMonth()

    let result = ""

    switch (month) {
      case 0:
        result = `ינואר ${year}`
        break
      case 1:
        result = `פברואר ${year}`
        break
      case 2:
        result = `מרץ ${year}`
        break
      case 3:
        result = `אפריל ${year}`
        break
      case 4:
        result = `מאי ${year}`
        break
      case 5:
        result = `יוני ${year}`
        break
      case 6:
        result = `יולי ${year}`
        break
      case 7:
        result = `אוגוסט ${year}`
        break
      case 8:
        result = `ספטמבר ${year}`
        break
      case 9:
        result = `אוקטובר ${year}`
        break
      case 10:
        result = `נובמבר ${year}`
        break
      case 11:
        result = `דצמבר ${year}`
        break
    }

    return result
  }

  
}

