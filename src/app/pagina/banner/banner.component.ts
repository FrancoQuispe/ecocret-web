import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      $("#row-buscar").hide();
      $("#btn-buscar").click(function(){
        $(this).hide();
        $("#row-buscar").show(250);
      });
      $("#logo-close").click(function(){
        $("#row-buscar").hide(250);
        $("#btn-buscar").show();
      });
      $("#dropdownMenuLink").click(function(){
        $("#dropdown-menu").toggle(200);
        $("#left").toggle(200);
        $("#right").toggle(200);
      });
    });

  }

}
