import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainareaComponent } from './components/mainarea/mainarea.component';
import { ListareaComponent } from './components/listarea/listarea.component';
import { CelebrationComponent } from './components/celebration/celebration.component';
import { ContentsComponent } from './components/contents/contents.component';
import { MapareaComponent } from './components/maparea/maparea.component';
import { GalleryareaComponent } from './components/galleryarea/galleryarea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,MainareaComponent,ListareaComponent,CelebrationComponent,ContentsComponent,
    MapareaComponent,GalleryareaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
