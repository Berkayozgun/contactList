import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
public firma_adi:string;
public firma_logo:string;
public firma_kategori:string;
public firma_aciklama:string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.firma_adi = this.activatedRoute.snapshot.paramMap.get('adi');
    this.firma_logo = this.activatedRoute.snapshot.paramMap.get('logo');
    this.firma_kategori = this.activatedRoute.snapshot.paramMap.get('kategori');
    this.firma_aciklama = this.activatedRoute.snapshot.paramMap.get('aciklama');
    console.log(this.firma_adi);

  }

}
