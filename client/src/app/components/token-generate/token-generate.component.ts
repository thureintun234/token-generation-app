import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token-generate',
  templateUrl: './token-generate.component.html',
  styleUrls: ['./token-generate.component.css'],
})
export class TokenGenerateComponent implements OnInit {
  token;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.route.snapshot.paramMap.get('token'));
  }

  ngOnInit(): void {}
}
