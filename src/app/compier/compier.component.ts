import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-compier',
  templateUrl: './compier.component.html',
  styleUrls: ['./compier.component.css'],
  providers: [HttpService]
})
export class CompierComponent implements OnInit {
  langs: Lang[] = [
    { value: 'c', viewValue: 'C' },
    { value: 'cpp', viewValue: 'C++' },
    { value: 'cpp11', viewValue: 'C++11' }
  ];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {}

  complierCode(codeText, inputText, outputText) {
    outputText.value = 'Исполняется...';
    this.httpService.getDataResult(codeText.value, inputText.value).subscribe( data => {
      outputText.value = data.toString();
    });
  }

}

interface Lang {
  value: string;
  viewValue: string;
}
