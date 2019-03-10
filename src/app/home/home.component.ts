import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  items = [
    { category: "Aqidah", name: "Tsalatsah Ushul", image: "assets/images/courses/ushul-tsalatsah.png"},
    { category: "Aqidah", name: "Aqidah Wasithiyah", image: "assets/images/courses/aqidah-wasithiyah.png"},
    { category: "Aqidah", name: "Kitab Tauhid", image: "assets/images/courses/kitab-tauhid.png"},
    { category: "Tafsir", name: "Tafsir Ibnu Katsir", image: "assets/images/courses/ibn-kathir.png"},
    { category: "Tafsir", name: "Tafsir At-Thabari", image: "assets/images/courses/at-thabari.png"},
    { category: "Al-Qur'an Pemula", name: "Tahsin", image: "assets/images/courses/tahsin.png"},
    { category: "Al-Qur'an Pemula", name: "Tajwid", image: "assets/images/courses/tajwid.png"},
    { category: "Bahasa Arab", name: "Bahasa Arab Dasar", image: "assets/images/courses/arabic.png"},
    { category: "Bahasa Arab", name: "Nahwu", image: "assets/images/courses/arabic.png"},
    { category: "Bahasa Arab", name: "Sharaf", image: "assets/images/courses/arabic.png"},
    { category: "Tazkiyatun Nufus", name: "Riyadhu Shalihin", image: "assets/images/courses/riyadhu-shalihin.png"},
    { category: "Fiqih", name: "Bulughul Maram", image: "assets/images/courses/fiqih.png"},
    { category: "Fiqih", name: "Umdatul Ahkam", image: "assets/images/courses/fiqih.png"},
    { category: "Fiqih", name: "Muamalah", image: "assets/images/courses/fiqih.png"},
    { category: "Fiqih", name: "Munakahat", image: "assets/images/courses/fiqih.png"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
