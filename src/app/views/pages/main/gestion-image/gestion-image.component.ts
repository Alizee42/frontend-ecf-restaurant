import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject, takeUntil, Observable} from "rxjs";
import {FormBuilder, FormGroup} from '@angular/forms';

import { GestionImageService } from '@core/service/gestion-image.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-gestion-image',
  templateUrl: './gestion-image.component.html',
  styleUrls: ['./gestion-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestionImageComponent implements OnInit {
  
  public images$: Observable<any> = new Observable<any>();
  public images = [];
  public image: any;
  formGestionImage!: FormGroup;
  private _destroy$ = new Subject<void>();

  constructor(private router: Router, private gestionImageService : GestionImageService,  private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.images$ = this.gestionImageService.getImages();
    this.getImages();
    this.initForm();
  }

  public initForm(): void {
    this.formGestionImage = this.formBuilder.group({
        titre: [''],
        path: [''],
      })
}

  public getImages(): any {
    this.gestionImageService.getImages()
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Images", data);
          this.images = data
        })
  }

  public getOneImage(imageId: number): any {
    this.gestionImageService.getOneImage(imageId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Details Image", data);
          this.image = data
        })
  }

  public deleteImage(imageId: number): any {
    this.gestionImageService.deleteImage(imageId)
        .pipe(takeUntil(this._destroy$))
        .subscribe(data => {
          console.log("Remove Image", data);
          this.image = data;
          window.location.reload();
          alert("Image supprimée");
          this.router.navigate(['/gestion-image'])
        })
  }

  public createOrUpdateImage(id?: number): any {
    console.log("Create Image", this.formGestionImage.value);
    const observable = id ? this.gestionImageService.updateImage(this.formGestionImage.value, id)
        : this.gestionImageService.createImage(this.formGestionImage.value);

    observable.pipe(takeUntil(this._destroy$))
        .subscribe(data => {
            console.log("Create Image", data);
            window.location.reload();
            alert("Image enregistrée avec succès");
        })
}

ngOnDestroy() {
  this._destroy$.next();
  this._destroy$.complete();
} 

}
