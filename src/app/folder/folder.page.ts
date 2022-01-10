import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public firmalar:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.firmalar = 
    [
      {adi:"Akbank",kategori:"Banka",logo:"http://www.akbank.com/SiteAssets/img/akbfa.jpg",aciklama:"1956 yilinda kuruldı"},
      {adi:"Vakıfbank",kategori:"Banka",logo:"https://kayasehiristanbul.net/wp-content/uploads/2015/12/Vakifbank.png",aciklama:"1956 yilinda kuruldı"},
      {adi:"Yıldız Teknik",kategori:"Universite",logo:"https://upload.wikimedia.org/wikipedia/commons/3/37/Y%C4%B1ld%C4%B1z_Technical_University_Logo.png",aciklama:"1956 yilinda kuruldı"},
      {adi:"İstanbul Teknik",kategori:"Universite",logo:"http://www.akbank.com/SiteAssets/img/akbfa.jpg",aciklama:"1956 yilinda kuruldı"},
      {adi:"Elektrik Arıza",kategori:"Acil",logo:"http://www.akbank.com/SiteAssets/img/akbfa.jpg",aciklama:"1956 yilinda kuruldı"}
    ];
  }




}
