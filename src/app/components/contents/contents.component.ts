import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  standalone: true,
  imports: [],
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.css'
})
export class ContentsComponent {
  contents=[
    {
      image:"https://img.freepik.com/free-photo/delicious-food-table_23-2150857812.jpg?size=626&ext=jpg&ga=GA1.1.2000592546.1701124047&semt=ais_user",
      head:"Indian Cuisine",
      link:"https://en.wikipedia.org/wiki/Indian_cuisine"
    },
    {
      image:"https://static.wixstatic.com/media/d3f3a3_9327782723694acca04af9b5c7ce75e0~mv2_d_2800_1903_s_2.jpg/v1/fill/w_1406,h_1263,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d3f3a3_9327782723694acca04af9b5c7ce75e0~mv2_d_2800_1903_s_2.jpg",
      head:"Indian Dance",
      link:"https://en.wikipedia.org/wiki/Dance_in_India"
    },
    {
      image:"https://bl-i.thgim.com/public/migration_catalog/article18215801.ece/alternates/LANDSCAPE_1200/TH14_TAJ_2277936f",
      head:"Indian Monuments",
      link:"https://en.wikipedia.org/wiki/Monuments_of_National_Importance_(India)"
    },
    {
      image:"https://as2.ftcdn.net/v2/jpg/06/26/32/89/1000_F_626328902_fSfRbRGm512plmMO5AEomypnifASTFH1.jpg",
      head:"Indian Gallery",
      link:"https://stock.adobe.com/in/search/images?filters%5Bcontent_type%3Aphoto%5D=true&hide_panel=true&k=india&search_type=usertyped"
    },
  ]

}
